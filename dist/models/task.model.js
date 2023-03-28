import mongoose from "mongoose";
export const TASK_MODEL = mongoose.model('Task', new mongoose.Schema({
  taskAssignedEmployee: String,
  taskLocation: String,
  taskCategory: String,
  taskDescription: String,
  taskStart: Date,
  taskEnd: Date
}));