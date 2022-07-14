/* eslint-disable */
import { readFileSync } from 'fs';

// Reading the SWC compilation config and remove the "exclude"
// for the test files to be compiled by SWC
const { exclude: _, ...swcJestConfig } = JSON.parse(
  readFileSync(`${__dirname}/.lib.swcrc`, 'utf-8')
);
export default {
  displayName: 'core',
  coverageDirectory: '../../../coverage/packages/libs/core',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest', swcJestConfig]
  },
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text', 'text-summary'],
  reporters: ['default'],
  moduleFileExtensions: ['ts', 'js', 'html']
};
