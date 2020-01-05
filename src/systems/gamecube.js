const systems = [{
  id: 'ea8205f7-2d59-499c-aa39-43fa53a196aa',
  color: 'Indigo',
  description: '',
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

const cables = ['Power', 'AV']

const accessories = ['GBA connector x2', 'Game Boy Player w/ boot disc']

const controllers = [
  'Indigo x2 (broken c-sticks)',
  'Spice (orange) x2',
  'Jet (black)',
  'Platinum Wavebird',
  'Grey Wavebird',
]

const games = [{
  id: '3a1b858f-dfd1-43e4-8cc3-216c0c306882',
  name: '1080° Avalanche',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/1080%C2%B0_Avalanche',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a032a31d-ca44-4897-b397-b58cd2fc01b4',
  name: 'Animal Crossing',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Animal_Crossing_(video_game)',
  price: 0,
  tags: ['ac'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: '35ce1ef7-e101-4d75-8bb2-2ef96b95d663',
  name: 'Crash Bandicoot: The Wrath of Cortex',
  receiptLocation: 'Final Fantasy XI Online',
  url: 'https://en.wikipedia.org/wiki/Crash_Bandicoot:_The_Wrath_of_Cortex',
  price: 13.5,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a8852fe8-5adf-4577-802f-ac9e15e7a0dc',
  name: 'Enter The Matrix',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Enter_the_Matrix',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c5690e87-3f4f-4659-87fa-f12f3837de64',
  name: 'Eternal Darkness: Sanity\'s Requieum',
  receiptLocation: 'Pikmin',
  url: 'https://en.wikipedia.org/wiki/Eternal_Darkness',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '61f34b1a-c6a2-440d-9731-f29e8faad9ce',
  name: 'Final Fantasy Crystal Chronicles',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Final_Fantasy_Crystal_Chronicles',
  price: 0,
  tags: ['ff'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '6f0d55a6-4dce-4d2d-b39a-633a7e299579',
  name: 'Fire Emblem: Path of Radiance',
  receiptLocation: 'Fire Emblem: Radiant Dawn',
  url: 'https://en.wikipedia.org/wiki/Fire_Emblem:_Path_of_Radiance',
  price: 75,
  tags: ['fe9', 'por'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: 'Matt',
}, {
  id: 'c0b174b5-001a-4641-b181-df9eb756830b',
  name: 'Godzilla: Destroy All Monsters Melee',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Godzilla:_Destroy_All_Monsters_Melee',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '39660d49-1468-46b5-a119-3c4c9326f61f',
  name: 'GoldenEye: Rogue Agent',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/GoldenEye:_Rogue_Agent',
  price: 0,
  tags: ['james bond', '007'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '8e53dc83-781e-4896-a769-653c4f47e136',
  name: 'Harvest Moon: A Wonderful Life',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Harvest_Moon:_A_Wonderful_Life',
  price: 0,
  tags: ['hmawl'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '50808b96-d404-4559-b0b3-a5411f886353',
  name: 'Harvest Moon: Magical Melody',
  receiptLocation: 'Harvest Moon: A Wonderful Life',
  url: 'https://en.wikipedia.org/wiki/Harvest_Moon:_Magical_Melody',
  price: 0,
  tags: ['hmmm'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3bf73ba0-3fbd-4900-9f0b-527f0d01d2e3',
  name: 'James Bond 007: Nightfire',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/James_Bond_007:_Nightfire',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '03950f4b-6a36-47ef-8a36-63510a6c695d',
  name: 'James Bond 007: Agent Under Fire',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/James_Bond_007:_Agent_Under_Fire',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Matt',
}, {
  id: '8f180946-e5e7-4f11-a49c-878fa4f6230a',
  name: 'Kirby Air Ride',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Kirby_Air_Ride',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Matt',
}, {
  id: 'c266a4b5-265b-45b9-9c9b-fadb550b5a70',
  name: 'The Legend of Zelda: Four Swords Adventure',
  receiptLocation: 'Harvest Moon: A Wonderful Life',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Four_Swords_Adventures',
  price: 0,
  tags: ['tloz', '4'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f6af982d-633c-4790-903f-45f094377bb3',
  name: 'The Legend of Zelda: The Wind Waker',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_The_Wind_Waker',
  price: 0,
  tags: ['tloz', 'ww'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f5467089-2404-4ecf-b0a6-aae0e49563c9',
  name: 'Luigi\'s Mansion',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Luigi%27s_Mansion',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c9caf3fc-5f45-48b9-b91b-9d7355ba3f02',
  name: 'Mario Kart: Double Dash!!',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Kart:_Double_Dash',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c1d4dcb8-59bb-4d4e-b84c-aade245777cb',
  name: 'Mario Party 6',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Party_6',
  price: 0,
  tags: [],
  extras: ['Mic'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Kristen',
}, {
  id: 'cc6a8ab2-637a-4627-b717-6451a0dffcb3',
  name: 'Mario Party 7',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Party_7',
  price: 0,
  tags: [],
  extras: ['Mic'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Kristen',
}, {
  id: 'cdc10a41-ea0e-48e0-af19-bc9b22674331',
  name: 'Mario Power Tennis',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Power_Tennis',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '467281eb-5c17-4e42-bc95-e44dffc6299c',
  name: 'Mario Superstar Baseball',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Superstar_Baseball',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'e901d549-18f1-43c1-b76d-87e69fc81d6a',
  name: 'Metroid Prime',
  receiptLocation: 'Kirby Air Ride',
  url: 'https://en.wikipedia.org/wiki/Metroid_Prime',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '83247641-4ce3-41b6-ac44-542ff766cd19',
  name: 'Metroid Prime 2: Echoes',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Metroid_Prime_2:_Echoes',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f55c05bf-a441-418b-a812-f231934bde4f',
  name: 'Minority Report: Everybody Runs',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Minority_Report:_Everybody_Runs',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '232d9bc4-4fd5-4847-bd90-82b9eadf1c35',
  name: 'Naruto: Clash of Ninja',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Naruto:_Clash_of_Ninja_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'b2d88baf-f725-4f67-be63-1f78d3acb8d9',
  name: 'Naruto: Clash of Ninja 2',
  receiptLocation: 'Naruto: Clash of Ninja',
  url: 'https://en.wikipedia.org/wiki/Naruto:_Clash_of_Ninja#Naruto:_Clash_of_Ninja_2',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '1b80013f-9fe7-418a-9c47-e1dd2aeabc0e',
  name: 'Paper Mario: The Thousand-Year Door',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Paper_Mario:_The_Thousand-Year_Door',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '8bb5ff84-fcdd-4006-baa3-3771f2e70682',
  name: 'Pikmin',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Pikmin',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '7125fcd2-7f4c-4835-bb76-380fd368ca72',
  name: 'Pikmin 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pikmin_2',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'RJ',
}, {
  id: 'af6de228-b09c-48c0-a5ea-d423c71fafad',
  name: 'Pokemon XD: Gale of Darkness',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_XD:_Gale_of_Darkness',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: 'ed783ef9-f156-42e9-8590-b7d4b0d7cf7b',
  name: 'Skies of Arcadia Legends',
  receiptLocation: '^ (Mac Game Guy)',
  url: 'https://en.wikipedia.org/wiki/Skies_of_Arcadia#Skies_of_Arcadia_Legends_port',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '54d3fa16-bde2-4dae-8cf7-9a1cce5c1e08',
  name: 'Soul Calibur II',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Soulcalibur_II',
  price: 0,
  tags: ['2'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '18f60ebd-371a-463f-be22-28b9adb49d96',
  name: 'Spiderman 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Spider-Man_2_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '493ba242-a4fd-45e4-ab7d-0d08428ccd17',
  name: 'SpongeBob SquarePants: Lights, Camera, Pants!',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/SpongeBob_SquarePants:_Lights,_Camera,_Pants!',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3d0cd5c0-0f58-4aac-b151-ee90a764ab31',
  name: 'SpongeBob SquarePants Movie',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_SpongeBob_SquarePants_Movie_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '319f29b3-c831-45b0-8fc4-9e877847ccea',
  name: 'Spyro: Enter The Dragonfly',
  receiptLocation: 'Final Fantasy XI Online',
  url: 'https://en.wikipedia.org/wiki/Spyro:_Enter_the_Dragonfly',
  price: 4.5,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c5971146-a515-40ac-bbd5-14ed85b091ed',
  name: 'Spyro, The Legend of: A New Beginning',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Spyro:_A_New_Beginning',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '31fc2301-8a6f-4178-8a2f-028e9a3f2669',
  name: 'Star Fox Adventures',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Star_Fox_Adventures',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '26d50fa0-d2ee-486b-b78d-f41a7295d597',
  name: 'Star Fox: Assault',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Star_Fox:_Assault',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3a351159-9058-4e34-94f3-32e0efa8a877',
  name: 'Super Mario Strikers',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_Strikers',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'df8a6abf-2bd4-40d4-903e-c632ebf8b0e5',
  name: 'Super Mario Sunshine',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_Sunshine',
  price: 0,
  tags: ['sms'],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '95d563ac-4b90-4e0a-96f5-43fc74518679',
  name: 'Super Monkey Ball',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Monkey_Ball',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '02d5367c-b340-4208-9c54-78dd239654c8',
  name: 'Super Smash Bros. Melee',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee',
  price: 0,
  tags: ['ssbm'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '2d2d2ee6-3728-42f4-8f46-191f13409985',
  name: 'Tales of Symphonia',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Tales_of_Symphonia',
  price: 0,
  tags: ['tos'],
  extras: ['Guidebook'],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '9f0ecebb-ae7d-4b02-9cda-0f5f123b101b',
  name: 'Top Gun: Combat Zones',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/List_of_Top_Gun_video_games#Combat_Zones',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '729dcc29-706b-45e5-beda-60b526301b30',
  name: 'Viewtiful Joe 2',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Viewtiful_Joe_2',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

export default {
  id: '909f38cf-164b-4820-a376-80303247b3de',
  name: 'GameCube',
  systems,
  cables,
  accessories,
  controllers,
  games,
}
