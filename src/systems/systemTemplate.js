const systems = [{
  id: '',
  color: '',
  description: '',
  cables: [],
  accessories: [],
  borrowed: {
    inFrom: '',
    outTo: '',
  },
}]

const controllers = []

const games = [{
  id: '',
  name: '',
  receiptLocation: '',
  url: '',
  price: 0,
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowed: {
    inFrom: '',
    outTo: '',
  },
}]

export default {
  id: '',
  name: '',
  systems,
  controllers,
  games,
}
