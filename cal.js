function add(num1,num2){
    const result = num1+num2;
    return result;
}
function subtract(num1,num2){
    const result = num1-num2;
    return result;
}
function multiply(num1,num2){
    const result = num1*num2;
    return result;
}
function divide(num1,num2){
    const result = num1/num2;
    return result;
}
 
function calculatro(a,b,operation){
    if(operation == 'add'){
        const result =add(a,b);
        return result;
    }
    else if(operation == 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operation =='multiply'){
        const result=multiply(a,b);
        return result;
    }
    else if(operation == 'divide'){
        return divide(a,b);
    }
    else{
      return  'Invalid operation';
    }
    
}

const result=calculatro(5,7,'divide');
console.log(result);