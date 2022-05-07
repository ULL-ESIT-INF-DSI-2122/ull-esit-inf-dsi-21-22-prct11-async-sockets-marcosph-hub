//export type ChalkColor = ("red" | "green" | "blue" | "yellow");
import chalk from 'chalk';

/**
 * @class BasicNote Represent the data structure of a note.
 */
export class BasicNote {
  /**
   * @param user string with the username
   * @param title string with the title of the note
   * @param content string with the content of the note
   * @param color string wuith the color of the user
   */
  constructor(private user?: string, private title?: string, private content?: string, private color?: string,  ){}
 /**
  * Getter for the username
  * @returns a string with the username
  */
  getUser(){
    return this.user;
  }

 /**
  * Getter for the title
  * @returns a string with the title
  */
  getTitle(){
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
  getColor(){
    return this.color;
  }

  setUser(newUser: string) {
    this.user = newUser
  }
  
  setTitle(newTitle: string) {
    this.title = newTitle
  }

  setContent(newContent: string) {
    this.content = newContent
  }

  setColor(newColor: string) {
    this.color = newColor
  }
  
}