import fs from 'fs';
import chalk from 'chalk';
import * as net from 'net';
import { command } from 'yargs';
import { AddNote, ModifyNote, DeleteNote, ListUserNotes, ReadNote } from './NoteOperations'

/**
 * @type Custom type to represent a Response from the Server
 */
type ResponseType = {
  command: string
  flag: boolean
  serverMessage?: string
  noteArray?: string[]
}
/**
 * @param connection Socket to connect Server - Client
 */
net.createServer((connection) => {
  
  console.log(chalk.greenBright('A client has connected'));
  /**
   * @event data Take a client request and process the data for each command option and create
   * a response from the server to client with the result of the client request
   */
  connection.on('data', (clientRequest) => {
    const JSON_CLIENT_REQUEST = JSON.parse(String(clientRequest));
    let response: ResponseType = {
      command: "",
      flag: false,
      serverMessage: ""
    }

   switch (JSON_CLIENT_REQUEST.command) {
      case 'add': {
        if (AddNote(JSON_CLIENT_REQUEST)) {
          response.command = 'add'
          response.flag = true;
          response.serverMessage = `New note from ${JSON_CLIENT_REQUEST.user} added!!`;
        } else {
          response.command = 'add'
          response.flag = false;
          response.serverMessage = `Cannot create Note. Try again...`;
        }
      } 
        break;

      case 'modify': {
        if (ModifyNote(JSON_CLIENT_REQUEST)) {
          response.command = 'modify'
          response.flag = true;
          response.serverMessage = `Note ${JSON_CLIENT_REQUEST.title} modify!!`;
        } else {
          response.command = 'modify'
          response.flag = false
          response.serverMessage = `Cannot modify Note. Try again...`
        }
      }
        break;

      case 'delete': {
        if (DeleteNote(JSON_CLIENT_REQUEST)) {
          response.command = 'delete'
          response.flag = true
          response.serverMessage = `Note ${JSON_CLIENT_REQUEST.title} removed!!`
        } else {
          response.command = 'delete'
          response.flag = false
          response.serverMessage = `Cannot delete Note. Try again...`
        }
      }
        break;
      
      case 'list': {
        const noteStore: string[] = ListUserNotes(JSON_CLIENT_REQUEST);
        if (noteStore.length !== 0) {
          response.command = 'list'
          response.flag = true
          response.serverMessage = `Note listed from ${JSON_CLIENT_REQUEST.user}`
          response.noteArray = noteStore;
        } else {
          response.command = 'list'
          response.flag = false
          response.serverMessage = `Cannot list all Notes. Try again...`
          response.noteArray = noteStore;
        }
      }
        break;
      case 'list': {
        const noteStore: string[] = ListUserNotes(JSON_CLIENT_REQUEST);
        if (noteStore.length !== 0) {
          response.command = 'list'
          response.flag = true
          response.serverMessage = `Note listed from ${JSON_CLIENT_REQUEST.user}`
          response.noteArray = noteStore;
        } else {
          response.command = 'list'
          response.flag = false
          response.serverMessage = `Cannot list all Notes. Try again...`
          response.noteArray = noteStore;
        }
      }
        break;
      case 'read': {
        const noteStore: string[] = ReadNote(JSON_CLIENT_REQUEST);
        if (noteStore.length !== 0) {
          response.command = 'read'
          response.flag = true
          response.serverMessage = `Content of ${JSON_CLIENT_REQUEST.title}`
          response.noteArray = noteStore;
        } else {
          response.command = 'read'
          response.flag = false
          response.serverMessage = `Cannot read the note. Try again...`
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
    connection.write(JSON.stringify(response),(err) => {
      if(err) {
        console.error(chalk.redBright.bold("SERVER: Cannot send response"))
      } else {
        console.log(chalk.bold.greenBright("SERVER: Response sent to client."))
      }
    });
  });

  /**
   * @event error Report any error when the connection is stablished
   */
  connection.on('error', (err) => {
    if (err) {
      console.error(chalk.redBright.bold('Connection failed. Try again...'));
    }
  });
/**
 * @event close Report the end of the connection between server and a client
 */
  connection.on('close', () => {
    console.log(chalk.green.bold(`Client disconnected.`));
  });

  /**
   * @method listen Start a server listening for connections.
   */
}).listen(60300,() => {
  console.log(chalk.grey.bold("Waiting for clients to connect"));
});