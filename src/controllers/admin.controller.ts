import { Request, Response } from "express";
import { dbHelper } from "../models/index.js";
import { IBooking } from "../types/booking.type.js";
import { IEmployee } from "../types/employee.type.js";
import { IHotel } from "../types/hotel.type.js";
import { IRoom } from "../types/room.type.js";
import { ITask } from "../types/task.type.js";
import { IUser } from "../types/user.type.js";

const Hotel = dbHelper.hotel;
const Room = dbHelper.room;
const Booking = dbHelper.booking;
const Employee = dbHelper.employee;
const Task = dbHelper.task;
const User = dbHelper.user;

/**
 * Admin - Hotel
 */

export const adminHotels = async(req: Request, res: Response) => {

    await Hotel.find()
    .then((hotel: IHotel) => {
        res.send(
            {
                message: hotel
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminHotelsSingle = async(req: Request, res: Response) => {

    await Hotel.findOne(
        {
            _id: req.params.id
        }
    )
    .then((hotel: IHotel) => {

        res.status(200).send(
            {
                message: hotel
            }
        )

    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })


}

export const adminHotelsCreate = async(req: Request, res: Response) => {
    
    //Edit this !!
    const newHotel = new Hotel({
        hotelName: req.body.hotelname,
        hotelRoad: req.body.hotelroad,
        hotelRoadNr: req.body.hotelroadnr,
        hotelCity: req.body.hotelcity,
        hotelPostCode: req.body.hotelpostcode,
        hotelCountry: req.body.hotelcountry
    })

    await newHotel.save()
    .then(() => {
        res.status(200).send(
            {
                message: 'A-ok ! New Hotel Created !'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminHotelsUpdate = async(req: Request, res: Response) => {

    await Hotel.findOneAndUpdate(
        {
            _id: req.body.id
        },
        {
            hotelName: req.body.hotelname,
            hotelRoad: req.body.hotelroad,
            hotelRoadNr: req.body.hotelroadnr,
            hotelCity: req.body.hotelcity,
            hotelPostCode: req.body.hotelpostcode,
            hotelCountry: req.body.hotelcountry
        }
    )
    .then(() => {
        res.status(200).send(
            {
                message: req.body
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminHotelsDelete = async(req: Request, res: Response) => {

    await Hotel.deleteOne({_id: req.body.id})
    .then(() => {
        res.status(200).send(
            {
                message: 'Hotel Deleted for good!'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

/**
 * Admin - Room
 */

export const adminRooms = async(req: Request, res: Response) => {

    await Room.find()
    .then((room: IRoom) => {
        res.send(
            {
                message: room
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminRoomsSingle = async(req: Request, res: Response) => {

    await Room.findOne(
        {
            _id: req.params.id
        }
    )
    .then((room: IRoom) => {

        res.status(200).send(
            {
                message: room
            }
        )

    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })


}

export const adminRoomsCreate = async(req: Request, res: Response) => {

    const newRoom = new Room({
        roomHotelName: req.body.hotelname,
        roomNr: req.body.roomnr,
        roomBeds: req.body.roombeds,
        roomSize: req.body.roomsize,
        roomAvailable: req.body.roomavailable,
        roomBooked: req.body.roombooked,
    })

    await newRoom.save()
    .then(() => {
        res.status(200).send(
            {
                message: 'A-ok ! New Room Created !'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminRoomsUpdate = async(req: Request, res: Response) => {

    await Room.findOneAndUpdate(
        {
            _id: req.body.id
        },
        {
            roomHotelName: req.body.hotelname,
            roomNr: req.body.roomnr,
            roomBeds: req.body.roombeds,
            roomSize: req.body.roomsize,
            roomAvailable: req.body.roomavailable,
            roomBooked: req.body.roombooked,
        }
    )
    .then(() => {
        res.status(200).send(
            {
                message: req.body
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminRoomsDelete = async(req: Request, res: Response) => {

    await Room.deleteOne({_id: req.body.id})
    .then(() => {
        res.status(200).send(
            {
                message: 'Room Deleted for good!'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

/**
 * Admin - Employee
 */

export const adminEmployees = async(req: Request, res: Response) => {

    await Employee.find()
    .then((employee: IEmployee) => {
        res.send(
            {
                message: employee
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminEmployeesSingle = async(req: Request, res: Response) => {

    await Employee.findOne(
        {
            _id: req.params.id
        }
    )
    .then((employee: IEmployee) => {

        res.status(200).send(
            {
                message: employee
            }
        )

    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })


}

export const adminEmployeesCreate = async(req: Request, res: Response) => {

    const newEmployee = new Employee({
        employeeName: req.body.name,
        employeeRoad: req.body.road,
        employeeRoadNr: req.body.roadnr,
        employeeCity: req.body.city,
        employeePostCode: req.body.postcode,
        employeeCountry: req.body.country,
        employeeAssignedWorkplace: req.body.assignedworkplace,
        employeeTitle: req.body.title,
        employeeRole: req.body.role,
        employeeWeekHours: req.body.weekhours,
    })

    await newEmployee.save()
    .then(() => {
        res.status(200).send(
            {
                message: 'A-ok ! New Employee Created !'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminEmployeesUpdate = async(req: Request, res: Response) => {

    await Employee.findOneAndUpdate(
        {
            _id: req.body.id
        },
        {
            employeeName: req.body.name,
            employeeRoad: req.body.road,
            employeeRoadNr: req.body.roadnr,
            employeeCity: req.body.city,
            employeePostCode: req.body.postcode,
            employeeCountry: req.body.country,
            employeeAssignedWorkplace: req.body.assignedworkplace,
            employeeTitle: req.body.title,
            employeeRole: req.body.role,
            employeeWeekHours: req.body.weekhours,
        }
    )
    .then(() => {
        res.status(200).send(
            {
                message: req.body
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminEmployeesDelete = async(req: Request, res: Response) => {

    await Employee.deleteOne({_id: req.body.id})
    .then(() => {
        res.status(200).send(
            {
                message: 'Employee Deleted for good!'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

/**
 * Admin - Task
 */

export const adminTasks = async(req: Request, res: Response) => {

    await Task.find()
    .then((task: ITask) => {
        res.send(
            {
                message: task
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminTasksSingle = async(req: Request, res: Response) => {

    await Task.findOne(
        {
            _id: req.params.id
        }
    )
    .then((task: ITask) => {

        res.status(200).send(
            {
                message: task
            }
        )

    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })


}

export const adminTasksCreate = async(req: Request, res: Response) => {

    const newTask = new Task({
        taskAssignedEmployee: req.body.employee,
        taskLocation: req.body.location,
        taskCategory: req.body.category,
        taskDescription: req.body.description,
        taskStart: req.body.datestart,
        taskEnd: req.body.dateend,
    })

    await newTask.save()
    .then(() => {
        res.status(200).send(
            {
                message: 'A-ok ! New Task Created !'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminTasksUpdate = async(req: Request, res: Response) => {

    await Task.findOneAndUpdate(
        {
            _id: req.body.id
        },
        {
            taskAssignedEmployee: req.body.employee,
            taskLocation: req.body.location,
            taskCategory: req.body.category,
            taskDescription: req.body.description,
            taskStart: req.body.datestart,
            taskEnd: req.body.dateend,
        }
    )
    .then(() => {
        res.status(200).send(
            {
                message: req.body
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminTasksDelete = async(req: Request, res: Response) => {

    await Employee.deleteOne({_id: req.body.id})
    .then(() => {
        res.status(200).send(
            {
                message: 'Task Deleted for good!'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

/**
 * Admin - Bookings
 */

export const adminBookings = async(req: Request, res: Response) => {

    await Booking.find()
    .then((booking: IBooking) => {
        res.send(
            {
                message: booking
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminBookingsSingle = async(req: Request, res: Response) => {

    await Booking.findOne(
        {
            _id: req.params.id
        }
    )
    .then((booking: IBooking) => {

        res.status(200).send(
            {
                message: booking
            }
        )

    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })


}

export const adminBookingsCreate = async(req: Request, res: Response) => {

    const newBooking = new Booking({
        customerFirstName: req.body.firstName,
        customerMiddleName: req.body.middleName,
        customerLastName: req.body.lastName,
        customerPhone: req.body.Phone,
        roomBooked: req.body.roomBooked,
        durationStart: req.body.durationStart,
        durationEnd: req.body.durationEnd,
        numberOfPeople: req.body.numberOfPeople,
        bookingVerified: req.body.bookingVerified,
        customerAddress: {
            road: req.body.customerAddress.road,
            number: req.body.customerAddress.number,
            postalCode: req.body.customerAddress.postalCode,
            country: req.body.customerAddress.country
        }
    })

    await newBooking.save()
    .then(() => {
        res.status(200).send(
            {
                message: 'A-ok ! New Booking Created !'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminBookingsUpdate = async(req: Request, res: Response) => {

    await Booking.findOneAndUpdate(
        {
            _id: req.body.id
        },
        {
            customerFirstName: req.body.firstName,
            customerMiddleName: req.body.middleName,
            customerLastName: req.body.lastName,
            customerPhone: req.body.Phone,
            roomBooked: req.body.roomBooked,
            durationStart: req.body.durationStart,
            durationEnd: req.body.durationEnd,
            numberOfPeople: req.body.numberOfPeople,
            bookingVerified: req.body.bookingVerified,
            customerAddress: {
                road: req.body.customerAddress.road,
                number: req.body.customerAddress.number,
                postalCode: req.body.customerAddress.postalCode,
                country: req.body.customerAddress.country
            }
        }
    )
    .then(() => {
        res.status(200).send(
            {
                message: req.body
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminBookingsDelete = async(req: Request, res: Response) => {

    await Booking.deleteOne({_id: req.body.id})
    .then(() => {
        res.status(200).send(
            {
                message: 'Booking Deleted for good!'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

/**
 * Admin - Users
 */

export const adminUsers = async(req: Request, res: Response) => {

    await User.find()
    .then((user: IUser) => {
        res.send(
            {
                message: user
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminUsersSingle = async(req: Request, res: Response) => {

    await User.findOne(
        {
            _id: req.params.id
        }
    )
    .then((user: IUser) => {

        res.status(200).send(
            {
                message: user
            }
        )

    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })


}

export const adminUsersCreate = async(req: Request, res: Response) => {

    // Hash password on frontend & decrypt on backend !

    const newUser = new User({
        userFirstName: req.body.userfirstname,
        userMiddleName: req.body.usermiddlename,
        userLastName: req.body.userlastname,
        userAddressRoad: req.body.addressroad,
        userAddressRoadNumber: req.body.addressroadnr,
        userPhoneNr: req.body.phonenr,
        userUserName: req.body.username,
        userEmail: req.body.email,
        userPassword: req.body.password,
        userRole: []
    })

    await newUser.save()
    .then(() => {
        res.status(200).send(
            {
                message: 'A-ok ! New User Created !'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminUsersUpdate = async(req: Request, res: Response) => {

    await User.findOneAndUpdate(
        {
            _id: req.body.id
        },
        {
            userFirstName: req.body.userfirstname,
            userMiddleName: req.body.usermiddlename,
            userLastName: req.body.userlastname,
            userAddressRoad: req.body.addressroad,
            userAddressRoadNumber: req.body.addressroadnr,
            userPhoneNr: req.body.phonenr,
            userUserName: req.body.username,
            userEmail: req.body.email,
            userPassword: req.body.password,
            userRole: []
        }
    )
    .then(() => {
        res.status(200).send(
            {
                message: req.body
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminUsersDelete = async(req: Request, res: Response) => {

    await User.deleteOne({_id: req.body.id})
    .then(() => {
        res.status(200).send(
            {
                message: 'User Deleted for good!'
            }
        )
    })
    .catch((err: Error) => {
        res.status(500).send(
            {
                message: err
            }
        )
    })

}

export const adminController = {
    adminHotels,
    adminHotelsCreate,
    adminHotelsDelete,
    adminHotelsSingle,
    adminHotelsUpdate, 
    adminRooms,
    adminRoomsCreate,
    adminRoomsDelete,
    adminRoomsSingle,
    adminRoomsUpdate, 
    adminBookings, 
    adminBookingsSingle,
    adminBookingsUpdate,
    adminBookingsCreate,
    adminBookingsDelete,
    adminEmployees,
    adminEmployeesSingle,
    adminEmployeesUpdate,
    adminEmployeesCreate,
    adminEmployeesDelete,
    adminTasks,
    adminTasksSingle,
    adminTasksUpdate,
    adminTasksCreate,
    adminTasksDelete,
    adminUsers,
    adminUsersSingle,
    adminUsersUpdate,
    adminUsersCreate,
    adminUsersDelete
};

