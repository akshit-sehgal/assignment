module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/app/**/*.{js,jsx,mjs}',"!src/app/index.js","!src/app/helpers/fetchWrapper.js"],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/enzyme.config.js'],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    "moduleNameMapper":{
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
   }
  };