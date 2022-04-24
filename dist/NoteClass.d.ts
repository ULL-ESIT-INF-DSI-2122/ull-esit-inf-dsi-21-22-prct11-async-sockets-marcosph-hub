export declare class BasicNote {
    private user;
    private title;
    private content;
    private color;
    constructor(user: string, title: string, content: string, color: string);
    getUser(): string;
    getTitle(): string;
    getContent(): string;
    getColor(): string;
}
