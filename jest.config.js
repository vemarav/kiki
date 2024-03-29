module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["./node_modules/"],
  moduleNameMapper: {
    "^domain/(.*)$": "<rootDir>/lib/domain/$1",
    "^presentation(.*)$": "<rootDir>/lib/presentation/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
