import * as Alexa from 'alexa-sdk';
import * as handler from './handlers';

export class Handler {
	constructor(event: Alexa.requestBody, context: Alexa.context, callback: Function) {
		let alexa = Alexa.handler(event, context);
		alexa.appId = 'my_alexa_id';
		alexa.registerHandlers(handler.getHandlers());
		alexa.execute();
	}
}
