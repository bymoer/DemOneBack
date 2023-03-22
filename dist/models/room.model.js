import mongoose from "mongoose";
export const ROOM_MODEL = mongoose.model('Room', new mongoose.Schema({
  roomHotelName: String,
  roomNr: String,
  roomBeds: Number,
  roomSize: String,
  roomAvailable: Boolean,
  roomBooked: Boolean
}));