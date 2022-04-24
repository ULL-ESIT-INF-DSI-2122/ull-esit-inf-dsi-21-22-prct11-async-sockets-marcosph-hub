"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicNote = void 0;
class BasicNote {
    constructor(user, title, content, color) {
        this.user = user;
        this.title = title;
        this.content = content;
        this.color = color;
    }
    getUser() {
        return this.user;
    }
    getTitle() {
        return this.title;
    }
    getContent() {
        return this.content;
    }
    getColor() {
        return this.color;
    }
}
exports.BasicNote = BasicNote;
