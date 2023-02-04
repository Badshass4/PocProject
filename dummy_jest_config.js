const path = require('path');

module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/**/*.style.ts',
    '!<rootDir>/**/*.mock.{ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/**/e2e/*.ts',
    '!<rootDir>/**/App.tsx',
  ],
  coverageDirectory: './coverage/',
  coverageProvider: 'v8',
  testRunner: 'jasmine2',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', './jest.setup.js'],
  clearMocks: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|victory-*|@walmart/gtp-shared-components|@walmart/gtp-shared-icons|@livingdesign|@microsoft/*)',
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 65,
      functions: 65,
    },
  },
  testTimeout: 30000,
};
