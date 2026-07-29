/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional
 * Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employeeName = "Dimas";
let basicSalary = 5000000;
let overtimeHours = 12;
let overtimeRate = 50000;
let bonus = 300000;

let overtimePay = basicSalary + overtimeRate;
let finalSalary = overtimeHours > 10 ? overtimePay + bonus : overtimePay;

console.log("Name: " + employeeName)
console.log("Final Salary:" + finalSalary);




