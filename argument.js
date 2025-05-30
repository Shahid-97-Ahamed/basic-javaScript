function doubleIt(number){
    const doubled = number*2;
    console.log(number,doubled);
}

console.log('Its call function value');
doubleIt(7);
console.log('-----------')
doubleIt(11);
console.log('----------------')
doubleIt(29);

// name use

function difference(num1,num2){
    const diff = num1-num2;
    console.log(num1,num2,'diffrence is',diff);
}

const fatherAge = 62;
const sonAge = 30;
difference(fatherAge,sonAge);