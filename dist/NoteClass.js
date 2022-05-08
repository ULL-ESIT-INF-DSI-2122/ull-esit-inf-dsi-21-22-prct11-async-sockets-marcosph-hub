"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicNote = void 0;
//export type ChalkColor = "red" | "green" | "blue" | "yellow";
/**
 * @class BasicNote Represent the data structure of a note.
 */
class BasicNote {
    /**
     * @param user string with the username
     * @param title string with the title of the note
     * @param content string with the content of the note
     * @param color string wuith the color of the user
     */
    constructor(user, title, content, color) {
        this.user = user;
        this.title = title;
        this.content = content;
        this.color = color;
    }
    /**
     * Getter for the username
     * @returns a string with the username
     */
    getUser() {
        return this.user;
    }
    /**
     * Getter for the title
     * @returns a string with the title
     */
    getTitle() {
        return this.title;
    }
    /**
     * Getter for the content
     * @returns a string with the contetn
     */
    getContent() {
        return this.content;
    }
    /**
     * Getter for the color
     * @returns a string with the color
     */
    getColor() {
        return this.color;
    }
    setUser(newUser) {
        this.user = newUser;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setContent(newContent) {
        this.content = newContent;
    }
    setColor(newColor) {
        this.color = newColor;
    }
}
exports.BasicNote = BasicNote;
