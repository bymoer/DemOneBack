import { dbHelper } from "../models/index.js";
const Hotel = dbHelper.hotel;
const Room = dbHelper.room;
export const allAccess = (req, res) => {
  res.status(200).send('Public content!');
};
export const userBoard = (req, res) => {
  res.status(200).send('User content!');
};
export const adminBoard = (req, res) => {
  res.status(200).send('Admin content!');
};
export const moderatorBoard = (req, res) => {
  res.status(200).send('Moderator content!');
};

/**
 * Moderator - Hotel
 */

export const moderatorHotel = (req, res) => {
  // Query DB
  Hotel.find().then(hotel => {
    res.send({
      message: hotel
    });
  }).catch(err => {
    // Do something
  });

  // Room.find()
  // .then((room: IRoom) => {
  //     res.send(
  //         {
  //             message: room
  //         }
  //     )
  // })
};

export const userController = {
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard,
  moderatorHotel
};