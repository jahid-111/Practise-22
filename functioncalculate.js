// console.log("HELLO TERMINANL");



function store_avality(storeOne, storeTwo, storeThree) {

    const storeOneStockPrice = 120000;
    const storeTwoStockPrice = 2342535225;
    const storeThreeStockPrice = 242000;

    const priceStoreOne = storeOneStockPrice * storeOne;
    const priceStoreTwo = storeTwoStockPrice * storeTwo;
    const priceStoreThree = storeThreeStockPrice * storeThree;

    return priceStoreOne + priceStoreTwo + priceStoreThree;
    // console.log(priceStoreOne, priceStoreTwo, priceStoreThree);
    // console.log(storeOne, storeTwo, storeThree)

}

const storeA = 3;
const storeB = 11
const storeC = 5;
const totalProduct = store_avality(storeA, storeB, storeC)
console.log("You have ", totalProduct, "$ Product Availabe");