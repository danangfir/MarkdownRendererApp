import Note from '../models/noteModel';
import markdownIt from 'markdown-it';
import { v4 as uuidv4 } from 'uuid';

const notes: Note[] = [];

const noteService = {
  saveNote: async (markdown: string) => {
    const note = { id: uuidv4(), markdown };
    notes.push(note);
    return note;
  },
  renderNoteToHTML: async (id: string) => {
    const note = notes.find(n => n.id === id);
    if (!note) {
      throw new Error('Note not found');
    }
    const md = new markdownIt();
    return md.render(note.markdown);
  }
};

export default noteService;
