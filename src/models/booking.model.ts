import mongoose from "mongoose"

export const BOOKING_MODEL = mongoose.model(
    'Booking',
    new mongoose.Schema({
        customerFirstName: String,
        customerMiddleName: String,
        customerLastName: String,
        customerPhone: String,
        customerEmail: String,
        roomBooked: String,
        durationStart: Date,
        durationEnd: Date,
        numberOfPeople: String,
        bookingVerified: Boolean,
        customerAddress: {
            road: String,
            number: String,
            postalCode: String,
            country: String
        }
    })
)
