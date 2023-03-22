import mongoose from 'mongoose';
import { HOTEL_MODEL } from './hotel.model.js';
import { TASK_MODEL } from './task.model.js';
import { EMPLOYEE_MODEL } from './employee.model.js';
import { ROOM_MODEL } from './room.model.js';
import { BOOKING_MODEL } from './booking.model.js';
import { ROLE_MODEL } from './role.model.js';
import { USER_MODEL } from './user.model.js';
mongoose.Promise = global.Promise;

// NO, NO, NO - bad solution.......
export const dbHelper = {};
dbHelper.mongoose = mongoose;
dbHelper.hotel = HOTEL_MODEL;
dbHelper.task = TASK_MODEL;
dbHelper.employee = EMPLOYEE_MODEL;
dbHelper.room = ROOM_MODEL;
dbHelper.booking = BOOKING_MODEL;
dbHelper.role = ROLE_MODEL;
dbHelper.user = USER_MODEL;
dbHelper.ROLES = ['user', 'admin', 'moderator'];