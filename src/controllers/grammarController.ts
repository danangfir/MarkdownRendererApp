import { Request, ResponseToolkit } from '@hapi/hapi';
import grammarService from '../services/grammarService';

export const checkGrammar = async (request: Request, h: ResponseToolkit) => {
    const { text } = request.payload as { text: string };
    const result = await grammarService.checkGrammar(text);
    return h.response(result).code(200);
};
