// backend/src/routes/noteRoutes.ts
import { Elysia } from 'elysia';
import { saveNote, getRenderedNote } from '../controllers/noteController';
import { log } from '../utils/utils';

const registerNoteRoutes = (app: Elysia) => {
    log('Registering /api/notes routes');
    
    app.route('POST', '/api/notes', saveNote);
    app.route('GET', '/api/notes', getRenderedNote);

    log('/api/notes routes registered');
};

export default registerNoteRoutes;
