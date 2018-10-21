'use strict';

const utils = require('../utils');
const define = (key, fn) => {
  utils.defineExport(exports, key, fn);
  utils.defineExport(exports, key.toLowerCase(), fn);
};

define('AutoComplete', () => require('./autocomplete'));
define('Confirm', () => require('./confirm'));
define('Input', () => require('./input'));
define('Invisible', () => require('./invisible'));
define('List', () => require('./list'));
define('MultiSelect', () => require('./multiselect'));
define('Number', () => require('./number'));
define('Password', () => require('./password'));
define('Select', () => require('./select'));
define('Text', () => require('./text'));