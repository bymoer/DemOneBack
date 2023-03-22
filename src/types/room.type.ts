import { ObjectId } from "mongodb"

export interface IRoom {
    roomHotelName: string,
    roomNr: string,
    roomBeds: number,
    roomSize: string,
    roomAvailable: boolean,
    roomBooked: boolean,   
}