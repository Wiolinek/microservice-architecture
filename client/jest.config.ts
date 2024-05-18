export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '\\.(css)$': 'identity-obj-proxy',
    '^@app/(.*)$': '<rootDir>/$1',
    '@pages(.*)$': '<rootDir>/pages$1',
    '@components(.*)$': '<rootDir>/components$1',
    '@layouts(.*)$': '<rootDir>/layouts$1',
  },
};