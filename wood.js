/*I need Only Bed Quantity (Vedio Pratice)*/ 


// function woodQuantity(chairQuantity,tableQuantity,badQuantity){
//     const perChairQuantity = 3;
//     const perTableQuantity = 10;
//     const perBadQuantity = 50;

//     const chairTotalWood = chairQuantity*perChairQuantity;
//     const tableTotalWood =tableQuantity*perTableQuantity;
//     const badTotalWood =badQuantity*perBadQuantity;

//     const totalWood = chairTotalWood+tableTotalWood+badTotalWood;
//     return totalWood;
// }

// const wood =woodQuantity(0,0,1);
// console.log('wood needed',wood);


/*I need Table Quantity (Self-Practice)*/

// function woodQuantity(chairQuantity,tableQuantity,badQuantity){
//     const perChairQuantity=3;
//     const perTableQuantity=10;
//     const perBadQuantity =50;

//     const chairTotalWood =perChairQuantity*chairQuantity;
//     const tableTotalWood =perTableQuantity*tableQuantity;
//     const badTotalWood=perBadQuantity*badQuantity;

//     const totalWood = chairTotalWood+tableTotalWood+badTotalWood;

//     return totalWood;
// }

// const wood =woodQuantity(0,1,0);
// console.log('Table total wood',wood);


/*I need Shirf Price(practice-Task)*/

function totalPriceQuantity(shirtQuantity,pantQuantity,shoeQuantity){
    const perShirtPrice =500; 
    const perPantPrice =300; 
    const perShoePrice =900; 

    const totalShirtPrice =perShirtPrice*shirtQuantity;
    const totalPantPrice =perPantPrice*pantQuantity;
    const totalShoePrice =perShoePrice*shoeQuantity;

    const totalPrice = totalShirtPrice+totalPantPrice+totalShoePrice;
    return totalPrice;
}

const price =totalPriceQuantity(3,0,0);
console.log(price);














