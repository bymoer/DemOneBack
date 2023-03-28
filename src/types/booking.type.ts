export interface IBooking {
    customerFirstName: string,
    customerMiddleName: string,
    customerLastName: string,
    customerPhone: string,
    roomBooked: string,
    durationStart: Date,
    durationEnd: Date,
    numberOfPeople: string,
    bookingVerified: boolean,
    customerAddress: {
        road: string,
        number: string,
        postalCode: string,
        country: string
    }
}