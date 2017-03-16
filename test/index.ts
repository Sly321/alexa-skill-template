const context = require ('aws-lambda-mock-context');
const ctx = context();

import chai = require('chai');

let expect = chai.expect;
let index = require('../src/index');

let obj = {
    'session': {
        'sessionId': 'SessionId.154291c5-a13f-4e7a-ab5a-2342534adfeba',
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
        'requestId': 'EdwRequestId.474c15c8-14d2-4a77-a4ce-154291c5',
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

    var speechResponse = null;
    var speechError = null;

	// Vor jedem Test
	before((done) => {
		classUnderTest.Handler(obj, ctx);
		ctx.Promise
			.then(response => { speechResponse = response; done(); })
			.catch(error => { speechError = error; done(); });
	});

    describe("asdf", function () {
        it('should have something', function () {
            expect(speechResponse.response.card.content).to.be.equal('hello bud');
            expect(speechError).to.be.equal(null);
        });
    });

});
