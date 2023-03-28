import authJwt from "../middlewares/authJwt.js";
import { userController } from "../controllers/user.controller.js";
import { Router } from "express";
const app = Router();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

/**
 * Test routes
 */

app.get('/api/test/all', userController.allAccess);
app.get('/api/test/user', [authJwt.verifyToken], userController.userBoard);
app.get('/api/test/mod', [authJwt.verifyToken, authJwt.isModerator], userController.moderatorBoard);
app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);

// /**
//  * Hotel routes
//  */

// app.get(
//     '/api/mod/hotel',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorHotel
// )

// app.get(
//     '/api/mod/rooms',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorRooms
// )

// /**
//  * Booking routes
//  */

// app.get(
//     '/api/mod/bookings',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorBookings
// )

// app.get(
//     '/api/mod/bookings/:id',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorBookingsSingle
// )

// app.post(
//     '/api/mod/bookings/update',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorBookingsUpdate
// )

// app.post(
//     '/api/mod/bookings/create',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorBookingsCreate
// )

// app.post(
//     '/api/mod/bookings/delete',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorBookingsDelete
// )

// /**
//  * Employee routes
//  */

// app.get(
//     '/api/mod/employees',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorEmployees
// )

// app.get(
//     '/api/mod/employees/:id',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorEmployeesSingle
// )

// app.post(
//     '/api/mod/employees/update',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorEmployeesUpdate
// )

// app.post(
//     '/api/mod/employees/create',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorEmployeesCreate
// )

// app.post(
//     '/api/mod/employees/delete',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorEmployeesDelete
// )

// /**
//  * Employee routes
//  */

// app.get(
//     '/api/mod/tasks',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorTasks
// )

// app.get(
//     '/api/mod/tasks/:id',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorTasksSingle
// )

// app.post(
//     '/api/mod/tasks/update',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorTasksUpdate
// )

// app.post(
//     '/api/mod/tasks/create',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorTasksCreate
// )

// app.post(
//     '/api/mod/tasks/delete',
//     [authJwt.verifyToken, authJwt.isModerator],
//     userController.moderatorTasksDelete
// )

export default app;