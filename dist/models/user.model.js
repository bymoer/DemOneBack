import mongoose from "mongoose";
export const USER_MODEL = mongoose.model('User', new mongoose.Schema({
  userFirstName: String,
  userMiddleName: String,
  userLastName: String,
  userAddressRoad: String,
  userAddressRoadNumber: String,
  userPhoneNr: String,
  userEmail: String,
  userPassword: String,
  userRole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }
}));