import { ObjectId } from "mongodb";

export interface IHotel {
    hotelName: string,
    hotelRoad: string,
    hotelRoadNr: string,
    hotelCity: string,
    hotelPostCode: string,
    hotelCountry: string,
}