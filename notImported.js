import * as dep from './notImportedDependency';
// import { inTheMiddle } from './middle';

export function testableFunction() {
	// return inTheMiddle();
	return dep.mockableFunction();
}
