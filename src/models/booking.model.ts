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
        roomBooked: String,
        durationStart: Date,
        durationEnd: Date,
        numberOfPeople: String,
        bookingVerified: String,
    })
)
