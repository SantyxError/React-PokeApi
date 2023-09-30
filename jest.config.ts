import type { Config } from 'jest';

process.env.NODE_OPTIONS = '--loader ts-node/esm';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: "jsdom"
};

export default config;
