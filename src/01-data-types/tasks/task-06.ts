/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product = {
    productCode: string;
    productName: String;
    price: number;
    stock: number;
    productWeight: number;
    rating: number;
    discount: boolean;
};

const product1: product = {
  productCode: "2026001",
  productName: "Chiki",
  price: 19.000,
  stock: 700,
  productWeight: 100,
  rating: 8,
  discount: true,
};

const product2: product = {
  productCode: "912901",
  productName: "Coklat",
  price: 12.000,
  stock: 400,
  productWeight: 500,
  rating: 9,
  discount: true,
};

const product3: product = {
  productCode: "3243121",
  productName: "Sabun",
  price: 27.000,
  stock: 100,
  productWeight: 670,
  rating: 10,
  discount: false,
};

const products: product[] = [product1, product2, product3];

console.log("=== Products Information ===");
console.log(products);
