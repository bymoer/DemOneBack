import { dbHelper } from "../models/index.js";
const Hotel = dbHelper.hotel;
const Room = dbHelper.room;
const Booking = dbHelper.booking;
const Employee = dbHelper.employee;
const Task = dbHelper.task;

/**
 * Moderator - Hotel
 */

export const moderatorHotel = async (req, res) => {
  // !! Insert conditional in order to prevent empty requests

  await Hotel.find().then(hotel => {
    // !! Redo and send JSON instead
    res.send({
      message: hotel
    });
  }).catch(err => {
    // Do something
  });
};
export const moderatorRooms = async (req, res) => {
  // !! Insert conditional in order to prevent empty requests

  await Room.find().then(room => {
    // !! Redo and send JSON instead
    res.send({
      message: room
    });
  }).catch(err => {
    // Do something
  });
};

/**
 * Moderator - Bookings
 */

export const moderatorBookings = async (req, res) => {
  // !! Insert conditional in order to prevent empty requests

  await Booking.find().then(booking => {
    // !! Redo and send JSON instead
    res.send({
      message: booking
    });
  }).catch(err => {
    // Do something
  });
};
export const moderatorBookingsSingle = async (req, res) => {
  // !! Insert conditional in order to prevent empty requests

  await Booking.findOne({
    _id: req.params.id
  }).then(bookingSingle => {
    // !! Redo and send JSON instead
    res.send({
      message: bookingSingle
    });
  }).catch(err => {
    // Do something
  });
};
export const moderatorBookingsUpdate = async (req, res) => {
  // !! Insert conditional in order to prevent empty requests

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
    res.status(400).send({
      message: err
    });
  });
};
export const moderatorBookingsCreate = async (req, res) => {
  // !! Insert conditional in order to prevent empty requests

  console.log(req.body);
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
      message: 'A-ok! New booking created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const moderatorBookingsDelete = async (req, res) => {
  // !! Insert conditional in order to prevent empty requests

  console.log(req.body);
  await Booking.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Booking Deleted for good!'
    });
  }).catch(err => {
    res.status(400).send({
      message: err
    });
  });
};

/**
 * Moderator - Employess
 */

export const moderatorEmployees = async (req, res) => {
  await Employee.find().then(employees => res.status(200).send({
    message: employees
  })).catch(err => {

    // Do something
  });
};
export const moderatorEmployeesSingle = async (req, res) => {
  console.log(req.params.id);
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
export const moderatorEmployeesUpdate = async (req, res) => {
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
  }).then(employee => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const moderatorEmployeesCreate = async (req, res) => {
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
      message: 'A-ok! New employee created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const moderatorEmployeesDelete = async (req, res) => {
  await Employee.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Employee deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};

/**
 * Moderator - Tasks
 */

export const moderatorTasks = async (req, res) => {
  await Task.find().then(tasks => res.status(200).send({
    message: tasks
  })).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const moderatorTasksSingle = async (req, res) => {
  console.log(req.params.id);
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
export const moderatorTasksUpdate = async (req, res) => {
  await Task.findOneAndUpdate({
    _id: req.body.id
  }, {
    taskAssignedEmployee: req.body.employee,
    taskLocation: req.body.location,
    taskCategory: req.body.category,
    taskDescription: req.body.description,
    taskStart: req.body.datestart,
    taskEnd: req.body.dateend
  }).then(task => {
    res.status(200).send({
      message: req.body
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const moderatorTasksCreate = async (req, res) => {
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
      message: 'A-ok! New task created !'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const moderatorTasksDelete = async (req, res) => {
  await Task.deleteOne({
    _id: req.body.id
  }).then(() => {
    res.status(200).send({
      message: 'Task deleted for good!'
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const moderatorController = {
  moderatorHotel,
  moderatorRooms,
  moderatorBookings,
  moderatorBookingsSingle,
  moderatorBookingsUpdate,
  moderatorBookingsCreate,
  moderatorBookingsDelete,
  moderatorEmployees,
  moderatorEmployeesSingle,
  moderatorEmployeesUpdate,
  moderatorEmployeesCreate,
  moderatorEmployeesDelete,
  moderatorTasks,
  moderatorTasksSingle,
  moderatorTasksUpdate,
  moderatorTasksCreate,
  moderatorTasksDelete
};