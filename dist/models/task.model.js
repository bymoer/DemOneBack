import mongoose from "mongoose";
export const TASK_MODEL = mongoose.model('Task', new mongoose.Schema({
  taskAssignedEmployee: String,
  taskLocation: String,
  taskStart: Date,
  taskEnd: Date
}));