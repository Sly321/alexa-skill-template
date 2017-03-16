import * as Alexa from 'alexa-sdk';

let handlers: Alexa.Handlers = {

};

export class Handler {
	constructor(event: Alexa.requestBody, context: Alexa.context, callback: Funtion) {
		let alexa = Alexa.handler(event, context);
		alexa.appId = 'my_alexa_id';
		alexa.registerHandler(handlers);
		alexa.execute();
	}
}
