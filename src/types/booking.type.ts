import { ObjectId } from "mongodb";

export interface IBooking {
    customerFirstName: string,
    customerMiddleName: string,
    customerLastName: string,
    customerPhone: string,
    customerAddress: {
        road: string,
        number: string,
        postalCode: string,
        country: string
    },
    roomBooked: {
        type: ObjectId,
        ref: 'Room',
    },
    durationStart: Date,
    durationEnd: Date,
    numberOfPeople: string,
    bookingVerified: string,
}