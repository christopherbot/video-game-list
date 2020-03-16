const path = require('path')
const readline = require('readline')
const fs = require('fs')
const colors = require('colors/safe')
const askQuestion = require('./askQuestion')

colors.setTheme({
  pathColor: ['cyan', 'underline']
})

const { red, green, cyan, pathColor } = colors

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

module.exports = async (questions, defaultAnswers, scriptPath) => {
  let answers = {
    ...defaultAnswers,
  }

  for (const question of questions) {
    if (question.skip) {
      continue
    }

    while (true) {
      try {
        const answer = await askQuestion(rl, question)
        answers[question.param] = answer

        break
      } catch (error) {
        console.log(red(error.message))
      }
    }
  }

  rl.close()

  console.log('')
  console.log('Game data:', answers)

  let template = fs.readFileSync(
    path.join(scriptPath, 'template.txt'),
    'utf8',
  )

  const getPlaceholder = param => `__${param}__`

  Object.keys(answers).forEach((param) => {
    const placeholder = getPlaceholder(param)
    const answer = answers[param]

    if (Array.isArray(answer)) {
      const arrayItems = answer.reduce((acc, item, i) => {
        if (i === answer.length - 1) {
          acc += `'${item}'`
        } else {
          acc += `'${item}', `
        }

        return acc
      }, '')

      template = template.replace(new RegExp(placeholder, 'g'), arrayItems)

      return
    }

    template = template.replace(new RegExp(placeholder, 'g'), answer)
  })

  const ROOT = path.join(__dirname, '../')
  const projectFilePath = path.join('src/systems', `${answers.console.toLowerCase()}.js`)
  const outputFilePath = path.join(ROOT, projectFilePath)

  console.log('')

  if (!fs.existsSync(outputFilePath)) {
    console.log(
      red('No file found for console'),
      cyan(answers.console.toLowerCase()),
    )
    console.log(
      red('Check that the file exists at'),
      pathColor(projectFilePath),
    )
    console.log('')

    process.exit(1)
  }

  let fileContents = fs.readFileSync(projectFilePath, 'utf-8')

  // Super hacky :) If the file structure changes, this might break.
  const startString = 'const games = '
  const gamesStartIndex = fileContents.indexOf(startString) + startString.length

  const endString = '}]'
  const gamesEndIndex = fileContents.lastIndexOf(endString) + endString.length

  const gamesString = fileContents.slice(gamesStartIndex, gamesEndIndex)

  const games = [...gamesString.matchAll(/name: '(.+)'/g)]
    .map(match => ({
      name: match[1],
      index: match.index,
    }))


  const theString = 'the '
  const removeStartingThe = (string) => {
    string = string.toLowerCase()

    if (string.startsWith(theString)) {
      return string.slice(theString.length)
    }

    return string
  }

  const compareNames = (name1, name2) => {
    name1 = removeStartingThe(name1)
    name2 = removeStartingThe(name2)

    return name1.localeCompare(name2, 'en', { sensitivity: 'accent' })
  }

  const gamesBeforeNewGame = []
  for (let i = 0; i < games.length; i++) {
    // sortingOutcome of -1 means new game comes before this game
    // sortingOutcome of 1 means new games comes after this game
    const sortingOutcome = compareNames(answers.name, games[i].name)

    // break on the game that the new game comes before
    if (sortingOutcome !== 1) {
      break
    }

    gamesBeforeNewGame.push({
      ...games[i],
      sortingOutcome,
    })
  }

  const gameBeforeNewGame = gamesBeforeNewGame.length
    ? gamesBeforeNewGame[gamesBeforeNewGame.length - 1]
    : null

  if (gameBeforeNewGame) {
    template = `}, {\n${template}\n`
  } else {
    template += '\n}, {\n'
  }

  const lines = fileContents.split('\n')
  const gamesStartLine = lines.findIndex(line => line.includes('const games = [{'))
  const newGameLine = gameBeforeNewGame
    // start inserting 11 lines after "name"
    ? lines.findIndex(line => line.includes(`name: '${gameBeforeNewGame.name}'`)) + 11
    // start inserting the line after the start of the array
    : gamesStartLine + 1

  const newFileContents = lines.reduce((newContents, line, index) => {
    if (index === newGameLine) {
      newContents += template
    }

    if (index === lines.length - 1) {
      newContents += line
    } else {
      newContents += `${line}\n`
    }

    return newContents
  }, '')

  fs.writeFileSync(outputFilePath, newFileContents)

  console.log('')
  console.log(
    green('Added game'),
    cyan(answers.name),
    green('to'),
    pathColor(projectFilePath),
  )
  console.log('')
}
