import fs from 'fs';
import chalk from 'chalk';
import * as yargs from 'yargs';

/**
 * @class NoteOperations will be a class which will manage all the differents operations for a note
 */
  /**
   * empty constructor 
   */
  
  /**
   * @method AddNote() will manage all data for create a new note for a specific user
   */
  export function AddNote(JSONFile: any): boolean {

    if (typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string' && typeof JSONFile.content === 'string' && typeof JSONFile.color === 'string') {
      
      /**
       * If the User directory does not exist with fs it will be created
       */
      if(!fs.existsSync(`./Notes/${JSONFile.user}`)) {
        fs.mkdir(`./Notes/${JSONFile.user}`,(err) => {
          if(err){
            console.error(chalk.redBright("An error have been ocurred. Try again..."));
            return false;
          }
        });
      }
      /**
       * Then the function check if the directory already have a note otherise the note will be created
       */
      if(!fs.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}`)) {
        const JSONcontent = {
          title: JSONFile.title.toString(),
          content: JSONFile.content.toString(),
          color: JSONFile.color.toString()
        }
        const JSONdata = JSON.stringify(JSONcontent,null,1)
        fs.writeFile(`./Notes/${JSONFile.user}/${JSONFile.title}.json`, JSONdata, (err) => {
          if(err) {
            console.error(chalk.redBright("An error have been ocurred. Try again..."));
            return false;
          } else {
            console.log(chalk.greenBright(`New note from ${JSONFile.user} added!!`));
            return true;
          }
        });
      } else {
        console.error(chalk.redBright("You have a note with this title, try again with another."));
        return false;

        
      }
    }
    else {
      console.error(chalk.redBright("There is some errors declaring the new note. Data must be Strings type"));
    }
    return true;
  }

  export function ModifyNote(JSONFile: any): boolean {
    
    if(typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string' && typeof JSONFile.content === 'string' && typeof JSONFile.color === 'string') {
      if(fs.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`)) {
        const JSONcontent = {
          title: JSONFile.title.toString(),
          content: JSONFile.content.toString(),
          color: JSONFile.color.toString()
        }
        const JSONdata = JSON.stringify(JSONcontent,null,1);
        fs.writeFile(`./Notes/${JSONFile.user}/${JSONFile.title}.json`, JSONdata, (err) => {
          if(err) {
            console.error(chalk.redBright("Something went wrong, try again"));
            return false;
            
          } else {
            console.log(chalk.greenBright(`Note ${JSONFile.title} was modified`));
            return true;
          }
        });
      } else {
        console.error(chalk.redBright.bold(`There is not any note with this title`));
      }
    }
    return true;
  }

export function DeleteNote(JSONFile: any): boolean {
  if(typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string') {
    if(fs.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`)) {  
      fs.rm(`./Notes/${JSONFile.user}/${JSONFile.title}.json`, { recursive: true },(err) => {
        if(err) {
          console.error(chalk.redBright("Something went wrong, try again"));
          return false;
        } else {
          console.log(chalk.greenBright(`Note ${JSONFile.title} was delete`))
          return true;
        }
      });
    }
    else{
      console.error(chalk.redBright(`Unknown File`));
      return false
    }
  }
  return true;
}


export function ListUserNotes(JSONFile: any): string[] {
  let noteStore: string[] = []
  if(typeof JSONFile.user === 'string') {
    if(fs.readdirSync(`./Notes/${JSONFile.user}`)) {
      fs.readdirSync(`./Notes/${JSONFile.user}`).forEach((userNote) => {
        const NoteContent = fs.readFileSync(`./Notes/${JSONFile.user}/${userNote}`);
        const JSONdata = JSON.parse(String(NoteContent));
        noteStore.push(JSONdata);
      });
    } else {
      console.error(chalk.redBright(`Unknown User: ${JSONFile.user}, try agains`));
    }
  }
  return noteStore;
}

export function ReadNote(JSONFile: any): string[] {
  let noteStore: string[] = [];
  if(typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string') {
    if(fs.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`)) {
      const NoteContent = fs.readFileSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`);
      const JSONdata = JSON.parse(NoteContent.toString());
      noteStore.push(JSONdata)
      return noteStore;
    }
    else { 
      return noteStore;
    }
  }
  return noteStore;
}


  