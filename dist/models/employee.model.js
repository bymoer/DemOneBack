import mongoose from "mongoose";
export const EMPLOYEE_MODEL = mongoose.model('Employee', new mongoose.Schema({
  employeeName: String,
  employeeRoad: String,
  employeeRoadNr: String,
  employeeCity: String,
  employeePostCode: String,
  employeeCountry: String,
  employeeAssignedWorkplace: String,
  employeeTitle: String,
  employeeRole: String,
  employeeWeekHours: Number,
  employeeTasks: [[]]
}));