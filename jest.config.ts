import {Config} from 'jest'
import {compilerOptions} from './tsconfig.json'
import {pathsToModuleNameMapper} from 'ts-jest'

const config: Config = {
  displayName: 'all',
  preset: 'ts-jest', // Для поддержки TypeScript
  testEnvironment: 'jest-environment-jsdom', // Окружение для тестирования
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', {tsconfig: 'tsconfig.json'}],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}

export default config
