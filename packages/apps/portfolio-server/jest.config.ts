/* eslint-disable */
export default {
  displayName: 'portfolio-server',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  
  coverageDirectory: '../../../coverage/packages/apps/portfolio-server',
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text', 'text-summary'],
  reporters: ['default']
};
