// console.log("HELLO TERMINAL");

const phones = [

    { name: "iphone", camera: "10 MP", storge: "45", price: "99978", color: "black", },

    { name: "motorolla", camera: "20 MP", storge: "256", price: "978", color: "red", },

    { name: "oppo", camera: "26 MP", storge: "536", price: "2978", color: "silver", },

    { name: "huwaei", camera: "30 MP", storge: "120", price: "57978", color: "black", },

    { name: "nokia", camera: "20 MP", storge: "256", price: "49978", color: "red", },

];

// console.log(phones);


function chepest_phone(phones) {
    // console.log(phones);
    theChepest = phones[0];
    for (i = 0; i < phones.length; i++) {
        const allPhones = phones[i];
        if (allPhones.price < theChepest.price) {
            theChepest = allPhones;

        }
    }
    return theChepest;
}
const chep = chepest_phone(phones);
// console.log(chep);
/* {
    name: 'nokia',
        camera: '20 MP',
            storge: '256',
                price: '49978',
                    color: 'red'
} */



const laptop = [
    { name: "Apple", ssd: "256", operating: "Mac Os", price: "5000", color: "grey", },
    { name: "HP", ssd: "256", operating: "windows-10", price: "3900", color: "black", },
    { name: "Asus", ssd: "512", operating: "windows-11", price: "3500", color: "gold", },
    { name: "Lenovo", ssd: "256", operating: "windows-11", price: "2500", color: "silver", },
    { name: "Dell", ssd: "128", operating: "windows-7", price: "1500", color: "silver", },
    { name: "Toshiba", ssd: "512", operating: "windows-11", price: "3500", color: "black", },

];
// console.log(laptop);

function operating(laptop) {
    // console.log(laptop);
    let oper = laptop[0];
    for (i = 0; i < laptop.length; i++) {
        const laptopId = laptop[i];

        if (laptopId.operating === oper.operating) {
            oper.operating = laptopId.operating;

        }
        return oper;

        // console.log(laptopId);

    }

}
const ui = operating(laptop);
console.log(ui);