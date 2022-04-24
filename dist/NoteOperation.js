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
exports.NoteOperations = void 0;
const chalk_1 = __importDefault(require("chalk"));
const yargs = __importStar(require("yargs"));
const NoteClass_1 = require("./NoteClass");
const fs_1 = __importDefault(require("fs"));
/**
 * @class NoteOperations will be a class which will manage all the differents operations for a note
 */
class NoteOperations {
    /**
     * empty constructor
     */
    constructor() { }
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
                    let userNote = new NoteClass_1.BasicNote(argv.user, argv.title, argv.content, argv.color);
                    /**
                     * If the User directory does not exist with fs it will be created
                     */
                    if (!fs_1.default.existsSync(`./Notes/${argv.user}`)) {
                        fs_1.default.mkdir(`./Notes/${argv.user}`, (err) => {
                            if (err) {
                                console.error(chalk_1.default.redBright("An error have been ocurred. Try again..."));
                                return 0;
                            }
                        });
                    }
                    /**
                     * Then the function check if the directory already have a note otherise the note will be created
                     */
                    if (!fs_1.default.existsSync(`./Notes/${argv.user}/${argv.title}`)) {
                        const JSONcontent = {
                            title: argv.title.toString(),
                            content: argv.content.toString(),
                            color: argv.color.toString()
                        };
                        const JSONdata = JSON.stringify(JSONcontent, null, 1);
                        fs_1.default.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
                            if (err) {
                                console.error(chalk_1.default.redBright("An error have been ocurred. Try again..."));
                                return 0;
                            }
                            else {
                                console.log(chalk_1.default.greenBright(`New note from ${argv.user} added!!`));
                                return 1;
                            }
                        });
                    }
                    else {
                        return console.error(chalk_1.default.redBright("You have a note with this title, try again with another."));
                    }
                }
                else {
                    return console.error(chalk_1.default.redBright("There is some errors declaring the new note. Data must be Strings type"));
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
                if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.content === 'string' && typeof argv.color === 'string') {
                    if (fs_1.default.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
                        const JSONcontent = {
                            title: argv.title.toString(),
                            content: argv.content.toString(),
                            color: argv.color.toString()
                        };
                        const JSONdata = JSON.stringify(JSONcontent, null, 1);
                        fs_1.default.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
                            if (err) {
                                console.error(chalk_1.default.redBright("Something went wrong, try again"));
                                return 0;
                            }
                            else {
                                console.log(chalk_1.default.greenBright(`Note ${argv.title} was modified`));
                                return 1;
                            }
                        });
                    }
                    else {
                        return console.error(chalk_1.default.redBright(`There is not any note with this title`));
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
                if (typeof argv.user === 'string' && typeof argv.title === 'string') {
                    if (fs_1.default.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
                        fs_1.default.rm(`./Notes/${argv.user}/${argv.title}.json`, { recursive: true }, (err) => {
                            if (err) {
                                console.error(chalk_1.default.redBright("Something went wrong, try again"));
                                return 0;
                            }
                            else {
                                console.log(chalk_1.default.greenBright(`Note ${argv.title} was delete`));
                                return 1;
                            }
                        });
                    }
                    else {
                        return console.error(chalk_1.default.redBright(`Unknown File`));
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
                if (typeof argv.user === 'string') {
                    if (fs_1.default.readdirSync(`./Notes/${argv.user}`)) {
                        fs_1.default.readdirSync(`./Notes/${argv.user}`).forEach((userNote) => {
                            const NoteContent = fs_1.default.readFileSync(`./Notes/${argv.user}/${userNote}`);
                            const JSONdata = JSON.parse(String(NoteContent));
                            const ListedNote = new NoteClass_1.BasicNote(JSONdata.user, JSONdata.title, JSONdata.content, JSONdata.color);
                            console.log(chalk_1.default.keyword(`${JSONdata.color}`)("prueba"));
                            //console.log(chalk.keyword(`orange`)(`${JSONdata.title}`));
                            return 1;
                        });
                    }
                    else {
                        return console.error(chalk_1.default.redBright(`Unknown User: ${argv.user}, try agains`));
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
                if (typeof argv.user === 'string' && typeof argv.title === 'string') {
                    if (fs_1.default.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
                        const NoteContent = fs_1.default.readFileSync(`./Notes/${argv.user}/${argv.title}.json`);
                        const JSONdata = JSON.parse(NoteContent.toString());
                        const usernote = new NoteClass_1.BasicNote(JSONdata.user, JSONdata.title, JSONdata.content, JSONdata.color);
                        //console.log(chalk[`${JSONdata.color}`](JSONdata.title));
                        //console.log(chalk.keyword(usernote.getColor())(usernote.getContent()))
                        console.log(chalk_1.default.bold.yellow(`${usernote.getTitle()}`));
                        console.log(chalk_1.default.grey(`${usernote.getContent()}`));
                        return console.log(chalk_1.default.greenBright("Note has been readed"));
                    }
                    else {
                        return console.error(chalk_1.default.redBright(`Unknown Note with title: ${argv.title}`));
                    }
                }
            }
        });
    }
}
exports.NoteOperations = NoteOperations;
