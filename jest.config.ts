import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
	transform: { "^.+\\.tsx?$": ["ts-jest", {"rootDir": "."}] },
	moduleDirectories: ['node_modules', 'src']
}

export default config;