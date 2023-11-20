// console.log("HELLO TERMINAL");



const listName = ["Mohammad", "Jahidul", "Islam", "Jahidul", "Islam"];

function duplicate_name(names) {
    const finallName = [];
    for (i = 0; i < names.length; i++) {
        allList = names[i];

        if (finallName.includes(allList) === false) {
            finallName.push(allList);
        }
    }
    return finallName;
}
const output = duplicate_name(listName);
console.log(output);