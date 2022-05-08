"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const net = __importStar(require("net"));
const NoteOperations_1 = require("./NoteOperations");
/**
 * @param connection Socket to connect Server - Client
 */
net.createServer((connection) => {
    console.log(chalk_1.default.greenBright('A client has connected'));
    /**
     * @event data Take a client request and process the data for each command option and create
     * a response from the server to client with the result of the client request
     */
    connection.on('data', (clientRequest) => {
        const JSON_CLIENT_REQUEST = JSON.parse(String(clientRequest));
        let response = {
            command: "",
            flag: false,
            serverMessage: ""
        };
        switch (JSON_CLIENT_REQUEST.command) {
            case 'add':
                {
                    if ((0, NoteOperations_1.AddNote)(JSON_CLIENT_REQUEST)) {
                        response.command = 'add';
                        response.flag = true;
                        response.serverMessage = `New note from ${JSON_CLIENT_REQUEST.user} added!!`;
                    }
                    else {
                        response.command = 'add';
                        response.flag = false;
                        response.serverMessage = `Cannot create Note. Try again...`;
                    }
                }
                break;
            case 'modify':
                {
                    if ((0, NoteOperations_1.ModifyNote)(JSON_CLIENT_REQUEST)) {
                        response.command = 'modify';
                        response.flag = true;
                        response.serverMessage = `Note ${JSON_CLIENT_REQUEST.title} modify!!`;
                    }
                    else {
                        response.command = 'modify';
                        response.flag = false;
                        response.serverMessage = `Cannot modify Note. Try again...`;
                    }
                }
                break;
            case 'delete':
                {
                    if ((0, NoteOperations_1.DeleteNote)(JSON_CLIENT_REQUEST)) {
                        response.command = 'delete';
                        response.flag = true;
                        response.serverMessage = `Note ${JSON_CLIENT_REQUEST.title} removed!!`;
                    }
                    else {
                        response.command = 'delete';
                        response.flag = false;
                        response.serverMessage = `Cannot delete Note. Try again...`;
                    }
                }
                break;
            case 'list':
                {
                    const noteStore = (0, NoteOperations_1.ListUserNotes)(JSON_CLIENT_REQUEST);
                    if (noteStore.length !== 0) {
                        response.command = 'list';
                        response.flag = true;
                        response.serverMessage = `Note listed from ${JSON_CLIENT_REQUEST.user}`;
                        response.noteArray = noteStore;
                    }
                    else {
                        response.command = 'list';
                        response.flag = false;
                        response.serverMessage = `Cannot list all Notes. Try again...`;
                        response.noteArray = noteStore;
                    }
                }
                break;
            case 'list':
                {
                    const noteStore = (0, NoteOperations_1.ListUserNotes)(JSON_CLIENT_REQUEST);
                    if (noteStore.length !== 0) {
                        response.command = 'list';
                        response.flag = true;
                        response.serverMessage = `Note listed from ${JSON_CLIENT_REQUEST.user}`;
                        response.noteArray = noteStore;
                    }
                    else {
                        response.command = 'list';
                        response.flag = false;
                        response.serverMessage = `Cannot list all Notes. Try again...`;
                        response.noteArray = noteStore;
                    }
                }
                break;
            case 'read':
                {
                    const noteStore = (0, NoteOperations_1.ReadNote)(JSON_CLIENT_REQUEST);
                    if (noteStore.length !== 0) {
                        response.command = 'read';
                        response.flag = true;
                        response.serverMessage = `Content of ${JSON_CLIENT_REQUEST.title}`;
                        response.noteArray = noteStore;
                    }
                    else {
                        response.command = 'read';
                        response.flag = false;
                        response.serverMessage = `Cannot read the note. Try again...`;
                        response.noteArray = noteStore;
                    }
                }
                break;
            default:
                break;
        }
        /**
         * @method write Send to the client the response with the result of the request
         */
        connection.write(JSON.stringify(response), (err) => {
            if (err) {
                console.error(chalk_1.default.redBright.bold("SERVER: Cannot send response"));
            }
            else {
                console.log(chalk_1.default.bold.greenBright("SERVER: Response sent to client."));
            }
        });
    });
    /**
     * @event error Report any error when the connection is stablished
     */
    connection.on('error', (err) => {
        if (err) {
            console.error(chalk_1.default.redBright.bold('Connection failed. Try again...'));
        }
    });
    /**
     * @event close Report the end of the connection between server and a client
     */
    connection.on('close', () => {
        console.log(chalk_1.default.green.bold(`Client disconnected.`));
    });
    /**
     * @method listen Start a server listening for connections.
     */
}).listen(60300, () => {
    console.log(chalk_1.default.grey.bold("Waiting for clients to connect"));
});
