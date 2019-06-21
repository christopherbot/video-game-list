const systems = [{
  id: '65fc7f3f-36cd-4789-84c3-554cd1f0db85',
  color: 'Jungle Green',
  description: '',
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'b5c77399-ed55-471b-9f6f-f0ee528dbda9',
  color: 'Black',
  description: '',
  borrowedInFrom: '',
  borrowedOutTo: 'Victor',
}]

const cables = ['Power', 'AV']

const accessories = ['Rumble Pak']

const controllers = [
  'Grey x2',
  'Grape',
  'Jungle Green',
  'Fire Orange',
  'Atomic Purple',
]

const games = [{
  id: '41415a6d-fd80-4a46-87b8-a2c0527c0016',
  name: '007: Goldeneye',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/GoldenEye_007_(1997_video_game)',
  price: 0,
  tags: ['james bond'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'e3d68c7d-98c6-4101-bc94-ab111aa5e14b',
  name: '007: The World Is Not Enough',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_World_Is_Not_Enough_(Nintendo_64)',
  price: 0,
  tags: ['james bond'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c785c34b-958c-4739-ad40-146c5e0dbafe',
  name: 'Asteroids Hyper 64',
  receiptLocation: '',
  url: 'https://nintendo.fandom.com/wiki/Asteroids_Hyper_64',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'fb73c46b-1108-4df6-a8b8-bd0a4c9ae85b',
  name: 'Banjo Kazooie',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Banjo-Kazooie',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a84be06e-e6aa-46f9-879c-076202030394',
  name: 'Banjo Tooie',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Banjo-Tooie',
  price: 0,
  tags: [],
  extras: ['Guidebook'],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '6e3d4b59-fbac-43b5-8c85-d3f7952c70a9',
  name: 'Blast Corps',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Blast_Corps',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'fc4b0dbe-e92a-4e42-8146-34b160ee1286',
  name: 'Body Harvest',
  receiptLocation: 'Vagrant Story',
  url: 'https://en.wikipedia.org/wiki/Body_Harvest',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'ffdcc73f-fe2c-45cf-8eec-3133818e4c6f',
  name: 'Bomberman 64',
  receiptLocation: 'Tales of Legendia',
  url: 'https://en.wikipedia.org/wiki/Bomberman_64_(1997_video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '00e03f15-8964-47a4-8536-2098721db2dd',
  name: 'Bomberman Hero',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Bomberman_Hero',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '72408b1c-5ccf-48de-8c9c-679b20120043',
  name: 'Command and Conquer',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Command_%26_Conquer_(1995_video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '8ac3a8b1-333a-4be5-8792-00959a0e9288',
  name: 'Conker\'s Bad Fur Day',
  receiptLocation: 'Skies of Arcadia',
  url: 'https://en.wikipedia.org/wiki/Conker%27s_Bad_Fur_Day',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'b1ff63f0-79d8-4515-8581-07399f866fe7',
  name: 'Donkey Kong 64',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Donkey_Kong_64',
  price: 0,
  tags: ['dk64'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'b7861356-af86-4b9e-b8a0-84696873dd95',
  name: 'Diddy Kong Racing',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Diddy_Kong_Racing',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '???',
}, {
  id: 'e5212f6d-292a-4158-89df-867c781d8260',
  name: 'Duke Nukem 64',
  receiptLocation: 'Final Fantasy X',
  url: 'https://dukenukem.fandom.com/wiki/Duke_Nukem_64',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '6cfd1f90-5cb2-4278-94c9-11c1a37ce389',
  name: 'Fighter Destiny 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Fighters_Destiny#Sequel',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '42817f39-000b-445c-a865-93232dd1d313',
  name: 'Harvest Moon 64',
  receiptLocation: '(Brown envelope)',
  url: 'https://en.wikipedia.org/wiki/Harvest_Moon_64',
  price: 90,
  tags: ['hm64'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '7bc7262c-335c-4230-a226-e84c84f28aa2',
  name: 'Hot Wheels Turbo Racing',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Hot_Wheels_Turbo_Racing',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a8e3817f-bf41-4c33-8985-c7130c27ff73',
  name: 'Hey You Pikachu!',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Hey_You,_Pikachu!',
  price: 0,
  tags: ['pokemon'],
  extras: ['Mic'],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a922fb06-b46b-4466-95dd-781d252ddfd6',
  name: 'Jet Force Gemini',
  receiptLocation: 'Breath of Fire IV',
  url: 'https://en.wikipedia.org/wiki/Jet_Force_Gemini',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c8671cab-aa05-4b7c-8cb6-2c24efcb5cec',
  name: 'Kirby 64: The Crystal Shards',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Kirby_64:_The_Crystal_Shards',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: '0dcc78d1-cd68-4fda-a27d-aae573d0f8d1',
  name: 'The Legend of Zelda: Majora\'s Mask',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Majora%27s_Mask',
  price: 0,
  tags: ['tloz', 'mm'],
  extras: ['Guidebook'],
  played: true,
  completed: false,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '88c6f730-7110-4d3c-bb93-d1a21b0e5304',
  name: 'The Legend of Zelda: Ocarina of Time',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time',
  price: 0,
  tags: ['tloz', 'oot'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '64efe26f-1700-4bb2-b909-d34cb5e9ff13',
  name: 'Mario Golf',
  receiptLocation: '',
  url: 'https://www.mariowiki.com/Mario_Golf_(Nintendo_64)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: 'f1128b75-1af7-4398-9515-a53e07fc91ea',
  name: 'Mario Kart',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Kart_64',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Victor',
}, {
  id: '36abd75d-7d3c-4aaf-a545-e8e20aded67a',
  name: 'Mario Party',
  receiptLocation: 'Final Fantasy X',
  url: 'https://en.wikipedia.org/wiki/Mario_Party_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '2e72498c-a1dd-4dfd-8dfc-170881f65a1f',
  name: 'Mario Party 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Party_2',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a77051d4-3eff-4e5f-9de3-b15d51e3522d',
  name: 'Mario Party 3',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Party_3',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '8751edf2-9ec2-414e-958d-b9ea525bce6c',
  name: 'Mario Tennis',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Tennis',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '391cac2b-5ec4-49fa-a68b-51609d341d4d',
  name: 'Mega Man 64',
  receiptLocation: 'Disgaea 2: Cursed Memories',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_Legends_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'cb55a1c8-1e1b-4ce1-97eb-593646782f36',
  name: 'Mission Impossible',
  receiptLocation: 'Harvest Moon: A Wonderful Life',
  url: 'https://en.wikipedia.org/wiki/Mission:_Impossible_(1998_video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'fe374fb6-d2e0-44fc-b4ae-6ce5f7631d2c',
  name: 'NFL Quarterback Club \'98',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/NFL_Quarterback_Club_98',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '6515a4f1-e1b6-4513-831b-3b6ca51802fb',
  name: 'NHL \'99',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/NHL_99',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'e88ca9e2-b32c-4d75-a760-561509baeb26',
  name: 'Ogre Battle 64: Person of Lordly Caliber',
  receiptLocation: '(Brown envelope)',
  url: 'https://en.wikipedia.org/wiki/Ogre_Battle_64:_Person_of_Lordly_Caliber',
  price: 80,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '25a9d84f-be5d-49d3-bd4a-19d25eb850be',
  name: 'Paper Boy',
  receiptLocation: 'Chrono Cross',
  url: 'https://en.wikipedia.org/wiki/Paperboy_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'd7f4b0ee-19e6-48ee-b6f7-03485b41c358',
  name: 'Paper Mario',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Paper_Mario',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: '360785f7-49db-4223-8457-7253da802946',
  name: 'Perfect Dark',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Perfect_Dark',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '1dd2f8b7-3bdf-4a76-9f85-10dc8746021e',
  name: 'Pokemon Puzzle League',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Puzzle_League',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: 'b137019d-acee-45e5-9c76-92e6f0e5f478',
  name: 'Pokemon Snap',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '5e2a6846-4f4e-4d17-8b96-8b4499c86867',
  name: 'Pokemon Stadium',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium',
  price: 0,
  tags: [],
  extras: ['Transfer Pak'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '1da5f596-9e49-4cc8-bc1c-2b762c26fc31',
  name: 'Pokemon Stadium 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Stadium_2',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a57b5566-2459-4f4d-888a-b8b92e1b746f',
  name: 'Quake',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Quake_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '0f8b9722-ec3c-4752-bcfb-0f5a8c63da5a',
  name: 'Resident Evil 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Resident_Evil_2',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'de6ebce0-d0b8-4206-aac0-a8820553e89c',
  name: 'Shadow Man',
  receiptLocation: '(Brown envelope - big sheet)',
  url: 'https://en.wikipedia.org/wiki/Shadow_Man_(video_game)',
  price: 7,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f43080d3-9d40-49a2-a5dd-e2654f507ff9',
  name: 'Snowboard Kids',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Snowboard_Kids',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '9ca08cb2-c128-4c1c-9a4b-4be3ac409428',
  name: 'Snowboard Kids 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Snowboard_Kids_2',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'b2371cf8-4f5b-4a6b-a4f3-e36b7ba84f6b',
  name: 'Spider-Man',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Spider-Man_(2000_video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: 'e0df97be-5de8-4dbb-9053-4bca9d206dab',
  name: 'Star Wars Episode I: Racer',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Star_Wars_Episode_I:_Racer',
  price: 0,
  tags: ['1'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '1cec4ff6-af31-451f-9db1-65344b80fc9d',
  name: 'Super Smash Bros',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._(video_game)',
  price: 0,
  tags: ['ssb64'],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Victor',
}, {
  id: '6f53ce21-d406-433d-a442-499c9843a4c2',
  name: 'Tom Clancy\'s Rainbow Six',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Tom_Clancy%27s_Rainbow_Six_(video_game)',
  price: 0,
  tags: ['6'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '476d70fc-1381-47a2-84d9-6348ca25027e',
  name: 'Tony Hawk\'s Pro Skater',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Tony_Hawk%27s_Pro_Skater',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '88c18929-9f4f-43a3-b010-b0e41f9dba4f',
  name: 'Tony Hawk\'s Pro Skater 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Tony_Hawk%27s_Pro_Skater_2',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '53931c0f-3da0-4c35-a6a5-e2971634130f',
  name: 'Turok 2: Seeds of Evil',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Turok_2:_Seeds_of_Evil',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '8463a5f8-f278-4bb4-bc56-acd19178aaac',
  name: 'Virtual Pool 64',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Virtual_Pool_64',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '249fe414-dab9-4b54-8fc7-a7192213a70a',
  name: 'WWF Wrestlemania 2000',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/WWF_WrestleMania_2000',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'da69574f-64de-4e72-9526-ad59d4461ad0',
  name: 'Yoshi\'s Story',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Yoshi%27s_Story',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}]

export default {
  id: 'cd1e21b6-61fd-412b-b264-d31d5c1f90c3',
  name: 'N64 (Nintendo 64)',
  index: 2,
  systems,
  cables,
  accessories,
  controllers,
  games,
}
