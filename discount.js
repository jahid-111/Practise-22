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
console.log(pricetotal);


