import { ObjectId } from "mongodb";

export interface IHotel {
    hotelName: String,
    hotelRoad: String,
    hotelRoadNr: String,
    hotelCity: String,
    hotelPostCode: String,
    hotelCountry: String,
    hotelEmployees: [
        {
            type: ObjectId,
            ref: 'Employee'
        }
    ],
    hotelRooms: [
        {
            type: ObjectId,
            ref: 'Room'
        }
    ],
    hotelTasks: [
        {
            type: ObjectId,
            ref: 'Task'
        }
    ],
    hotelBookings: [
        {
            type: ObjectId,
            ref: 'Booking'
        }
    ]
}