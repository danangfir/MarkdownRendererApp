import { Request, ResponseToolkit } from '@hapi/hapi';
import noteService from '../services/noteServices';

export const saveNote = async (request: Request, h: ResponseToolkit) => {
  const { markdown } = request.payload as { markdown: string };
  const note = await noteService.saveNote(markdown);
  return h.response(note).code(201);
};

export const renderNote = async (request: Request, h: ResponseToolkit) => {
  const { id } = request.params;
  const html = await noteService.renderNoteToHTML(id);
  return h.response(html).code(200);
};
