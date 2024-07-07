import markdown from 'markdown-it';

const md = new markdown();

export const renderMarkdown = (text: string): string => {
    return md.render(text);
};

export const saveNote = async (text: string): Promise<string> => {
    const noteId = 'generated-note-id'; 
    return noteId;
};

export const getNote = async (id: string): Promise<any> => {
    const note = { id, text: 'example note text' }; 
    return note;
};
