import chalk from 'chalk';
import * as yargs from 'yargs';
import { string } from 'yargs';
import { BasicNote } from './NoteClass'
import fs from 'fs';

export class NoteOperations {
  constructor(){}
  
  AddNote(){
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
          let userNote = new BasicNote(argv.user, argv.title, argv.content, argv.color);
          if(!fs.existsSync(`./Notes/${argv.user}`)) {
            fs.mkdir(`./Notes/${argv.user}`,(err) => {
              if(err){
                throw err;
              }
            });
          }
          if(!fs.existsSync(`./Notes/${argv.user}/${argv.title}`)) {
            const JSONcontent = {
              title: argv.title.toString(),
              content: argv.content.toString()
            }
            const JSONdata = JSON.stringify(JSONcontent,null,1)
            fs.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
              if(err) {
                console.error("An error have been ocurred. Try again...");
                throw err;
              } else {
                console.log(chalk.greenBright(`New note from ${argv.user} added!!`));
              }
            });
          } else {
            console.log(chalk.bgRed("You have a note with this title, try again with another."))
          }
        }
        else {
          console.log("There is some errors declaring the new note. Data must be Strings type")
        }
      },
    });
  }

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
          if(fs.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
            const JSONcontent = {
              title: argv.title.toString(),
              content: argv.content.toString()
            }
            const JSONdata = JSON.stringify(JSONcontent,null,1);
            fs.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
              if(err) {
                console.error("Something went wrong, try again");
                return err;
              } else {
                console.log(chalk.greenBright(`Note ${argv.title} was modified`));
              }
            });
          } else {
            return console.error(`There is not any note with this title`)
          }
        }
      }
    });
  }

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
        content: {
          describe: 'Note content',
          demandOption: false,
          type: 'string',
        },
        color: {
          describe: 'Note color',
          demandOption: false,
          type: 'string'
        }
      },
      handler(argv) {
        if(typeof argv.user === 'string' && typeof argv.title === 'string') {
          if(fs.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
            fs.rm(`./Notes/${argv.user}/${argv.title}.json`, { recursive: true },(err) => {
              if(err) {
                console.error(err.message);
                return;
              } else {
                console.log(chalk.greenBright(`Note ${argv.title} was delete`))
              }
            });
          }
          else{
            console.error(`Unknown File`);
            return;
          }
        }
      }
    });
  }

}