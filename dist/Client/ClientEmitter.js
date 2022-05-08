"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEventEmitterClient = void 0;
const events_1 = require("events");
class MessageEventEmitterClient extends events_1.EventEmitter {
    constructor(CLIENTSOCKET) {
        super();
        /*
        let JSON_SERVER_RESPONSE: string = "";
    
        CLIENTSOCKET.on('data', (serverResponse) => {
           CLIENTSOCKET.emit('serverMessage',JSON.parse(String(serverResponse)));
        });
        */
    }
}
exports.MessageEventEmitterClient = MessageEventEmitterClient;
/**
 * clase que recoge mensaje del servidor la procesa y emite evento hacia el cliente
 */ 
