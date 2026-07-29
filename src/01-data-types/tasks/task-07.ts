/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records 
 * the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type register = {
    studentID: string;
    name: String;
    grade: number;
    courseID: string;
    courseTitle: string;
    instructorName: string;
    totalLearning: number;
    statusCompleted: boolean;
};

const register1: register = {
  studentID: "ST2026001",
  name: "Faliha",
  grade: 10,
  courseID: "FA700",
  courseTitle: "Fullstack",
  instructorName: "Pak Jek",
  totalLearning: 1,
  statusCompleted: true,
};

const register2: register = {
  studentID: "PT2028001",
  name: "Rakha",
  grade: 11,
  courseID: "RF700",
  courseTitle: "Fullstack",
  instructorName: "Pak Jek",
  totalLearning: 3,
  statusCompleted: false,
};

const register3: register = {
  studentID: "MP2026009",
  name: "Ilham",
  grade: 12,
  courseID: "ID700",
  courseTitle: "Fullstack",
  instructorName: "Pak Jek",
  totalLearning: 2,
  statusCompleted: true,
};


const registers: register[] = [register1, register2, register3];

console.log("=== Register Courses Information ===");
console.log(registers);