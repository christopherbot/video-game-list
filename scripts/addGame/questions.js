module.exports = [{
  param: 'console',
  label: 'Console Name',
  type: 'string',
}, {
  param: 'name',
  label: 'Game Name',
  type: 'string',
  titleCase: true,
  escapeSingleQuotes: true,
}, {
  param: 'receiptLocation',
  label: 'Receipt Location',
  type: 'string',
}, {
  param: 'url',
  label: 'URL',
  type: 'string',
}, {
  param: 'price',
  label: 'Price',
  type: 'number',
  defaultAnswer: 0,
}, {
  param: 'tags',
  label: 'Tags (Comma Separated)',
  type: 'array',
  subType: 'string'
}, {
  param: 'extras',
  label: 'Extras (Comma Separated)',
  type: 'array',
  subType: 'string',
  skip: true,
}, {
  param: 'played',
  label: 'Played [y/n]',
  type: 'boolean',
}, {
  param: 'completed',
  label: 'Completed [y/n]',
  type: 'boolean',
}, {
  param: 'favourite',
  label: 'Favourite [y/n]',
  type: 'boolean',
}, {
  param: 'borrowedInFrom',
  label: 'Borrowed In From',
  type: 'string',
  skip: true,
}, {
  param: 'borrowedOutTo',
  label: 'Borrowed Out To',
  type: 'string',
  skip: true,
}]
