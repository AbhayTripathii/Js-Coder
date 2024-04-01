// ++++++++++++++++++ REDUCE +++++++++++++++++++++++
// reduce is more usage in shoping cart wab page
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 10)


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)


// const priceToPay = shoppingCart.reduce(function (acc, item) {
//     console.log(`acc: ${acc} item: ${item}`)
//     return acc + item.price 
// }, 0)

console.log(priceToPay)