import mongoose, { model, Schema } from "mongoose";

export const HOTEL_MODEL = mongoose.model(
    'Hotels',
    new mongoose.Schema({
        hotelName: String,
        hotelRoad: String,
        hotelRoadNr: String,
        hotelCity: String,
        hotelPostCode: String,
        hotelCountry: String,
        hotelEmployees: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Employee'
            }
        ],
        hotelRooms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Room'
            }
        ],
        hotelTasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Task'
            }
        ],
        hotelBookings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Booking'
            }
        ]
    })
)