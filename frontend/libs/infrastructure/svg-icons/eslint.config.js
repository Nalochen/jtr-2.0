const nx = require('@nx/eslint-plugin');
<<<<<<<< HEAD:frontend/libs/infrastructure/shared-ui/eslint.config.js
const baseConfig = require('../../../eslint.config.js');
========
>>>>>>>> 7f19655c69376cf80fc1e2fb38362a116be45475:frontend/libs/infrastructure/svg-icons/eslint.config.js

module.exports = [
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'svg',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'svg',
          style: 'kebab-case',
        },
      ],
<<<<<<<< HEAD:frontend/libs/infrastructure/shared-ui/eslint.config.js
      quotes: ['error', 'single'],
========
>>>>>>>> 7f19655c69376cf80fc1e2fb38362a116be45475:frontend/libs/infrastructure/svg-icons/eslint.config.js
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
];
