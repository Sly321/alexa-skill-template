import * as Alexa from 'alexa-sdk';

let AboutIntent = function() {
	let self: Alexa.Handler = this;
	let speechOutput = 'This skill was writte by Sven Liebig';
	self.emit(':tellWithCard', speechOutput, 'Svens Skill', speechOutput);
};

let HelloIntent = function() {
	let self: Alexa.Handler = this;
	let intentRequest = <Alexa.IntentRequest>self.event.request;
	let value = intentRequest.intent.slots.Word.value;
	let speechOutput = '';
	if (value.toLowerCase() === 'hello') {
		speechOutput = 'hello bud';
	} else {
		speechOutput = 'say hello scrub';
	}
	this.emit(':tellWithCard', speechOutput, 'Svens Skill', speechOutput);
};

let handlers: Alexa.Handlers = {
	'AboutIntent': AboutIntent,
	'HelloIntent': HelloIntent
};

export function getHandlers() {
	return handlers;
}
