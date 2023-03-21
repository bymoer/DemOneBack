import { ObjectId } from "mongodb"

export interface IRoom {
    roomHotelName: String,
    roomNr: String,
    roomBeds: Number,
    roomSize: String,
    roomBookings: [
        {
            type: ObjectId,
            ref: 'Booking'
        }
    ],
    roomTasks: [
        {
            type: ObjectId,
            ref: 'Task'
        }
    ]     
}