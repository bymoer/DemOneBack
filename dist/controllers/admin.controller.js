import { dbHelper } from "../models/index.js";
const Hotel = dbHelper.hotel;
const Room = dbHelper.room;
const Booking = dbHelper.booking;
const Employee = dbHelper.employee;
const Task = dbHelper.task;
const User = dbHelper.user;

/**
 * Admin - Hotel
 */

export const adminHotels = async (req, res) => {
  await Hotel.find().then(hotel => {
    res.send({
      message: hotel
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminHotelsSingle = async (req, res) => {
  await Hotel.findOne({
    _id: req.params.id
  }).then(hotel => {
    res.status(200).send({
      message: hotel
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminHotelsCreate = async (req, res) => {
  //Edit this !!
  const newHotel = new Hotel({
    hotelName: req.body.hotelname,
    hotelRoad: req.body.hotelroad,
    hotelRoadNr: req.body.hotelroadnr,
    hotelCity: req.body.hotelcity,
    hotelPostCode: req.body.hotelpostcode,
    hotelCountry: req.body.hotelcountry
  });
  await newHotel.save().then(() => {
    res.status(200).send({
      message: 'A-ok ! New Hotel Created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminHotelsUpdate = async (req, res) => {
  await Hotel.findOneAndUpdate({
    _id: req.body.id
  }, {
    hotelName: req.body.hotelname,
    hotelRoad: req.body.hotelroad,
    hotelRoadNr: req.body.hotelroadnr,
    hotelCity: req.body.hotelcity,
    hotelPostCode: req.body.hotelpostcode,
    hotelCountry: req.body.hotelcountry
  }).then(() => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminHotelsDelete = async (req, res) => {
  await Hotel.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Hotel Deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};

/**
 * Admin - Room
 */

export const adminRooms = async (req, res) => {
  await Room.find().then(room => {
    res.send({
      message: room
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminRoomsSingle = async (req, res) => {
  await Room.findOne({
    _id: req.params.id
  }).then(room => {
    res.status(200).send({
      message: room
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminRoomsCreate = async (req, res) => {
  const newRoom = new Room({
    roomHotelName: req.body.hotelname,
    roomNr: req.body.roomnr,
    roomBeds: req.body.roombeds,
    roomSize: req.body.roomsize,
    roomAvailable: req.body.roomavailable,
    roomBooked: req.body.roombooked
  });
  await newRoom.save().then(() => {
    res.status(200).send({
      message: 'A-ok ! New Room Created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminRoomsUpdate = async (req, res) => {
  await Room.findOneAndUpdate({
    _id: req.body.id
  }, {
    roomHotelName: req.body.hotelname,
    roomNr: req.body.roomnr,
    roomBeds: req.body.roombeds,
    roomSize: req.body.roomsize,
    roomAvailable: req.body.roomavailable,
    roomBooked: req.body.roombooked
  }).then(() => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminRoomsDelete = async (req, res) => {
  await Room.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Room Deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};

/**
 * Admin - Employee
 */

export const adminEmployees = async (req, res) => {
  await Employee.find().then(employee => {
    res.send({
      message: employee
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminEmployeesSingle = async (req, res) => {
  await Employee.findOne({
    _id: req.params.id
  }).then(employee => {
    res.status(200).send({
      message: employee
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminEmployeesCreate = async (req, res) => {
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
    employeeWeekHours: req.body.weekhours
  });
  await newEmployee.save().then(() => {
    res.status(200).send({
      message: 'A-ok ! New Employee Created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminEmployeesUpdate = async (req, res) => {
  await Employee.findOneAndUpdate({
    _id: req.body.id
  }, {
    employeeName: req.body.name,
    employeeRoad: req.body.road,
    employeeRoadNr: req.body.roadnr,
    employeeCity: req.body.city,
    employeePostCode: req.body.postcode,
    employeeCountry: req.body.country,
    employeeAssignedWorkplace: req.body.assignedworkplace,
    employeeTitle: req.body.title,
    employeeRole: req.body.role,
    employeeWeekHours: req.body.weekhours
  }).then(() => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminEmployeesDelete = async (req, res) => {
  await Employee.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Employee Deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};

/**
 * Admin - Task
 */

export const adminTasks = async (req, res) => {
  await Task.find().then(task => {
    res.send({
      message: task
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminTasksSingle = async (req, res) => {
  await Task.findOne({
    _id: req.params.id
  }).then(task => {
    res.status(200).send({
      message: task
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminTasksCreate = async (req, res) => {
  const newTask = new Task({
    taskAssignedEmployee: req.body.employee,
    taskLocation: req.body.location,
    taskCategory: req.body.category,
    taskDescription: req.body.description,
    taskStart: req.body.datestart,
    taskEnd: req.body.dateend
  });
  await newTask.save().then(() => {
    res.status(200).send({
      message: 'A-ok ! New Task Created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminTasksUpdate = async (req, res) => {
  await Task.findOneAndUpdate({
    _id: req.body.id
  }, {
    taskAssignedEmployee: req.body.employee,
    taskLocation: req.body.location,
    taskCategory: req.body.category,
    taskDescription: req.body.description,
    taskStart: req.body.datestart,
    taskEnd: req.body.dateend
  }).then(() => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminTasksDelete = async (req, res) => {
  await Employee.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Task Deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};

/**
 * Admin - Bookings
 */

export const adminBookings = async (req, res) => {
  await Booking.find().then(booking => {
    res.send({
      message: booking
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminBookingsSingle = async (req, res) => {
  await Booking.findOne({
    _id: req.params.id
  }).then(booking => {
    res.status(200).send({
      message: booking
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminBookingsCreate = async (req, res) => {
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
  });
  await newBooking.save().then(() => {
    res.status(200).send({
      message: 'A-ok ! New Booking Created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminBookingsUpdate = async (req, res) => {
  await Booking.findOneAndUpdate({
    _id: req.body.id
  }, {
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
  }).then(() => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminBookingsDelete = async (req, res) => {
  await Booking.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Booking Deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};

/**
 * Admin - Users
 */

export const adminUsers = async (req, res) => {
  await User.find().then(user => {
    res.send({
      message: user
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminUsersSingle = async (req, res) => {
  await User.findOne({
    _id: req.params.id
  }).then(user => {
    res.status(200).send({
      message: user
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminUsersCreate = async (req, res) => {
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
  });
  await newUser.save().then(() => {
    res.status(200).send({
      message: 'A-ok ! New User Created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminUsersUpdate = async (req, res) => {
  await User.findOneAndUpdate({
    _id: req.body.id
  }, {
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
  }).then(() => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const adminUsersDelete = async (req, res) => {
  await User.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'User Deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
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