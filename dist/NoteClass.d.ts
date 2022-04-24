/**
 * @class BasicNote Represent the data structure of a note.
 */
export declare class BasicNote {
    private user;
    private title;
    private content;
    private color;
    /**
     *
     * @param user string with the username
     * @param title string with the title of the note
     * @param content string with the content of the note
     * @param color string wuith the color of the user
     */
    constructor(user: string, title: string, content: string, color: string);
    /**
     * Getter for the username
     * @returns a string with the username
     */
    getUser(): string;
    /**
     * Getter for the title
     * @returns a string with the title
     */
    getTitle(): string;
    /**
     * Getter for the content
     * @returns a string with the contetn
     */
    getContent(): string;
    /**
     * Getter for the color
     * @returns a string with the color
     */
    getColor(): string;
}
