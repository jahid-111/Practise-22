// console.log("HELLO TERMINAL");

const yourItem = [
    { name: "Mobile", price: 1200, quantity: 1 },
    { name: "Router", price: 100, quantity: 5 },
    { name: "Laptop", price: 3000, quantity: 3 },
    { name: "SSD", price: 700, quantity: 2 },
];
// console.log(yourItem);


function in_cart(cartItem) {
    let pricetotal = 0;
    for (i = 0; i < cartItem.length; i++) {
        const onCart = cartItem[i];
        const productTotal = onCart.price * onCart.quantity;
        pricetotal = pricetotal + productTotal;
    }
    return pricetotal;
}

const priceAll = in_cart(yourItem);
console.log("Your Total Order's ", priceAll, "SAR");