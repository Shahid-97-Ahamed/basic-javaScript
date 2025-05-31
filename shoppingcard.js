/*for totalQuantity cost(vedio-practice)*/


// const products =[
//     { name:'shirt',price:100,quantity:2 },
//     { name:'pant',price:500,quantity:3 },
//     { name:'watch',price:900,quantity:5 },
//     { name:'perfume',price:1100,quantity:4 },
// ];

// function cardTotal(products){
//     let total = 0;
//     for(const product of products){
//         const totalPriceQuantity = product.price *product.quantity;
//          total = total +totalPriceQuantity;
//     }
//     return total;
// }

// const shoppingCard =cardTotal(products);
// console.log(shoppingCard);



/*total cost (self-practice)*/


const products =[
    { name:'alo',price:100,quantity:2 },
    { name:'dim',price:500,quantity:3 },
    { name:'payaz',price:900,quantity:5 },
    { name:'beef',price:1100,quantity:4 },
];

function shoppingCard(products){
    let total =0;
    for(const product of products){
        const totalShoppingCost = product.price*product.quantity;
        total = total+totalShoppingCost
    }
    return total;

}

const totalShoppingCost = shoppingCard(products);
console.log('total bazar:',totalShoppingCost);