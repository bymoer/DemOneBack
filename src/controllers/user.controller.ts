import { Request, Response } from "express"
import { dbHelper } from "../models/index.js"
import { IHotel } from "../types/hotel.type.js";
import { IRoom } from "../types/room.type.js";

const Hotel = dbHelper.hotel;
const Room = dbHelper.room;

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

/**
 * Moderator - Hotel
 */

export const moderatorHotel = (req: Request, res: Response) => {

    // Query DB
    Hotel.find()
    .then((hotel: IHotel) => {
        res.send(
            {
                message: hotel
            }
        )
    })
    .catch((err: Error) => {
        // Do something
    })
    
}

export const userController = {allAccess, userBoard, adminBoard, moderatorBoard, moderatorHotel};