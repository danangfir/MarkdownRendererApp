import axios from 'axios';

const grammarService = {
  checkGrammar: async (text: string) => {
    // Simulate a grammar check by calling an external API
    const response = await axios.post('https://api.grammar.com/check', { text });
    return response.data;
  }
};

export default grammarService;
