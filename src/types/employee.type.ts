import { ITask } from "./task.type.js";

export interface IEmployee {
    employeeName: string,
    employeeRoad: string,
    employeeRoadNr: string,
    employeeCity: string,
    employeePostCode: string,
    employeeCountry: string,
    employeeAssignedWorkplace: string,
    employeeTitle: string,
    employeeRole: string,
    employeeWeekHours: number,
    employeeTasks: ITask[],
}