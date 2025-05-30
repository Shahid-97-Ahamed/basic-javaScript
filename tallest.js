// const hights =[12,65,16,32,85,92,98];

// function getMax(numbers){
//     let max =numbers[0];
//   for(const num of numbers){
      
//     // console.log(number);
//     if(num>max){
//         max = num;
//     }
//   }
//    return max;
// }

// const max =getMax(hights);
// console.log('max value of', max);

/*For Min*/

// const minimum = [6,12,14,25,369,85,2,1,5];

// function getMin(number){
//     // console.log(number);
//     let min =number[0];
//     for(num of number){
//         if(min>num){
//             min = num;
//         }
//     }
//     return min;
// }

// const min =getMin(minimum);
// console.log(min);


function woodQuantity(chairQuantity,tableQuantity,badQuantity){
    const perChairQuantity = 3;
    const perTableQuantity = 10;
    const perBadQuantity = 50;

    const chairTotalWood = chairQuantity*perChairQuantity;
    const tableTotalWood =tableQuantity*perTableQuantity;
    const badTotalQuantity =badQuantity*perBadQuantity;

    const totalWood = perChairQuantity+perTableQuantity+perBadQuantity;
    return totalWood;
}

const wood =woodQuantity(0,0,1);
console.log('wood needed',wood);