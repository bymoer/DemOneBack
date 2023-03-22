import mongoose from "mongoose";

export const HOTEL_MODEL = mongoose.model(
    'Hotels',
    new mongoose.Schema({
        hotelName: String,
        hotelRoad: String,
        hotelRoadNr: String,
        hotelCity: String,
        hotelPostCode: String,
        hotelCountry: String,
    })
)