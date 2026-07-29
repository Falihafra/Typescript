/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const MechanicalKeyboard = 850000;
const WirelessMouse = 275000*2;
const MousePad = 120000;
let discount = 0.1;
const isFreeShipping = true;

let subTotal = MechanicalKeyboard + WirelessMouse + MousePad;
let totalDiscount = subTotal > 1000000 ? subTotal*0.1 : subTotal;
let total = subTotal - totalDiscount;

console.log("=== Total Customer ===");
console.log("Mechanical Keyboard: Rp" + MechanicalKeyboard);
console.log("Wireless Mouse: Rp" + WirelessMouse);
console.log("Mouse Pad: Rp" + MousePad);
console.log("Free Shipping: " + isFreeShipping);
console.log("Sub Total: Rp" + subTotal);
console.log("Total: Rp" + total);






