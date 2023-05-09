'use strict';

module.exports = {
  reject: [
    // Todo: When package converted to ESM
    'camelcase',
    'decamelize',
    'escape-string-regexp',
    'open-editor',

    // Todo: When canonical includes latest Unicorn
    'eslint',

    // Todo: Waiting on merge https://github.com/gajus/eslint-plugin-canonical/pull/22
    'eslint-config-canonical',
  ],
};
