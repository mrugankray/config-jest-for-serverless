module.exports = {
    "testEnvironment": "node",
    "transform": {
        "^.+\\.(js)$": "babel-jest", // transpiles your code first using babel before running tests
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    transformIgnorePatterns: [], // to transpile code in node modules too,
    setupFiles: ["./setupTests.js"],
    testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ], // this is default, you can change based on your needs
    testPathIgnorePatterns: ["/node_modules/"],
    testTimeout: 5000, // this is the default value, you can increase it based on your needs.
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }, // optional
    collectCoverageFrom: [
        "./index.js"
        // you can add any folder where your code is
    ], // optional
    coveragePathIgnorePatterns: [
        "/node_modules/",
        // add any file/folder for which you don't want coverage to be calculated
    ] // optional
}