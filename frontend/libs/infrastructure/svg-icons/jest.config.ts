export default {
  displayName: 'svg-icons',
  preset: '../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
<<<<<<<< HEAD:frontend/libs/infrastructure/shared-ui/jest.config.ts
  coverageDirectory: '../../coverage/libs/infrastructure/shared-ui',
========
  coverageDirectory: '../../../coverage/libs/infrastructure/svg-icons',
>>>>>>>> 7f19655c69376cf80fc1e2fb38362a116be45475:frontend/libs/infrastructure/svg-icons/jest.config.ts
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
