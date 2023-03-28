import authJwt from "../middlewares/authJwt.js";
import { moderatorController } from "../controllers/moderator.controller.js";
import { Router } from "express";
const app = Router();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

/**
 * Hotel routes
 */

app.get('/api/mod/hotel', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorHotel);
app.get('/api/mod/rooms', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorRooms);

/**
 * Booking routes
 */

app.get('/api/mod/bookings', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorBookings);
app.get('/api/mod/bookings/:id', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorBookingsSingle);
app.post('/api/mod/bookings/update', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorBookingsUpdate);
app.post('/api/mod/bookings/create', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorBookingsCreate);
app.post('/api/mod/bookings/delete', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorBookingsDelete);

/**
 * Employee routes
 */

app.get('/api/mod/employees', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorEmployees);
app.get('/api/mod/employees/:id', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorEmployeesSingle);
app.post('/api/mod/employees/update', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorEmployeesUpdate);
app.post('/api/mod/employees/create', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorEmployeesCreate);
app.post('/api/mod/employees/delete', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorEmployeesDelete);

/**
 * Employee routes
 */

app.get('/api/mod/tasks', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorTasks);
app.get('/api/mod/tasks/:id', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorTasksSingle);
app.post('/api/mod/tasks/update', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorTasksUpdate);
app.post('/api/mod/tasks/create', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorTasksCreate);
app.post('/api/mod/tasks/delete', [authJwt.verifyToken, authJwt.isModerator], moderatorController.moderatorTasksDelete);
export default app;