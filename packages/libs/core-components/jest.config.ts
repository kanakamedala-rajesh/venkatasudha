/* eslint-disable */
export default {
  displayName: 'core-components',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  coverageDirectory: '../../../coverage/packages/libs/core-components',
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  reporters: ['default']
};
