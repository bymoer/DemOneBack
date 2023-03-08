import mongoose from 'mongoose';
import { BOOKING_MODEL } from './booking.model.js';
mongoose.Promise = global.Promise;

interface IDBHelper {
    mongoose: {},
    booking: {},
    ROLES: string[],
}

// NO, NO, NO - bad solution.......
// export const dbHelper: any = []
export const dbHelper: IDBHelper = {mongoose: mongoose, booking: BOOKING_MODEL, ROLES: ['user', 'admin', 'moderator']};

//dbHelper.mongoose = mongoose;

//dbHelper.booking = BOOKING_MODEL;
/*
dbHelper.employee = require('./employee.model');
dbHelper.hotel = require('./hotel.model');
dbHelper.role = require('./role.model');
dbHelper.room = require('./room.model');
dbHelper.task = require('/task.model');
dbHelper.user = require('./user.model');
*/

//dbHelper.ROLES = ['user', 'admin', 'moderator'];

export let blabla = "Some string";