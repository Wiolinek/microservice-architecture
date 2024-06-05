'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/test/*.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/test/*.ts?(x)', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  coverageReporters: ['text-summary', 'lcov'],
  moduleNameMapper: {
    '@authentication-service/(.*)$': ['<rootDir>/src/$1'],
    '@data(.*)$': '<rootDir>/data$1',
    '@handlers(.*)$': '<rootDir>/handlers$1',
    '@interfaces(.*)$': '<rootDir>/interfaces$1',
    '@models(.*)$': '<rootDir>/models$1',
    '@queues(.*)$': '<rootDir>/queues$1',
    '@routes(.*)$': '<rootDir>/routes$1',
    '@schema(.*)$': '<rootDir>/schema$1',
  },
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map
