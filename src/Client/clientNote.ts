import fs from 'fs';
import chalk from 'chalk';
import * as net from 'net';
import * as yargs from 'yargs';

/**
 * @type RequestType Custom type to represent a Request from the Client
 */
export type RequestType = {
  command: 'add' | 'modify' | 'delete' | 'list' | 'read' | undefined,
  user: string,
  title?: string,
  content?: string,
  color?: string
}

/**
 * @param CLIENT Socket to connect with the Server by a specific port
 */
const CLIENT = net.connect({port: 60300});
let clientRequest: RequestType = {
  command: undefined,
  user: ''
}

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
      }
    } else {
      return console.error(chalk.redBright("Unvalid data type."));
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
    if(typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.content === 'string' && typeof argv.color === 'string') {
      clientRequest = {
        command: 'modify',
        user: argv.user,
        title: argv.title,
        content: argv.content,
        color: argv.color
      }
    } else {
      return console.error(chalk.redBright("Unvalid data type."));
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
    if(typeof argv.user === 'string' && typeof argv.title === 'string') {
      clientRequest = {
        command: 'delete',
        user: argv.user,
        title: argv.title
      }
    } else {
      return console.error(chalk.redBright("Unvalid data type."));
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
    if(typeof argv.user === 'string') {
      clientRequest = {
        command: 'list',
        user: argv.user
      }
    } else {
      return console.error(chalk.redBright("Unvalid data type."));
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
    if(typeof argv.user === 'string' && typeof argv.title === 'string') {
      clientRequest = {
        command: 'read',
        user: argv.user,
        title: argv.title
      }
    }
  }
});

yargs.parse();

/**
 * @method write send the client request to the server for be processed
 */
CLIENT.write(JSON.stringify(clientRequest),(err) => {
  if (err) {
    console.error(chalk.red(`Cannot send the Note Request to Server. Try it again...`));
  }
});

/**
 * @event data Recive the Server Response and process the data.
 */
CLIENT.on('data', (serverResponse) => {
  const JSON_SERVER_RESPONSE = JSON.parse(String(serverResponse));
  
  if(JSON_SERVER_RESPONSE.flag === true) {
    console.log(chalk.bold.greenBright(`SERVER Message: ${JSON_SERVER_RESPONSE.serverMessage}`))
  } else {
  console.log(chalk.bold.red(`SERVER ERROR: ${JSON_SERVER_RESPONSE.serverMessage}`))
  }
  if(JSON_SERVER_RESPONSE.command === 'list') {
    JSON_SERVER_RESPONSE.noteArray.forEach(element => {
      printColor(element.color,element.title)
    });
  }
  if(JSON_SERVER_RESPONSE.command === 'read') {
    JSON_SERVER_RESPONSE.noteArray.forEach(element => {
      printColor(element.color,element.content)
    });
  }
});


function printColor(color:string, cadena:string) {
  if (color === 'red' || color === 'Red') {
    console.log(chalk.redBright(cadena));
  } else if (color === 'green' || color === 'Green') {
    console.log(chalk.greenBright(cadena));
  } else if (color === 'blue' || color === 'Blue') {
    console.log(chalk.blueBright(cadena));
  } else if (color === 'yellow' || color === 'Yellow') {
    console.log(chalk.yellowBright(cadena));
  }
}