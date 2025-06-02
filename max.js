// const max= [12,25,36,85,79];

const hridoy =35;
const bijoy=96;
const chin =78;

function getMex(numbers){
//    console.log(numbers);

    if(hridoy>bijoy && hridoy>chin){
       return  'Hridoy get hight numbers'
    }
    else if(bijoy>hridoy&& bijoy>chin ){
       return 'Bijoy get hight marks';
    }
    else{
        return 'Chin hight';
    }
}



const maximumOfThree=getMex(hridoy,bijoy,chin)
console.log(maximumOfThree);


