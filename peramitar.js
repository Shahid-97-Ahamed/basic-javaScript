// // function square(number){
// //     console.log('value of the number peramitar',number);
// //     const borgo = number*number;
// //     console.log('square of the given number is', borgo);
// // }

// // square(4);
// // console.log('------------------');
// // square(12);
// // square(5);
// // square(405);

// // function add(num1,num2){
// //     const sum = num1+num2;
// //     console.log(sum);
// // }

// // add(5,71);
// // add(24,71);

// // function addAll(a,b,c,d,e){
// //     const total =a+b+c+d+e;
// //     console.log(total);
// // }

// // addAll(7,9,10,14,21);

// function doubleIt(number){
//     const double = number*2;
//     console.log(double);
// }
// console.log('I will call the function')
// doubleIt(5);
// console.log('----------------')
// doubleIt(9);
// console.log('-----------------');
// doubleIt(88);
// const number = 55;
// doubleIt(number);
// const money = 181;
// doubleIt(money);

// function diffrance(num1,num2){
//     const diff = num1-num2;
//     console.log(num1,num2,'diffrance is',diff);
// }
// const fatherAge = 62;
// const myAge = 30;
// diffrance(fatherAge,myAge);

// function evenSizedString(str){
//     const size =str.length;
//     console.log(str,size);

//     if(size %2 ===0){
//         console.log('Even Size')
//         return true;
//     }else{
//         console.log('Odd Size');
//         return false;
//     }
    
// }

//  evenSizedString('Badalkote');

// const numbers = [10,21,30,10,24,5,24];
// function noDuplicate(arr){
//     const unique=[];
//     for(const item of arr ){
//         if(unique.includes(item) === false){
//             unique.push(item);
//         }
//     }
//         return unique;
// }

// const duplicate=noDuplicate(numbers);
// console.log(duplicate);


// const name = ['akash','jabar','remal','akash','rokon','jabar'];

// function noTwoTimes(arr){
//     const box =[];
// for(item of arr){
//     if(box.includes(item) === false){
//         box.push(item);
//     }
// }
//     return box;
// }

// const oneTimes=noTwoTimes(name);
// console.log(oneTimes);


// const name =['s','h','a','h','i','d'];
// function noTwoTimes(arr){
//     const emptyBox=[];
//     for(items of arr){
//         if(emptyBox.includes(items) ===false){
//                 emptyBox.push(items);
//         }
//     }
//     return emptyBox;
// }

// const oneTimes=noTwoTimes(name);
// console.log(oneTimes);

// const num = [10,20,221,20,50,10,5,221];
// function notUse(arr){
//     const box =[];
//     for(items of arr){
//         if(box.includes(items)===false){
//             box.push(items);
//         }
//     }
//     return box;
// }
// const oneTimeUse =notUse(num);
// console.log(oneTimeUse);


// const numbers =[1,3,3,7,8,1,9];
// function uniqueNumbers(arr){
//     const box =[];
//     for(items of arr){
//         if(box.includes(items)===false){
//             box.push(items);
//         }
//     }
//     return box;
// }

// const unique=uniqueNumbers(numbers);
// console.log(unique);


// const names = ['akash', 'jabar', 'remal', 'akash', 'rokon', 'jabar'];
// function onlyDuplicates(arr){
//     const box =[];
//     for(item of arr){
//         if(box.includes(item)=== true){
//             box.push(item);
//         }
//     }
//     return box;
// }

// const result = onlyDuplicates(names);
// console.log(result); 











// const food =['coffie','beer','coffie','cha','beer'];

// function repiteOnetime(arr){
//       const table =[];
//       for(item of arr){
//         if(table.includes(item)===false){
//             table.push(item);
//         }
//       }
//       return table;
// }
// const noRepit = repiteOnetime(food);
// console.log(noRepit);