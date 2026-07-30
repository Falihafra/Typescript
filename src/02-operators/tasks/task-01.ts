/**
<<<<<<< HEAD
 * The school cafeteria sells lunch packages to students. 
 * Today, Raka purchased 3 fried rice meals, each costing Rp18,000, 
 * and 2 bottles of mineral water, each costing Rp5,000. 
 * Because he is a member of the student council, he received a Rp10,000 discount.
=======
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
>>>>>>> upstream/main
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

let jumlahMakanan = 3;
let hargaMakanan = 18000;
let jumlahMinuman = 2;
let hargaMinuman = 5000;
let diskon = 10000;

let totalMakanan = jumlahMakanan * hargaMakanan;
let totalMinuman = jumlahMinuman * hargaMinuman;
let grandTotal = totalMakanan + totalMinuman;
let totalBayar = grandTotal - diskon;

console.log("Total harga makanan: Rp" + totalMakanan);
console.log("Total harga minuman: Rp" + totalMinuman);
console.log("Grand total: Rp" + grandTotal);
console.log("Total bayar: Rp" + totalBayar);
