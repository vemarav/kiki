module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["./node_modules/"],
  moduleNameMapper: {
    "^domain/(.*)$": "<rootDir>/lib/domain/$1",
    "^presentation(.*)$": "<rootDir>/lib/presentation/$1",
    "^infra(.*)$": "<rootDir>/lib/infra/$1",
    "^shared(.*)$": "<rootDir>/lib/shared/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
