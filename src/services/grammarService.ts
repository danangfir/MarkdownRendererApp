import axios from 'axios';

export const checkGrammar = async (text: string): Promise<string> => {
    const response = await axios.post('http://api.grammar.com/check', { text });
    return response.data.correctedText;
}