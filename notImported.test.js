import { testableFunction } from './notImported';
jest.mock("./notImportedDependency");

test('should be mocked', () => {
	expect(testableFunction()).toBe('[mocked]');
});
