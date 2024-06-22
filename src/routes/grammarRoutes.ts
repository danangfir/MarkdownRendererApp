import { ServerRoute } from '@hapi/hapi';
import { checkGrammar } from '../controllers/grammarController';

const grammarRoutes: ServerRoute[] = [
    {
        method: 'POST',
        path: '/grammar/check',
        handler: checkGrammar
    }
];

export default grammarRoutes;
