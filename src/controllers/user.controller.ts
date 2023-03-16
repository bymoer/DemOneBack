import { Request, Response } from "express"

export const allAccess = (req: Request, res: Response) => {
    res.status(200).send('Public content!')
}

export const userBoard = (req: Request, res: Response) => {
    res.status(200).send('User content!')
}

export const adminBoard = (req: Request, res: Response) => {
    res.status(200).send('Admin content!')
}

export const moderatorBoard = (req: Request, res: Response) => {
    res.status(200).send('Moderator content!')
}

export const userController = {allAccess, userBoard, adminBoard, moderatorBoard};