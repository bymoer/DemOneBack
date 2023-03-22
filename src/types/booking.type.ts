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
    roomBooked: string,
    durationStart: Date,
    durationEnd: Date,
    numberOfPeople: string,
    bookingVerified: string,
}