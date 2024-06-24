import { Elysia } from 'elysia';
import { saveNote, getRenderedNote } from '../controllers/noteController';
import { log } from '../utils/utils';

const registerNoteRoutes = (app: Elysia) => {
    log('Registering /api/notes routes');
    
    app.route('POST', '/save-note', saveNote);
    app.route('GET', '/get-note/:id', getRenderedNote);

    log('/api/notes routes registered');
};

export default registerNoteRoutes;
