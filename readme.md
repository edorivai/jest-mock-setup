# Importing modules in the setup script breaks mocking

Steps:
1. clone this repo
2. run `yarn` to install dependencies (I guess `npm i` should work as well, didn't test it)
3. run `yarn jest` to run test

To verify that the setup file is the problem:
- empty the entire `setup.js` file
or
- remove the `jest` entry from `package.json`

Now the tests should both pass
