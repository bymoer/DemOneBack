import mongoose from 'mongoose';
import { BOOKING_MODEL } from './booking.model.js';
import { ROLE_MODEL } from './role.model.js';
import { USER_MODEL } from './user.model.js';
mongoose.Promise = global.Promise;

// NO, NO, NO - bad solution.......
export const dbHelper = {};
dbHelper.mongoose = mongoose;
dbHelper.booking = BOOKING_MODEL;
dbHelper.role = ROLE_MODEL;
dbHelper.user = USER_MODEL;
/*
dbHelper.employee = require('./employee.model');
dbHelper.hotel = require('./hotel.model');
dbHelper.room = require('./room.model');
dbHelper.task = require('/task.model');
*/

dbHelper.ROLES = ['user', 'admin', 'moderator'];