import { Elysia } from 'elysia';
import registerGrammarRoutes from './routes/grammarRoutes';
import registerNoteRoutes from './routes/noteRoutes';
import { log } from './utils/utils';

log('Initializing Elysia');
const app = new Elysia();
log('Elysia instance created');

log('Registering grammar routes');
registerGrammarRoutes(app);
log('Grammar routes registered');

log('Registering note routes');
registerNoteRoutes(app);
log('Note routes registered');

log('Routes initialized');
export default app;
