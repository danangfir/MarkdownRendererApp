import { Request, Response } from 'express';
import { renderMarkdown } from '../services/markdownService';
import fs from 'fs/promises';
import path from 'path';

const notesDir = path.resolve('notes');

export const saveNote = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;
    const noteId = Date.now().toString();
    const filePath = path.join(notesDir, `${noteId}.md`);
    
    await fs.writeFile(filePath, text);
    res.send({ noteId });
};

export const getRenderedNote = async (req: Request, res: Response): Promise<void> => {
    const noteId = req.params.noteId;
    if (!noteId) {
        res.status(400).send({ error: 'Note ID is required' });
        return;
    }
    
    const filePath = path.join(notesDir, `${noteId}.md`);
    const markdown = await fs.readFile(filePath, 'utf-8');
    const html = renderMarkdown(markdown);
    res.send({ html });
};
