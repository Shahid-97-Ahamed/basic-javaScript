function multiply(num1,num2){
    if(typeof num1!=='number'|| typeof num2!=='number'){
        return 'please provide a number';
    }
    const mult = num1*num2;
    return mult;
}

const result =multiply(5,'seven');
// console.log(result);

function fullname(first,second){
    if(typeof first!=='string'){
        return 'Please Provide First String';
    }
    else if(typeof second !=='string'){
        return 'Please Provide Second Name String';
    }
    const full =first+' '+second;
    return full;
}

const full=fullname('AHAMED',54);
// console.log(full);

function getProduct(product){
    if(typeof product!=='object'){
        return 'Please Provide a Object';
    }
    const price =product.price;
    return price;
}

// const price =getProduct({name:'Iphone',price:1800000,color:'Black'});
const price =getProduct(5);
// console.log(price);


function getSecond(number){
    // console.log(typeof number);
    // console.log(Array.isArray(number));
    if(Array.isArray(number)===false){
        return  'Please provide an Array';
    }
    const second =number[0];
    return second;
}

const second =getSecond([5,2,45]);
console.log(second);