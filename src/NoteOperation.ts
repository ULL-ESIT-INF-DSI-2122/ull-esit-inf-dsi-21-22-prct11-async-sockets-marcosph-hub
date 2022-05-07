import chalk from 'chalk';
import * as yargs from 'yargs';
import { string } from 'yargs';
import { BasicNote } from './NoteClass'
import fs from 'fs';

/**
 * @class NoteOperations will be a class which will manage all the differents operations for a note
 */
export class NoteOperations {
  /**
   * empty constructor 
   */
  constructor(){}
  
  /**
   * @method AddNote() will manage all data for create a new note for a specific user
   */
  AddNote() {

    /**
     * With yargs we recive all the necesary data with the specific type to create the note
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
        /**
         * using the handler the function will check if all data are strings and check if the directory of the User exist
         */
        if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.content === 'string' && typeof argv.color === 'string') {
          
          /**
           * If the User directory does not exist with fs it will be created
           */
          if(!fs.existsSync(`./Notes/${argv.user}`)) {
            fs.mkdir(`./Notes/${argv.user}`,(err) => {
              if(err){
                console.error(chalk.redBright("An error have been ocurred. Try again..."));
                return 0;
              }
            });
          }
          /**
           * Then the function check if the directory already have a note otherise the note will be created
           */
          if(!fs.existsSync(`./Notes/${argv.user}/${argv.title}`)) {
            const JSONcontent = {
              title: argv.title.toString(),
              content: argv.content.toString(),
              color: argv.color.toString()
            }
            const JSONdata = JSON.stringify(JSONcontent,null,1)
            fs.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
              if(err) {
                console.error(chalk.redBright("An error have been ocurred. Try again..."));
                return 0;
              } else {
                console.log(chalk.greenBright(`New note from ${argv.user} added!!`));
                return 1;
              }
            });
          } else {
            return console.error(chalk.redBright("You have a note with this title, try again with another."));
            
          }
        }
        else {
          return console.error(chalk.redBright("There is some errors declaring the new note. Data must be Strings type"));
  
        }
      },
    });
  }
/**
 * @method ModifyNote() look for a specific note searching by the title and checking if the user and the file exists, then the new content will replace the old one
 */
  ModifyNote() {
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
          let userNote = new BasicNote(argv.user, argv.title, argv.content, argv.color);
          if(fs.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
            const JSONcontent = {
              title: argv.title.toString(),
              content: argv.content.toString(),
              color: argv.color.toString()
            }
            const JSONdata = JSON.stringify(JSONcontent,null,1);
            fs.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
              if(err) {
                console.error(chalk.redBright("Something went wrong, try again"));
                return 0;
              } else {
                console.log(chalk.greenBright(`Note ${argv.title} was modified`));
                return 1;
              }
            });
          } else {
            return console.error(chalk.redBright(`There is not any note with this title`));
          }
        }
      }
    });
  }
/**
 * @method DeleteNote() with this command and the username and the note title will call the function that will look for the note if this exist and remove it
 */
  DeleteNote() {
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
          let userNote = new BasicNote(argv.user, argv.title);

          if(fs.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {  
            fs.rm(`./Notes/${argv.user}/${argv.title}.json`, { recursive: true },(err) => {
              if(err) {
                console.error(chalk.redBright("Something went wrong, try again"));
                return 0;
              } else {
                console.log(chalk.greenBright(`Note ${argv.title} was delete`))
                return 1;
              }
            });
          }
          else{
            return console.error(chalk.redBright(`Unknown File`));
          }
        }
      }
    });
  }
/**
 * @method ListUserNotes() method that will manage the command modify which for a specific user if it is created will list all the notes created by the user
 */
  ListUserNotes() {
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
          if(fs.readdirSync(`./Notes/${argv.user}`)) {
            fs.readdirSync(`./Notes/${argv.user}`).forEach((userNote) => {
              const NoteContent = fs.readFileSync(`./Notes/${argv.user}/${userNote}`);
              const JSONdata = JSON.parse(String(NoteContent));
              //const ListedNote = new BasicNote(JSONdata.user, JSONdata.title, JSONdata.content, JSONdata.color);
              //console.log(chalk.keyword(`${JSONdata.color}`)("prueba"))
              printColor(JSONdata.color,JSONdata.title);
              //const chalkcolor = `orange`;
              //const JSONcolor =  String(JSONdata.color)
              //console.log(chalk.keyword(JSONcolor)(`${JSONcolor} ${typeof JSONcolor}`))
              //console.log(chalk.keyword(`${chalkcolor}`)(`${JSONdata.title}`))
              
              return 1;
            });
          } else {
            return console.error(chalk.redBright(`Unknown User: ${argv.user}, try agains`));
          }
        }
      }
    });
    
  }

  /**
   * @method ReadNote() this method manage the command read which will check if a note is created if the note exist the content of the note will be displayed
   */
  ReadNote() {
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
          if(fs.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
            const NoteContent = fs.readFileSync(`./Notes/${argv.user}/${argv.title}.json`);
            const JSONdata = JSON.parse(NoteContent.toString());
            const usernote = new BasicNote(JSONdata.user, JSONdata.title, JSONdata.content, JSONdata.color)
            printColor(JSONdata.color,JSONdata.title)
            printColor(JSONdata.color,JSONdata.content)
            return console.log(chalk.greenBright("Note has been readed"));
          }
          else { 
            return console.error(chalk.redBright(`Unknown Note with title: ${argv.title}`))
          }
        }
      }
    });
  }
}

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

