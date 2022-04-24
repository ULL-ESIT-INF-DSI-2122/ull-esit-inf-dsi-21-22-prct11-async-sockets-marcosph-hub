export class BasicNote {
  constructor(private user: string, private title: string, private content: string, private color: string,  ){}
 
  getUser(){
    return this.user;
  }

  getTitle(){
    return this.title;
  }

  getContent() {
    return this.content;
  }

  getColor(){
    return this.color;
  }
  
}