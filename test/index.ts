const context = require ('aws-lambda-mock-context');
const ctx = context();

import chai = require('chai');

let expect = chai.expect;
let index = require('../src/index');

let obj = {
	'session': {
		'sessionId': 'SessionId.1',
		'application': {
			'applicationId': 'my_alexa_id'
		},
		'attributes': {},
		'user': {
			'userId': null
		},
		'new': true
	},
	'request': {
		'type': 'IntentRequest',
		'requestId': 'EdwRequestId.1',
		'timestamp': '2017-02-02T22:02:01Z',
		'intent': {
			'name': 'HelloIntent',
			'slots': {
				'Word': {
					'name': 'Word',
					'value': 'hello'
				}
			}
		},
		'locale': 'de-DE'
	},
	'version': '1.0'
};


describe('HelloIntent', () => {

	let classUnderTest = index;

	let speechResponse = '';
	let speechError = '';

	// Vor jedem Test
	beforeEach((done) => {
		classUnderTest.Handler(obj, ctx);
		ctx.Promise
			.then(response => { speechResponse = response; done(); })
			.catch(error => { speechError = error; done(); });
	});

	it('should have something', () => {
		// Vorbereitung

		// Ausführung


		// Prüfung
		expect(speechError).to.be(null);
	});

});
