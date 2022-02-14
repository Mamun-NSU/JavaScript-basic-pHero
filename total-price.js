// MultiLine Comment: alt + shift + A
/* const products =[
    {name:"laptop", price:45000},
    {name:"shirt", price:500},
    {name:"watch", price:3650},
    {name:"phone", price:2300},
];
var totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice); */

const cart = [
    { name: "laptop", price: 45000, quantiry: 1 },
    { name: "shirt", price: 500, quantiry: 8 },
    { name: "watch", price: 3650, quantiry: 4 },
    { name: "phone", price: 23000, quantiry: 2 },
];
var totalPrice = 0;
for (const product of cart) {
    var productTotal = product.price * product.quantiry;
    totalPrice = totalPrice + productTotal;
    console.log(product.name, productTotal);
}
console.log("Total Price:", totalPrice);

