export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  rootDir: "src",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "\\.(css)$": "identity-obj-proxy",
    "^@app/(.*)$": "<rootDir>/$1",
    "@pages(.*)$": "<rootDir>/pages$1",
    "@components(.*)$": "<rootDir>/components$1",
    "@layouts(.*)$": "<rootDir>/layouts$1",
    "@data(.*)$": "<rootDir>/data$1",
  },
  collectCoverageFrom: [
    "src/**/*.tsx",
    "<rootDir>/**/*.tsx",
    "<rootDir>/layouts/**/*.tsx",
    "<rootDir>/components/**/*.tsx",
    "<rootDir>/features/**/*.tsx",
    "<rootDir>/pages/**/*.tsx",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
