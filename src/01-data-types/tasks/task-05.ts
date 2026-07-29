/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */


type attendance = {
    ID: string;
    name: String;
    date: String;
    checkInTime: number;
    checkOutTime: number;
    totalWorkingHours: number;
    present: boolean;
};

const attendance1: attendance = {
  ID: "2026001",
  name: "Faliha",
  date: "22-03-26",
  checkInTime: 7.00,
  checkOutTime: 16.00,
  totalWorkingHours: 8,
  present: true,
};

const attendance2: attendance = {
  ID: "298372",
  name: "Via",
  date: "01-07-26",
  checkInTime: 7.00,
  checkOutTime: 19.00,
  totalWorkingHours: 10,
  present: true,
};

const attendance3: attendance = {
  ID: "9423839",
  name: "Adit",
  date: "12-01-26",
  checkInTime: 9.00,
  checkOutTime: 17.00,
  totalWorkingHours: 8,
  present: false,
};

const attendances: attendance[] = [attendance1, attendance2, attendance3];


console.log("=== Attendences Information ===");
console.log(attendances);


