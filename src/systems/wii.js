const systems = [{
  id: '75b51389-cf99-4804-aff4-fda77437073a',
  color: 'White',
  description: '',
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

const cables = ['Power', 'AV']

const accessories = ['Sensor bar']

const controllers = [
  'Wiimote x2',
  'Nunchuk x2',
  'Wiimote with builtin Motion Plus',
]

const games = [{
  id: '298b2313-d0b9-4064-8bac-1cadbb5f288c',
  name: '007: Quantum of Solace',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/007:_Quantum_of_Solace',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'be689580-157c-471b-8bc6-f3f3b41265a2',
  name: 'Animal Crossing: City Folk',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Animal_Crossing:_City_Folk',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '4b2465ce-fd68-45d5-a7c6-08212807560e',
  name: 'Bases Loaded',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/Bases_Loaded_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'a162ef01-43d0-4e67-a274-f0e37b47e329',
  name: 'Fire Emblem: Radiant Dawn',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Fire_Emblem:_Radiant_Dawn',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'e907304c-16a5-463c-9ecb-1c2cc576b933',
  name: 'Game Party 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Game_Party',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '49047b26-89af-4bc5-b2a1-72a641b98b81',
  name: 'Guitar Hero III: Legends of Rock',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Guitar_Hero_III:_Legends_of_Rock',
  price: 0,
  tags: [],
  extras: ['Guitar'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'e17b2114-0db3-43d7-801c-2fa6a20fbeb4',
  name: 'Happy Feet',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Happy_Feet_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '522f4e76-ee77-4e4d-9e27-93313d2a065b',
  name: 'Help Wanted',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Help_Wanted_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'cd299790-c760-4b41-b0d6-cffdeb339610',
  name: 'Kirby\'s Epic Yarn',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Kirby%27s_Epic_Yarn',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '8bd41d33-9372-48de-9233-65a36a5b8689',
  name: 'The Legend of Zelda: A Link to the Past',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'dd928ca2-dc7b-4903-9cc0-eec942485c74',
  name: 'The Legend of Zelda: Ocarina of Time',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '427fe131-d7d2-4b0f-afa2-c42b5f7431b1',
  name: 'The Legend of Zelda: Skyward Sword',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Skyward_Sword',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '44798921-5222-48e3-b9d9-273ab3a06a8c',
  name: 'The Legend of Zelda: Twilight Princess',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Twilight_Princess',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '06f99ba8-5a4c-4284-bb41-0ae5f7fe958d',
  name: 'Mario Kart Wii',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Mario_Kart_Wii',
  price: 0,
  tags: [],
  extras: ['Wheel'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '3a6bd174-c81d-4942-ab91-5cc407dd477d',
  name: 'Marvel: Ultimate Alliance',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Marvel:_Ultimate_Alliance',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'ceaa306e-e045-419c-a22a-41c1413157f4',
  name: 'Mega Man',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'db0541e6-6192-468b-b3ea-e9db0c50967c',
  name: 'Mega Man 2',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_2',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '9633a145-2977-4737-8d3c-f884b8ab7cb6',
  name: 'Mega Man 9',
  receiptLocation: 'WiiWare',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_9',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '165b7111-9551-42a0-91e0-06ac8745f96d',
  name: 'Mega Man 10',
  receiptLocation: 'WiiWare',
  url: 'https://en.wikipedia.org/wiki/Mega_Man_10',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '72eabc0d-0150-4bc7-bc69-2cb9437f6dd7',
  name: 'Muramasa: The Demon Blade',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Muramasa:_The_Demon_Blade',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '1191f3d1-ce72-4933-83c0-a6d5c16fcc15',
  name: 'NBA Live 08',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/NBA_Live_08',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '14677b68-317e-45fd-bc99-67fa7b0e66e7',
  name: 'Ninja Gainden',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/Ninja_Gaiden_(NES_video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '94e90c28-5cd2-4726-bb68-155ff9d27e84',
  name: 'Okami',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/%C5%8Ckami#Wii_port',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '59c3f130-d959-43bd-b6db-b4521e856813',
  name: 'Pokemon Snap',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Snap',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '437c655f-e28f-4fa1-9c67-c3a5162193b5',
  name: 'Red Steel',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Red_Steel',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '38c6cd98-5c16-46cd-961d-71ff75fda0d6',
  name: 'Rock Band',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Rock_Band_(video_game)',
  price: 0,
  tags: [],
  extras: ['Instruments'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '400a9760-d8d6-4706-a9cf-464270136dab',
  name: 'Rock Band 2',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Rock_Band_2',
  price: 0,
  tags: [],
  extras: ['Instruments'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'b4d4cf9d-bd86-4729-9d83-436e45b480fe',
  name: 'Rock Band Track Pack Vol. 1',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/List_of_Rock_Band_track_packs#Rock_Band_Track_Pack_Vol._1',
  price: 0,
  tags: [],
  extras: ['Instruments'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'cc41b819-bd79-4b03-b5a5-bbe604448fb6',
  name: 'SpongeBob SquarePants: Creature from the Krusty Krab',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/SpongeBob_SquarePants:_Creature_from_the_Krusty_Krab',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '358ea79c-371b-41be-8ed2-d54050efeb93',
  name: 'Soulcalibur Legends',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Soulcalibur_Legends',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'e706bb37-38ee-4f9d-88be-fc2acbebc527',
  name: 'Spiderman 3',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Spider-Man_3_(video_game)',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Jack',
}, {
  id: 'd9c17b88-100a-461d-8769-c6eaf7799aef',
  name: 'Super Mario 64',
  receiptLocation: 'Wii Virtual Console',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_64',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '89afd4c8-8851-48b5-a8fa-1413c18c6aaa',
  name: 'Super Mario Bros. Wii',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/New_Super_Mario_Bros._Wii',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '98e16756-f63b-43c1-8451-4968a1a89de6',
  name: 'Super Mario Galaxy',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Mario_Galaxy',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '1a32464b-8181-43cc-8c7e-9c7fdcb098c2',
  name: 'Super Paper Mario',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Paper_Mario',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: 'Jack',
  borrowedOutTo: '',
}, {
  id: '47286c55-ea43-48d6-bd60-34711a69d1b8',
  name: 'Super Smash Bros. Brawl',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Super_Smash_Bros._Brawl',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '08074672-6a80-4029-a57c-dcc3fcf05dcd',
  name: 'Tales of Symphonia: Dawn of the New World',
  receiptLocation: 'Okami',
  url: 'https://en.wikipedia.org/wiki/Tales_of_Symphonia:_Dawn_of_the_New_World',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: 'Devan Shimada',
}, {
  id: 'e14a77ed-828a-4652-addc-2a169a068a9e',
  name: 'Tony Hawk\'s Downhill Jam',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Tony_Hawk%27s_Downhill_Jam',
  price: 0,
  tags: [],
  extras: [],
  played: false,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: 'd65d3552-c9f6-4bb3-ab49-e945f3e4b32a',
  name: 'Wii Sports',
  receiptLocation: '',
  url: 'https://en.wikipedia.org/wiki/Wii_Sports',
  price: 0,
  tags: [],
  extras: ['Sports attachments'],
  played: true,
  completed: false,
  favourite: false,
  borrowedInFrom: '',
  borrowedOutTo: '',
}, {
  id: '07e121ea-dace-4d82-b3a2-e4b61993d4d7',
  name: 'Xenoblade Chronicles',
  receiptLocation: '^',
  url: 'https://en.wikipedia.org/wiki/Xenoblade_Chronicles',
  price: 0,
  tags: [],
  extras: [],
  played: true,
  completed: true,
  favourite: true,
  borrowedInFrom: '',
  borrowedOutTo: '',
}]

export default {
  id: 'ba66a5af-654e-4344-8cb4-aab9f8ac47a6',
  name: 'Wii',
  index: 4,
  systems,
  cables,
  accessories,
  controllers,
  games,
}
