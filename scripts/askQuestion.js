const isDefined = value => value !== undefined && value !== null
const isNonEmptyString = value => value !== ''
const trim = value => typeof value === 'string' ? value.trim() : value

const askQuestion = (rl, question) => new Promise((resolve, reject) => {
  const defaultAnswer = isDefined(question.defaultAnswer) ? ` (${question.defaultAnswer})` : ''

  rl.question(`${question.label}${defaultAnswer}: `, (answer) => {
    // validate strings that are used as variable names
    if (question.type === 'string') {
      if (question.oneOf && !question.oneOf.includes(answer)) {
        reject({
          type: 'invalid_type',
          message: `Please enter one of the following values: ${question.oneOf.join(', ')}`,
        })

        return
      }

      const startsWithValidCharacter = string => /^[a-zA-Z_]/.test(string)

      if (question.variableName) {
        if (!startsWithValidCharacter(answer)) {
          reject({
            type: 'invalid_type',
            message: 'Please enter a valid string. It must begin with a letter or underscore.',
          })

          return
        }

        answer = answer[0].toLowerCase() + answer.substr(1)
      }

      if (question.titleCase) {
        answer = answer[0].toUpperCase() + answer.substr(1)
      }

      if (question.escapeSingleQuotes) {
        answer = answer.replace("'", "\\'")
      }
    }

    // validate booleans
    if (question.type === 'boolean') {
      // convert y/n answers into booleans
      if (answer === 'y' || answer === 'Y' || answer === 'true') {
        answer = true
      } else if (answer === 'n' || answer === 'N' || answer === 'false') {
        answer = false
      } else {
        reject({
          type: 'invalid_type',
          message: 'Please enter "y" or "n".',
        })

        return
      }
    }

    // validate numbers
    if (question.type === 'number') {
      if (answer === '' && isDefined(question.defaultAnswer)) {
        answer = question.defaultAnswer
      } else {
        answer = parseInt(answer)
      }

      if (isNaN(answer)) {
        reject({
          type: 'invalid_type',
          message: 'Please enter a number.',
        })

        return
      }
    }

    // validate arrays
    if (question.type === 'array') {
      // TODO validate question.subType
      answer = answer
        .split(',')
        .map(trim)
        .filter(isNonEmptyString)
    }

    resolve(answer)
  })
})

module.exports = askQuestion
