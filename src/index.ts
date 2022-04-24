import * as yargs from 'yargs';
import { NoteOperations } from './NoteOperation'
/*
import {watchFile} from 'fs';
import {spawn} from 'child_process';


watchFile('helloworld.txt', (curr, prev) => {
  console.log(`File was ${prev.size} bytes before it was modified.`);
  console.log(`Now file is ${curr.size} bytes.`);

  const wc = spawn('wc', ['helloworld.txt']);

  let wcOutput = '';
  wc.stdout.on('data', (piece) =>{
    wcOutput += piece
    console.log("no ha concluido el proceso")
  });

  wc.on('close', () => {
    const wcOutputAsArray = wcOutput.split(/\s+/);
    console.log(`File helloworld.txt has ${wcOutputAsArray[1]} lines`);
    console.log(`File helloworld.txt has ${wcOutputAsArray[2]} words`);
    console.log(`File helloworld.txt has ${wcOutputAsArray[3]} characters`);
  });
});*/

/*
console.log(chalk.blue('This text is blue'));
console.log(chalk.blue.inverse('This text is over a blue background'));
*/


let Note = new NoteOperations;
Note.AddNote();
Note.ModifyNote();
Note.DeleteNote();

yargs.parse()