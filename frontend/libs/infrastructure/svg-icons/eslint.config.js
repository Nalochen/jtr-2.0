const nx = require('@nx/eslint-plugin');

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
      quotes: ['error', 'single'],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
];
