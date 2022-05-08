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
const yargs = __importStar(require("yargs"));
/**
 * @param CLIENT Socket to connect with the Server by a specific port
 */
const CLIENT = net.connect({ port: 60300 });
let clientRequest = {
    command: undefined,
    user: ''
};
/**
 * @module yargs to manage the commands specified by the user
 * @method command Define the commands exposed by the application.
 */
yargs.command({
    command: 'add',
    describe: 'Allows to create a new note',
    builder: {
        user: {
            describe: 'User Name',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        content: {
            describe: 'Note content',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note color',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.content === 'string' && typeof argv.color === 'string') {
            clientRequest = {
                command: 'add',
                user: argv.user,
                title: argv.title,
                content: argv.content,
                color: argv.color
            };
        }
        else {
            return console.error(chalk_1.default.redBright("Unvalid data type."));
        }
    }
});
yargs.command({
    command: 'modify',
    describe: 'Modify a created note',
    builder: {
        user: {
            describe: 'Note owner',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        content: {
            describe: 'Note content',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note color',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.content === 'string' && typeof argv.color === 'string') {
            clientRequest = {
                command: 'modify',
                user: argv.user,
                title: argv.title,
                content: argv.content,
                color: argv.color
            };
        }
        else {
            return console.error(chalk_1.default.redBright("Unvalid data type."));
        }
    }
});
yargs.command({
    command: 'delete',
    describe: 'Delete a specific Note',
    builder: {
        user: {
            describe: 'User Name',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            clientRequest = {
                command: 'delete',
                user: argv.user,
                title: argv.title
            };
        }
        else {
            return console.error(chalk_1.default.redBright("Unvalid data type."));
        }
    }
});
yargs.command({
    command: 'list',
    describe: 'List every notes of a specific user',
    builder: {
        user: {
            describe: 'User Name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        if (typeof argv.user === 'string') {
            clientRequest = {
                command: 'list',
                user: argv.user
            };
        }
        else {
            return console.error(chalk_1.default.redBright("Unvalid data type."));
        }
    }
});
yargs.command({
    command: 'read',
    describe: 'Read a note of a specific user',
    builder: {
        user: {
            describe: 'User Name',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            clientRequest = {
                command: 'read',
                user: argv.user,
                title: argv.title
            };
        }
    }
});
yargs.parse();
/**
 * @method write send the client request to the server for be processed
 */
CLIENT.write(JSON.stringify(clientRequest), (err) => {
    if (err) {
        console.error(chalk_1.default.red(`Cannot send the Note Request to Server. Try it again...`));
    }
});
/**
 * @event data Recive the Server Response and process the data.
 */
CLIENT.on('data', (serverResponse) => {
    const JSON_SERVER_RESPONSE = JSON.parse(String(serverResponse));
    if (JSON_SERVER_RESPONSE.flag === true) {
        console.log(chalk_1.default.bold.greenBright(`SERVER Message: ${JSON_SERVER_RESPONSE.serverMessage}`));
    }
    else {
        console.log(chalk_1.default.bold.red(`SERVER ERROR: ${JSON_SERVER_RESPONSE.serverMessage}`));
    }
    if (JSON_SERVER_RESPONSE.command === 'list') {
        JSON_SERVER_RESPONSE.noteArray.forEach(element => {
            printColor(element.color, element.title);
        });
    }
    if (JSON_SERVER_RESPONSE.command === 'read') {
        JSON_SERVER_RESPONSE.noteArray.forEach(element => {
            printColor(element.color, element.content);
        });
    }
});
function printColor(color, cadena) {
    if (color === 'red' || color === 'Red') {
        console.log(chalk_1.default.redBright(cadena));
    }
    else if (color === 'green' || color === 'Green') {
        console.log(chalk_1.default.greenBright(cadena));
    }
    else if (color === 'blue' || color === 'Blue') {
        console.log(chalk_1.default.blueBright(cadena));
    }
    else if (color === 'yellow' || color === 'Yellow') {
        console.log(chalk_1.default.yellowBright(cadena));
    }
}
