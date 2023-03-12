import mongoose from "mongoose"

export const BOOKING_MODEL = mongoose.model(
    'Booking',
    new mongoose.Schema({
        customerFirstName: String,
        customerMiddleName: String,
        customerLastName: String,
        customerPhone: String,
        customerAddress: {
            road: String,
            number: String,
            postalCode: String,
            country: String
        },
        roomBooked: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
        },
        durationStart: Date,
        durationEnd: Date,
        numberOfPeople: String,
        bookingApproved: String,
    })
)
