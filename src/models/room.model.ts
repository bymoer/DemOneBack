import mongoose from "mongoose";

export const ROOMS_MODEL = mongoose.model(
    'Room',
    new mongoose.Schema({
        roomHotelName: String,
        roomNr: String,
        roomBeds: Number,
        roomSize: String,
        roomBookings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Booking'
            }
        ],
        roomTasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Task'
            }
        ]     
    })
)