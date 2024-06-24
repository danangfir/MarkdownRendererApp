import { Request, Response } from 'express';

export const getAllGrammars = async (req: Request, res: Response) => {
    res.send('Get all grammars');
};

export const createGrammar = async (req: Request, res: Response) => {
    res.send('Create new grammar');
};

export const getGrammarById = async (req: Request, res: Response) => {
    res.send(`Get grammar by id ${req.params.id}`);
};

export const updateGrammar = async (req: Request, res: Response) => {
    res.send(`Update grammar by id ${req.params.id}`);
};

export const deleteGrammar = async (req: Request, res: Response) => {
    res.send(`Delete grammar by id ${req.params.id}`);
};
