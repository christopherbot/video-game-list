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
  tags: ['fe16', 'fe3h', 'feth', '3h', 'th'],
  extras: [],
  played: true,
  completed: false,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '42aa401c-f2eb-430a-be4c-b4ff81636dff',
  name: 'The Legend of Zelda: Link\'s Awakening',
  receiptLocation: '(Gift from Kristen)',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Link%27s_Awakening_(2019_video_game)',
  price: 60,
  tags: ['tloz', 'la', 'links'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '5059ac75-e8f9-4269-b5f0-9f5cb702a494',
  name: 'Okami HD',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/%C5%8Ckami#High-definition_remaster',
  price: 20,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '9378aa9e-262b-4d05-9add-be1df71139ed',
  name: 'Overcooked Special Edition',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Overcooked',
  price: 9,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c4e525ce-e2e1-47ec-affe-6382b02bf3af',
  name: 'Pokemon Sword',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sword_and_Shield',
  price: 80,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
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
