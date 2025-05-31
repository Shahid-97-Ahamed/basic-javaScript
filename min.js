const price =[12000,35684,259647,2000000];

function chepiestPrice(numbers){
    let min =numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const lowPrice =chepiestPrice(price);
console.log('Most low Price:',lowPrice)