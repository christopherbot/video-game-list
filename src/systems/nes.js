const systems = [{
  id: '3909eeb4-f171-4d6a-be84-2b3bda066944',
  color: 'Grey',
  description: '',
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

const cables = ['Power', 'AV']

const accessories = []

const controllers = ['Classic x2']

const games = [{
  id: '1fb7104c-5ee0-4a5a-a8f6-c125766f09c4',
  name: 'Double Dragon III',
  receiptLocation: '(Brown envelope)',
  url: 'https://en.wikipedia.org/wiki/Double_Dragon_III:_The_Sacred_Stones',
  price: 10,
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '19b3589c-adf1-46a2-9db5-34bc10d40dd6',
  name: 'Duck Tales',
  receiptLocation: 'Chrono Cross',
  url: 'https://en.wikipedia.org/wiki/DuckTales_(video_game)',
  price: 0,
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3b8049f9-b4f7-4cde-8241-dfe5e3c2245e',
  name: 'The Legend of Zelda',
  receiptLocation: '(Brown envelope)',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)',
  price: 30,
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '6da91c0e-a1ba-4f80-984c-e7961e21c7ce',
  name: 'The Legend of Zelda: The Adventure of Link',
  receiptLocation: '(Toyratt)',
  url: 'https://en.wikipedia.org/wiki/Zelda_II:_The_Adventure_of_Link',
  price: 0,
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'badb3d00-2202-4615-800a-714a54877c37',
  name: 'Super Mario Bros. / Duck Hunt',
  receiptLocation: 'Chrono Cross',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_Bros.',
  price: 0,
  extras: ['Zapper'],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

export default {
  id: 'b60de999-f860-4ca9-8ede-bdf0424e41ed',
  name: 'NES',
  index: 0,
  systems,
  cables,
  accessories,
  controllers,
  games,
}
