/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */


type Student = {
  id: string;
  fullName: string;
  age: number;
  isActive: boolean;
};


const student1: Student = {
  id: "ST2026001",
  fullName: "Nadia Putri",
  age: 16,
  isActive: true,
};

const student2: Student = {
  id: "ST2026002",
  fullName: "Faliha Afra",
  age: 17,
  isActive: true,
};

const student3: Student = {
  id: "ST2026003",
  fullName: "Luvena Chayyira",
  age: 16,
  isActive: false,
};


console.log("=== SMK Telkom Malang - Student Information ===");
console.log(student1);
console.log(student2);
console.log(student3);
