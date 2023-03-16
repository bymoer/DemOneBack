import { ObjectId } from "mongodb"

export interface IUser {
    [x: string]: any
    userId: string,
    userFirstName: string,
    userMiddleName: string,
    userLastName: string,
    userAddressRoad: string,
    userAddressRoadNumber: string,
    userPhoneNr: string,
    userUserName: string,
    userEmail: string,
    userPassword: string,
    userRole: Array<IUserRole>
}

export interface IUserRole {
    [x: string]: any
    type: ObjectId,
    ref: 'Role'
}