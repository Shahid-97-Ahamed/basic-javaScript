/*for odd(bijore)*/


// function oddAvarage(numbers){
//     const odds=[];
//     for(const number of numbers){
//         if(number % 2 === 1){
//             odds.push(number);
//         }
//     }
//     let sum =0;
//     for(const number of odds){
//         sum=sum+number;
//     }
//     const count =odds.length;
//     console.log(sum,count);  /*ata bujar jonno je ai kana total and length ber hoich*/
//     const ava = sum/count;
//     return ava;
// }

// const numbers=[10,23,59,73,64,100,107];
// const avg =oddAvarage(numbers);
// console.log('avarage of the odd number',avg);

/*for even(jor)*/

// function evenAva(numbers){
//     const evens =[];
//     for(const number of numbers){
//         if(number % 2 === 0){
//             evens.push(number);
//         }
//     }
//     // console.log(evens);/*put the value of even number*/
//     let sum =0;
//     for(const number of evens){
//         sum=sum+number;
//     }
//     const count =evens.length;
//     const ava =sum/count;
//     return ava;


// }
// const numbers=[12,25,30,45,60,71,90];
// const ava =evenAva(numbers);
// console.log(ava);



// -------------------------------------

// let x = 5;
// let y = 7;
// console.log(x,y);
// [x,y]=[y,x];
// console.log(x,y);

// let a = 5;
// let b = 6;
// console.log(a,b);
// const  temp = a;
// a = b; 
// b = temp;
// console.log(a,b);


// ----------------task-----------------------------

/*one*/

// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = (celsius * 1.8) + 32;
//     return fahrenheit;
//   }
  
//   // উদাহরণ
//   console.log(celsiusToFahrenheit(0));    // 32
//   console.log(celsiusToFahrenheit(25));   // 77


/*Two*/

function countNumber(numbers, target) {
    let count = 0;
  
    for (let num of numbers) {
      if (num === target) {
        count++;
      }
    }
  
    return count;
  }
  
  // উদাহরণ
  console.log(countNumber([5, 6, 11, 12, 98, 5], 5));   // 2
  console.log(countNumber([5, 6, 11, 12, 98, 5], 25));  // 0