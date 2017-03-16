const context = require ('aws-lambda-mock-context');
import chai = require('chai');

let expect = chai.expect;
let index = require('../src/index');

describe('test', () => {

	let classUnderTest = index;

	// Vor jedem Test
	beforeEach(() => {
		classUnderTest.Handler({});
	});

});
