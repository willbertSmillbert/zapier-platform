const lists = require('./searches/getList');
const listItem = require('./searches/getListItem');
const linkedItems = require('./searches/getLinkedItems');
const trigger = require('./triggers/actionButton');
const {
  config: authentication,
  befores = [],
  afters = [],
} = require('./authentication');
const getList = require('./searches/getList');

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [trigger.key]:trigger,
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [listItem.key]:listItem,
    [lists.key]:lists,
    [linkedItems.key]:linkedItems
 
  },

  // If you want your creates to show up, you better include it here!
  creates: {
  },

  resources: {},
};
