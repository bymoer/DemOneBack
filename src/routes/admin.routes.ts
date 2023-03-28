import authJwt from "../middlewares/authJwt.js";
import { adminController } from "../controllers/admin.controller.js";
import { Router, Request, Response, NextFunction } from "express";

const app = Router();

app.use( (req: Request, res: Response, next: NextFunction) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, Accept'
    );
    next();
})

/**
 * Hotel routes
 */

app.get(
    '/api/admin/hotels',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminHotels
)

app.get(
    '/api/admin/hotels/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminHotelsSingle
)

app.post(
    '/api/admin/hotels/create',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminHotelsSingle
)

app.post(
    '/api/admin/hotels/update',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminHotelsUpdate
)

app.post(
    '/api/admin/hotels/delete',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminHotelsDelete
)

/**
 * Rooms routes
 */

app.get(
    '/api/admin/rooms',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminRooms
)

app.get(
    '/api/admin/rooms/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminRoomsSingle
)

app.post(
    '/api/admin/rooms/create',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminRoomsCreate
)

app.post(
    '/api/admin/rooms/update',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminRoomsUpdate
)

app.post(
    '/api/admin/rooms/delete',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminRoomsDelete
)

/**
 * Employee routes
 */

app.get(
    '/api/admin/employees',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminEmployees
)

app.get(
    '/api/admin/employees/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminEmployeesSingle
)

app.post(
    '/api/admin/employees/create',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminEmployeesCreate
)

app.post(
    '/api/admin/employees/update',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminEmployeesUpdate
)

app.post(
    '/api/admin/employees/delete',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminEmployeesDelete
)

/**
 * Task routes
 */

app.get(
    '/api/admin/tasks',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminTasks
)

app.get(
    '/api/admin/tasks/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminTasksSingle
)

app.post(
    '/api/admin/tasks/create',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminTasksCreate
)

app.post(
    '/api/admin/tasks/update',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminTasksUpdate
)

app.post(
    '/api/admin/tasks/delete',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminTasksDelete
)

/**
 * Booking routes
 */

app.get(
    '/api/admin/bookings',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminBookings
)

app.get(
    '/api/admin/bookings/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminBookingsSingle
)

app.post(
    '/api/admin/bookings/create',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminBookingsCreate
)

app.post(
    '/api/admin/bookings/update',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminBookingsUpdate
)

app.post(
    '/api/admin/bookings/delete/',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminBookingsDelete
)

/**
 * User routes
 */

app.get(
    '/api/admin/users',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminUsers
)

app.get(
    '/api/admin/users/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminUsersSingle
)

app.post(
    '/api/admin/users/create',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminUsersCreate
)

app.post(
    '/api/admin/users/update',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminUsersUpdate
)

app.post(
    '/api/admin/users/delete',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminController.adminUsersDelete
)

export default app;
