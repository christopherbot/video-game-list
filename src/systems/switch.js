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
  id: 'ff1891f7-43ec-4b13-a03e-3f7ea764ab55',
  name: 'Animal Crossing: New Horizons',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Animal_Crossing:_New_Horizons',
  price: 89,
  tags: ['acnh'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '4fc6534e-d599-44e2-a757-50edb28f87df',
  name: 'Atelier Ryza: Ever Darkness & the Secret Hideout',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Atelier_Ryza:_Ever_Darkness_%26_the_Secret_Hideout',
  price: 67,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '809f3fc9-c5f7-46b4-a3ea-292cf049f325',
  name: 'Catan',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Catan#Video_games',
  price: 14,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '4c1802d2-a661-40c6-8d79-5780da0dd1b4',
  name: 'Drawful 2',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Jackbox_Games#Drawful_2_(2016)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3df0b8e1-336e-482d-84e7-2da98a3ec121',
  name: 'Fire Emblem: Three Houses',
  receiptLocation: '(gmail - Best Buy)',
  url: 'https://en.wikipedia.org/wiki/Fire_Emblem:_Three_Houses',
  price: 80,
  tags: ['fe16', 'fe3h', 'feth', '3h', 'th'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '10ef4a2d-9c8e-4fc1-966f-e3b3979cc7e0',
  name: 'Fire Emblem: Three Houses - Cindered Shadows',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Fire_Emblem:_Three_Houses',
  price: 35,
  tags: ['fe16', 'fe3h', 'feth', '3h', 'th'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '9b20ef15-4bea-407d-942a-2812929c6180',
  name: 'The First Tree',
  receiptLocation: 'Digital Download',
  url: 'https://www.nintendo.com/games/detail/the-first-tree-switch/',
  price: 4,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
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
  id: 'f34601f3-7549-4b2a-8fda-7415dcc0b91c',
  name: 'Phoenix Wright: Ace Attorney Trilogy',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Phoenix_Wright:_Ace_Attorney_Trilogy',
  price: 23,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '19a84725-ee58-464d-833a-26d8da54f716',
  name: 'Picross S4',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Picross_S#Picross_S4',
  price: 11,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f738df56-2108-41f7-b3f1-bcd91adac155',
  name: 'Picross S5',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Picross_S#Picross_S5',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '580aa6cc-bf88-4de2-acd4-f59587df8295',
  name: 'PictoQuest',
  receiptLocation: 'Digital Download',
  url: 'https://www.nintendo.com/games/detail/pictoquest-switch/',
  price: 7,
  tags: [],
  extras: [],
  played: false,
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
}, {
  id: 'f4f3e847-bc0c-480d-9777-8d2f6b5ebe16',
  name: 'Shantae and the Pirate\'s Curse',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Shantae_and_the_Pirate%27s_Curse',
  price: 14,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'd095562a-5e64-4cb5-9527-74b87ca01902',
  name: 'Superliminal',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Superliminal',
  price: 20,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c06ce909-6be7-49d8-bcfe-71f82e0d7941',
  name: 'Tales of Vesperia: Definitive Edition',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Tales_of_Vesperia#Definitive_Edition',
  price: 22,
  tags: ['tov'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '57bda815-59dd-4a84-8386-95b1f6e09c4d',
  name: 'Undertale',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Undertale',
  price: 14,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'd3afc6bc-7684-46c9-ad12-23c1a4833158',
  name: 'Ys VIII: Lacrimosa of DANA',
  receiptLocation: 'Digital Download',
  url: 'https://en.wikipedia.org/wiki/Ys_VIII:_Lacrimosa_of_Dana',
  price: 36,
  tags: ['8'],
  extras: [],
  played: true,
  completed: false,
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
