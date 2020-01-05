const systems = [{
  id: '6e67e503-f41a-420b-9ed5-58f7e6fe0cba',
  color: 'Grey',
  description: '32GB',
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

const cables = ['Power', 'HDMI']

const accessories = [
  'Dock',
  'Joy-Con straps',
  'Joy-Con Comfort Grip',
  'GEEKLIN Dobe Joy-Con Controller Grip x2',
]

const controllers = ['Grey Joy-Con x2']

const games = [{
  id: '3df0b8e1-336e-482d-84e7-2da98a3ec121',
  name: 'Fire Emblem: Three Houses',
  receiptLocation: '(gmail - Best Buy)',
  url: 'https://en.wikipedia.org/wiki/Fire_Emblem:_Three_Houses',
  price: 80,
  tags: ['fe16', '3h', 'th'],
  extras: [],
  played: true,
  completed: false,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

export default {
  id: '5c2c887a-3fbe-4a57-b488-6429206c3325',
  name: 'Switch',
  systems,
  cables,
  accessories,
  controllers,
  games,
}
