module.export = {
  testEnvironment: "jest-environment-node",
  collectCoverageFrom: ["**/src/**/*"],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 100
    }
  }
};
