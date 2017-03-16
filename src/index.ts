import * as Alexa from 'alexa-sdk';

let handlers: Alexa.Handlers = {
	'AboutIntent': () => {
		let self: Alexa.Handler = this;
		let speechOutput = 'This skill was writte by Sven Liebig';
		self.emit('tellWithCard', speechOutput, 'Svens Skill', speechOutput);
	},
	'HelloIntent': () => {
		let self: Alexa.Handler = this;
		let intentRequest = <Alexa.IntentRequest> self.event.request;
		let value = intentRequest.intent.slots.Word.value;
		let speechOutput = '';
		if (value.toLowercase() === 'hello') {
			speechOutput = 'hello bud';
		} else {
			speechOutput = 'say hello scrub';
		}
		self.emit('tellWithCard', speechOutput, 'Svens Skill', speechOutput);
	},
};

export class Handler {
	constructor(event: Alexa.requestBody, context: Alexa.context, callback: Function) {
		let alexa = Alexa.handler(event, context);
		alexa.appId = 'my_alexa_id';
		alexa.registerHandler(handlers);
		alexa.execute();
	}
}
