/* eslint-disable */
export default {
  displayName: 'portfolio-client',
  preset: '../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  coverageDirectory: '../../../coverage/packages/apps/portfolio-client',
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text', 'text-summary'],
  reporters: ['default']
};
