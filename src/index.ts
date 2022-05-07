import * as yargs from 'yargs';
import { NoteOperations } from './NoteOperation'
import { BasicNote } from './NoteClass';

/**
 * declaration of the object that will manage the differents options for a note
 */

const Note = new NoteOperations;

Note.AddNote();
Note.ModifyNote();
Note.DeleteNote();
Note.ListUserNotes()
Note.ReadNote();

yargs.parse()