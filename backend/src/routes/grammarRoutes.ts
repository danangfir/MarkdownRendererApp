import { Elysia } from 'elysia';
import { getAllGrammars, createGrammar, getGrammarById, updateGrammar, deleteGrammar } from '../controllers/grammarController';
import { log } from '../utils/utils';

const registerGrammarRoutes = (app: Elysia) => {
    log('Registering /api/grammar routes');
    
    app.route('GET', '/api/grammar', getAllGrammars);
    app.route('POST', '/api/grammar', createGrammar);
    app.route('GET', '/api/grammar/:id', getGrammarById);
    app.route('PUT', '/api/grammar/:id', updateGrammar);
    app.route('DELETE', '/api/grammar/:id', deleteGrammar);

    log('/api/grammar routes registered');
};

export default registerGrammarRoutes;
