const systems = [{
  id: '',
  color: '',
  description: '',
  borrowed: {
    inFrom: '',
    outTo: '',
  },
}]

const cables = []

const accessories = []

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
  cables,
  accessories,
  controllers,
  games,
}
