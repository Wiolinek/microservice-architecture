import { Request, Response} from "express";

export const getUsers = (req: Request, res: Response) => {
    console.log(req);
    res.send('users');
};

export const getUserById = (req: Request, res: Response) => {
    console.log(req);
    res.send('user 1');
};