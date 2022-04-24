"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
class NoteOperations {
    constructor() { }
    AddNote() {
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
                    let userNote = new NoteClass_1.BasicNote(argv.user, argv.title, argv.content, argv.color);
                    if (!fs_1.default.existsSync(`./Notes/${argv.user}`)) {
                        fs_1.default.mkdir(`./Notes/${argv.user}`, (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    }
                    if (!fs_1.default.existsSync(`./Notes/${argv.user}/${argv.title}`)) {
                        const JSONcontent = {
                            title: argv.title.toString(),
                            content: argv.content.toString()
                        };
                        const JSONdata = JSON.stringify(JSONcontent, null, 1);
                        fs_1.default.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
                            if (err) {
                                console.error("An error have been ocurred. Try again...");
                                throw err;
                            }
                            else {
                                console.log(chalk_1.default.greenBright(`New note from ${argv.user} added!!`));
                            }
                        });
                    }
                    else {
                        console.log(chalk_1.default.bgRed("You have a note with this title, try again with another."));
                    }
                }
                else {
                    console.log("There is some errors declaring the new note. Data must be Strings type");
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
                if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.content === 'string' && typeof argv.color === 'string') {
                    if (fs_1.default.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
                        const JSONcontent = {
                            title: argv.title.toString(),
                            content: argv.content.toString()
                        };
                        const JSONdata = JSON.stringify(JSONcontent, null, 1);
                        fs_1.default.writeFile(`./Notes/${argv.user}/${argv.title}.json`, JSONdata, (err) => {
                            if (err) {
                                console.error("Something went wrong, try again");
                                return err;
                            }
                            else {
                                console.log(chalk_1.default.greenBright(`Note ${argv.title} was modified`));
                            }
                        });
                    }
                    else {
                        return console.error(`There is not any note with this title`);
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
                if (typeof argv.user === 'string' && typeof argv.title === 'string') {
                    console.log("delete method");
                    if (fs_1.default.existsSync(`./Notes/${argv.user}/${argv.title}.json`)) {
                        fs_1.default.rm(`./Notes/${argv.user}/${argv.title}.json`, { recursive: true }, (err) => {
                            if (err) {
                                console.error(err.message);
                                return;
                            }
                            else {
                                console.log(chalk_1.default.greenBright(`Note ${argv.title} was delete`));
                            }
                        });
                    }
                    else {
                        console.error(`Unknown File`);
                        return;
                    }
                }
            }
        });
    }
}
exports.NoteOperations = NoteOperations;
