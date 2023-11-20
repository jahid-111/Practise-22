// console.log("HELLO TERMINAL");
const myName = "Mohd Jhidul Islam";
console.log(typeof myName);
// String

const Age = 25;
console.log(typeof Age);
// Number

const IsProgrammer = true;
console.log(typeof IsProgrammer);
// True

const AboutPerson = {
    namePersone: "Mohammad Jahidul Islam",
    Age: 25,
    IsOk: false,
}
console.log(typeof AboutPerson);
// Object



const theLuckyNum = [3, 5, 7, 25]
console.log(Array.isArray(theLuckyNum));
//True 

const newNum = [15, 20];
const allNum = newNum.concat(theLuckyNum);
console.log(allNum);
// [15, 20, 3, 5, 7, 25]


function theMachine(product) {
    return product;
}
theMachine()
console.log(typeof theMachine);
// Function 



