const systems = [{
  id: '66824336-57ff-4952-a4d0-946360b20a32',
  color: 'Green',
  description: 'Game Boy Pocket',
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '30ecc14a-78b9-4b49-a0d6-2d816aa8cd6b',
  color: 'Dandelion',
  description: 'Game Boy Color',
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'afd70de8-5499-410e-8198-49e91f0cda4d',
  color: 'Kiwi',
  description: 'Game Boy Color',
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'fa4dd2cf-8676-4b93-892c-7d1cec7e9416',
  color: 'Berry',
  description: 'Game Boy Color',
  borrowedInFrom: '',
  borrowedOutTo: 'Victor',
}]

const cables = ['Charger x2']

const accessories = ['Link x2']

const controllers = []

const games = [{
  id: 'e7870dfd-5719-472a-8ad7-362b04c286b6',
  name: 'Donkey Kong Country',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Donkey_Kong_Country',
  price: 0,
  tags: ['dkc'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: 'aeb8be0f-4af0-4c81-a4f8-895d8d0bc040',
  name: 'Dragon Ball Z: Legendary Super Warriors',
  receiptLocation: 'Disgaea 2: Cursed Memories',
  url: 'https://en.wikipedia.org/wiki/Dragon_Ball_Z:_Legendary_Super_Warriors',
  price: 0,
  tags: ['dbz'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '59313c0b-9709-4d53-9f97-bc27006a7ca5',
  name: 'Dragon Warrior I + II',
  receiptLocation: '(Mac Game Guy)',
  url: 'https://en.wikipedia.org/wiki/Dragon_Quest_(video_game)',
  price: 0,
  tags: ['dq1', 'dq2', 'dw1', 'dw2'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '6b312465-56e2-4487-8dd1-3e943575fe78',
  name: 'Dragon Warrior III',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Dragon_Quest_III',
  price: 0,
  tags: ['dq3', 'dw3'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: '5edf547c-5aa8-4f63-b28d-2c8c0a5bc25e',
  name: 'Dragon Warrior Monsters',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Dragon_Warrior_Monsters',
  price: 0,
  tags: ['dq', 'dw'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: 'Max',
  borrowedOutTo: '',
}, {
  id: 'e439007c-5bb6-4a30-84f1-013156066336',
  name: 'Dragon Warrior Monsters 2: Cobi\'s Journey',
  receiptLocation: '(Mac Game Guy)',
  url: 'https://en.wikipedia.org/wiki/Dragon_Warrior_Monsters_2',
  price: 0,
  tags: ['dq', 'dw'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'bbdcc547-2c64-4a88-8d86-93ea670fbab7',
  name: 'Final Fantasy Adventure',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Final_Fantasy_Adventure',
  price: 0,
  tags: ['ffa'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'c91e5f71-05c6-4733-bd55-bcb16e179b23',
  name: 'Final Fantasy Legend',
  receiptLocation: 'Final Fantasy X',
  url: 'https://en.wikipedia.org/wiki/The_Final_Fantasy_Legend',
  price: 0,
  tags: ['ffl'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'b237684d-db9a-461a-b616-999904817e76',
  name: 'Final Fantasy Legend II',
  receiptLocation: '(Brown envelope)',
  url: 'https://en.wikipedia.org/wiki/Final_Fantasy_Legend_II',
  price: 30,
  tags: ['ffl2'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a7b421c4-6c81-41a4-acd5-5f1c36f92a99',
  name: 'Final Fantasy Legend III',
  receiptLocation: 'Shadow of the Colossus',
  url: 'https://en.wikipedia.org/wiki/Final_Fantasy_Legend_III',
  price: 0,
  tags: ['ffl3'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '03a8f134-b1bf-40a3-80d0-3d9f25cbc9d5',
  name: 'Game & Watch Gallery',
  receiptLocation: 'Tales of Legendia',
  url: 'https://en.wikipedia.org/wiki/Game_%26_Watch_ports_and_remakes#Game_&_Watch_Gallery',
  price: 0,
  tags: ['g&w'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3b159b71-8b03-4946-b348-d1010b6ee910',
  name: 'Game & Watch Gallery 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Game_%26_Watch_ports_and_remakes#Game_&_Watch_Gallery_2',
  price: 0,
  tags: ['g&w'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '1637aec5-b114-4f94-8d4e-38f9b0ba8e1c',
  name: 'Harvest Moon 3 GBC',
  receiptLocation: 'Disgaea 2: Cursed Memories',
  url: 'https://en.wikipedia.org/wiki/Harvest_Moon_3_GBC',
  price: 0,
  tags: ['hm'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f185c0b9-9513-4e8f-8800-138cba3f6cd1',
  name: 'Kirby\'s Dream Land',
  receiptLocation: 'Disgaea 2: Cursed Memories',
  url: 'https://en.wikipedia.org/wiki/Kirby%27s_Dream_Land',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '585018ce-0068-4c64-a2b1-dc928b16ab58',
  name: 'Kirby\'s Dream Land 2',
  receiptLocation: 'Tales of Legendia',
  url: 'https://en.wikipedia.org/wiki/Kirby%27s_Dream_Land_2',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '2e8b6c50-b29e-444c-ba05-5c1f4adff7ec',
  name: 'Kirby\'s Pinball Land',
  receiptLocation: 'Sonic Adventure 2',
  url: 'https://en.wikipedia.org/wiki/Kirby%27s_Pinball_Land',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'eb3d10a2-9018-4e4d-bc1f-d9a5a12f741c',
  name: 'The Legend of Zelda: Link\'s Awakening DX',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Link%27s_Awakening',
  price: 0,
  tags: ['tloz', 'la', 'links'],
  extras: ['Guidebook'],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3e6e0aff-64dc-4464-9c12-0a35ee0d7963',
  name: 'The Legend of Zelda: Oracle of Ages',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Oracle_of_Seasons_and_Oracle_of_Ages',
  price: 0,
  tags: ['tloz'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'aa1b060c-974d-40ce-acf4-d271b142e506',
  name: 'The Legend of Zelda: Oracle of Seasons',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Oracle_of_Seasons_and_Oracle_of_Ages',
  price: 0,
  tags: ['tloz'],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '5db88012-1009-4b45-bc0e-ead50da4ab97',
  name: 'Mario Tennis',
  receiptLocation: '',
  url: 'https://www.mariowiki.com/Mario_Tennis_(Game_Boy_Color)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '0ab49920-2923-443f-ba20-bf0992955969',
  name: 'Mega Man II',
  receiptLocation: 'Final Fantasy X',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_II_(Game_Boy)',
  price: 0,
  tags: ['2'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '351eea90-b005-44fd-a179-430445558609',
  name: 'Mega Man III',
  receiptLocation: '(Mac Game Guy)',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_III_(Game_Boy)',
  price: 0,
  tags: ['3'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f0d7f39b-fece-4ccb-b890-2fdae54bc8ae',
  name: 'Mega Man Xtreme 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_Xtreme_2',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '89818e0d-33a9-4309-b115-b1b12647ee5d',
  name: 'Monster Ranchers Explorer',
  receiptLocation: 'Kingdom Hearts: Chain of Memories',
  url: 'https://en.wikipedia.org/wiki/Monster_Rancher_Explorer',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '8cf064bc-f6ec-4e29-8616-9b5066c38d84',
  name: 'Pokemon Blue',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '06e96b37-12c6-4990-ba48-fc470eb0e545',
  name: 'Pokemon Red',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Kassandra',
}, {
  id: '85096c7c-0758-42dc-9e49-b4ad58fd9139',
  name: 'Pokemon Yellow',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Yellow',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '4984d544-946c-4c3c-9d5a-648fc5a302f5',
  name: 'Pokemon Gold',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver',
  price: 0,
  tags: [],
  extras: ['Guidebook'],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '52123a3e-7510-4e7e-8d5c-68f6909d9bfe',
  name: 'Pokemon Silver',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Gold_and_Silver',
  price: 0,
  tags: [],
  extras: ['Guidebook'],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'f6284a61-689a-4281-a21e-0acb82839f12',
  name: 'Pokemon Crystal',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Crystal',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '145288a3-c015-4d89-bb67-ea2c5f55ee25',
  name: 'Pokemon Pinball',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Pinball',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '440f22b3-9853-4266-83a3-771d8cf92a04',
  name: 'Pokemon Puzzle Challenge',
  receiptLocation: 'Final Fantasy X-2',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Puzzle_Challenge',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'e0a769c4-f6ea-4142-befd-224c5956ec25',
  name: 'Pokemon Trading Card Game',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game_(video_game)',
  price: 0,
  tags: ['tcg'],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'abfbf441-bae7-4331-b7f3-4085b93ec079',
  name: 'Super Mario Land',
  receiptLocation: 'Metal Gear Solid 2: Sons of Liberty',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_Land',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '48f1c190-0aa2-4fe6-8f86-205ad81f247f',
  name: 'Super Mario Land 2: 6 Golden Coins',
  receiptLocation: 'Shadow of the Colossus',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_Land_2:_6_Golden_Coins',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3ab458ae-f352-446f-a179-73b8956cbae8',
  name: 'Super Mario Land 3: Wario Land',
  receiptLocation: 'Tales of Legendia',
  url: 'https://en.wikipedia.org/wiki/Wario_Land:_Super_Mario_Land_3',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '0891d076-41be-4132-95c7-7618484596a5',
  name: 'Super Mario Bros Deluxe',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_Bros.#Super_Mario_Bros._Deluxe',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '9b5df8dd-e652-4fcb-aea8-f347845f7bf0',
  name: 'Wario Land II',
  receiptLocation: 'Disgaea 2: Cursed Memories',
  url: 'https://en.wikipedia.org/wiki/Wario_Land_II',
  price: 0,
  tags: ['2'],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'bad642b7-db08-41af-aea7-5c05275c50e0',
  name: 'Wario Land 3',
  receiptLocation: 'Dark Cloud',
  url: 'https://en.wikipedia.org/wiki/Wario_Land_3',
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
  id: '3b9dd6fa-8b04-408e-b302-50315d8daa6c',
  name: 'Game Boy',
  systems,
  cables,
  accessories,
  controllers,
  games,
}
