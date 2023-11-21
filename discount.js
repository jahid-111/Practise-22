// console.log("HELLO TERMINAL");



function ticket_price(ticketQty) {

    const first100rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQty <= 100) {
        const price = ticketQty * first100rate;
        return price
    }
    else if (ticketQty <= 200) {
        const first100Price = 100 * first100rate;
        const restTicketqty = ticketQty - 100;
        const restTicketPrice = restTicketqty * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {


        const first100Price = 100 * first100rate;
        const second100Price = 100 * second100Rate;
        const restTicketqty = ticketQty - 200;
        const restTicketPrice = restTicketqty * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;

    }
}
const pricetotal = ticket_price(201)
console.log("Your Total Ticket Price", pricetotal, "Taka");



// ============================ MY FIRST LOGIC/////////////////

/* 
buy two get one free 
buy five get two free  
*/
const cart = [
    { nameItem: "shirt", Price: 500, },
    { nameItem: "T-shirt", Price: 400, },
    { nameItem: "Pant", Price: 600, },
    { nameItem: "Pant", Price: 600, },
    { nameItem: "Pant", Price: 600, },
];
for (i = 1; i < cart.length; i++) {
}
let countItem = i;

function product(qty) {
    if (qty === 2) {
        return qty, "You Bought 2 Dress, You Are getting One Free";
    }

    else if (qty === 3 || qty === 4) {
        return qty, "Buy More, and Get Free Item"
    }
    else {
        return qty, "Thank You For Buy. (If you buy 2 item or 5 item you will getting Offer)"
    }
}
const priceDrees = product(countItem)
console.log(priceDrees);
