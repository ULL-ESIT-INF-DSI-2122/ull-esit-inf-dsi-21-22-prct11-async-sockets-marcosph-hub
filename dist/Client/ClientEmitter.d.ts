/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class MessageEventEmitterClient extends EventEmitter {
    constructor(CLIENTSOCKET: EventEmitter);
}
/**
 * clase que recoge mensaje del servidor la procesa y emite evento hacia el cliente
 */ 
