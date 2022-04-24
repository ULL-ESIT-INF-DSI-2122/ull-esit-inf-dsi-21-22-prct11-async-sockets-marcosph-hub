/**
 * @class NoteOperations will be a class which will manage all the differents operations for a note
 */
export declare class NoteOperations {
    /**
     * empty constructor
     */
    constructor();
    /**
     * @method AddNote() will manage all data for create a new note for a specific user
     */
    AddNote(): void;
    /**
     * @method ModifyNote() look for a specific note searching by the title and checking if the user and the file exists, then the new content will replace the old one
     */
    ModifyNote(): void;
    /**
     * @method DeleteNote() with this command and the username and the note title will call the function that will look for the note if this exist and remove it
     */
    DeleteNote(): void;
    /**
     * @method ListUserNotes() method that will manage the command modify which for a specific user if it is created will list all the notes created by the user
     */
    ListUserNotes(): void;
    /**
     * @method ReadNote() this method manage the command read which will check if a note is created if the note exist the content of the note will be displayed
     */
    ReadNote(): void;
}
