import { ITask } from "./task.type.js";

export interface IEmployee {
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
    employeeTasks: ITask[],
}