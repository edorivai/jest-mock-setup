import * as dep from './importedDependency';
// import { inTheMiddle } from './middle';

export function testableFunction() {
	// return inTheMiddle();
	return dep.mockableFunction();
}
