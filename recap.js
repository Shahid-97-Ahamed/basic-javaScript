// Basic use

function add(ramenPrice,coffeeprice){
    const total = ramenPrice+coffeeprice;
    return total;
}

const bill = add(385,115);
console.log(bill);

// Short cut Use

function add2(cahanPrice,applejucePrice){
    return cahanPrice+applejucePrice;
}
const bill2 = add2(350,155);
console.log(bill2)

function doMath(num1,num2){
    const sum = num1+num2;
    const diffrence = num1 -num2;
    const multiplication = sum *3;
    const divided = multiplication/2;
    return divided
}
const divided = doMath(7,9);
console.log(divided);