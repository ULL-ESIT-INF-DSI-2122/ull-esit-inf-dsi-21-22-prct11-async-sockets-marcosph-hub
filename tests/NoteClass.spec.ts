import 'mocha';
import {expect} from 'chai';
import {BasicNote} from '../src/NoteClass'
 
describe('Test for Class BasicNote',() => {
  const note = new BasicNote("User","Title","Content","Color");
  it('Testing Operavility of the Class', () => {
    expect(note instanceof BasicNote).to.be.eq (true);
  });
  it('Method getUser()',() => {
    expect(note.getUser()).to.be.eq("User");
  });
  it('Method getTitle()',() => {
    expect(note.getTitle()).to.be.eq("Title");
  });
  it('Method getContent()',() => {
    expect(note.getContent()).to.be.eq("Content");
  });
  it('Method getColor()',() => {
    expect(note.getColor()).to.be.eq("Color");
  });
  
});