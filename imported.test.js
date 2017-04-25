import { testableFunction } from './imported';
jest.mock("./importedDependency");

test('should be mocked', () => {
	expect(testableFunction()).toBe('[mocked]');
});
