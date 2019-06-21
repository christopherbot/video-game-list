const systems = [{
  id: 'd7cc111a-442d-4153-88a0-fa89a770b057',
  color: 'Black',
  description: '32GB',
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

const cables = ['Power', 'HDMI']

const accessories = ['Gamepad charging cradle']

const controllers = ['Gamepad']

const games = [{
  id: '4109b0dc-37a0-425c-af56-c99fb9d0e73d',
  name: 'The Legend of Zelda: Breath of the Wild',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild',
  price: 0,
  tags: ['tloz', 'botw'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'df366c6b-6cba-4b40-ae31-705695a9418a',
  name: 'Super Smash Bros. 4',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._for_Nintendo_3DS_and_Wii_U',
  price: 0,
  tags: ['ssb4', 'sm4sh'],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '28bc58be-a3a8-4535-9841-84b888c37a29',
  name: 'Xenoblade Chronicles X',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Xenoblade_Chronicles_X',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

export default {
  id: 'cb635e03-5b31-4ce5-a399-2e471e319493',
  name: 'Wii U',
  index: 5,
  systems,
  cables,
  accessories,
  controllers,
  games,
}
