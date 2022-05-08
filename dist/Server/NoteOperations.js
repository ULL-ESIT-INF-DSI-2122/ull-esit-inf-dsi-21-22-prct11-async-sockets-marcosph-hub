"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadNote = exports.ListUserNotes = exports.DeleteNote = exports.ModifyNote = exports.AddNote = void 0;
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
/**
 * @class NoteOperations will be a class which will manage all the differents operations for a note
 */
/**
 * empty constructor
 */
/**
 * @method AddNote() will manage all data for create a new note for a specific user
 */
function AddNote(JSONFile) {
    if (typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string' && typeof JSONFile.content === 'string' && typeof JSONFile.color === 'string') {
        /**
         * If the User directory does not exist with fs it will be created
         */
        if (!fs_1.default.existsSync(`./Notes/${JSONFile.user}`)) {
            fs_1.default.mkdir(`./Notes/${JSONFile.user}`, (err) => {
                if (err) {
                    console.error(chalk_1.default.redBright("An error have been ocurred. Try again..."));
                    return false;
                }
            });
        }
        /**
         * Then the function check if the directory already have a note otherise the note will be created
         */
        if (!fs_1.default.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}`)) {
            const JSONcontent = {
                title: JSONFile.title.toString(),
                content: JSONFile.content.toString(),
                color: JSONFile.color.toString()
            };
            const JSONdata = JSON.stringify(JSONcontent, null, 1);
            fs_1.default.writeFile(`./Notes/${JSONFile.user}/${JSONFile.title}.json`, JSONdata, (err) => {
                if (err) {
                    console.error(chalk_1.default.redBright("An error have been ocurred. Try again..."));
                    return false;
                }
                else {
                    console.log(chalk_1.default.greenBright(`New note from ${JSONFile.user} added!!`));
                    return true;
                }
            });
        }
        else {
            console.error(chalk_1.default.redBright("You have a note with this title, try again with another."));
            return false;
        }
    }
    else {
        console.error(chalk_1.default.redBright("There is some errors declaring the new note. Data must be Strings type"));
    }
    return true;
}
exports.AddNote = AddNote;
function ModifyNote(JSONFile) {
    if (typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string' && typeof JSONFile.content === 'string' && typeof JSONFile.color === 'string') {
        if (fs_1.default.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`)) {
            const JSONcontent = {
                title: JSONFile.title.toString(),
                content: JSONFile.content.toString(),
                color: JSONFile.color.toString()
            };
            const JSONdata = JSON.stringify(JSONcontent, null, 1);
            fs_1.default.writeFile(`./Notes/${JSONFile.user}/${JSONFile.title}.json`, JSONdata, (err) => {
                if (err) {
                    console.error(chalk_1.default.redBright("Something went wrong, try again"));
                    return false;
                }
                else {
                    console.log(chalk_1.default.greenBright(`Note ${JSONFile.title} was modified`));
                    return true;
                }
            });
        }
        else {
            console.error(chalk_1.default.redBright.bold(`There is not any note with this title`));
        }
    }
    return true;
}
exports.ModifyNote = ModifyNote;
function DeleteNote(JSONFile) {
    if (typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string') {
        if (fs_1.default.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`)) {
            fs_1.default.rm(`./Notes/${JSONFile.user}/${JSONFile.title}.json`, { recursive: true }, (err) => {
                if (err) {
                    console.error(chalk_1.default.redBright("Something went wrong, try again"));
                    return false;
                }
                else {
                    console.log(chalk_1.default.greenBright(`Note ${JSONFile.title} was delete`));
                    return true;
                }
            });
        }
        else {
            console.error(chalk_1.default.redBright(`Unknown File`));
            return false;
        }
    }
    return true;
}
exports.DeleteNote = DeleteNote;
function ListUserNotes(JSONFile) {
    let noteStore = [];
    if (typeof JSONFile.user === 'string') {
        if (fs_1.default.readdirSync(`./Notes/${JSONFile.user}`)) {
            fs_1.default.readdirSync(`./Notes/${JSONFile.user}`).forEach((userNote) => {
                const NoteContent = fs_1.default.readFileSync(`./Notes/${JSONFile.user}/${userNote}`);
                const JSONdata = JSON.parse(String(NoteContent));
                noteStore.push(JSONdata);
            });
        }
        else {
            console.error(chalk_1.default.redBright(`Unknown User: ${JSONFile.user}, try agains`));
        }
    }
    return noteStore;
}
exports.ListUserNotes = ListUserNotes;
function ReadNote(JSONFile) {
    let noteStore = [];
    if (typeof JSONFile.user === 'string' && typeof JSONFile.title === 'string') {
        if (fs_1.default.existsSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`)) {
            const NoteContent = fs_1.default.readFileSync(`./Notes/${JSONFile.user}/${JSONFile.title}.json`);
            const JSONdata = JSON.parse(NoteContent.toString());
            noteStore.push(JSONdata);
            return noteStore;
        }
        else {
            return noteStore;
        }
    }
    return noteStore;
}
exports.ReadNote = ReadNote;
