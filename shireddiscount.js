function shairdDiscount(quantity){
    const first100Quentity = 100;
    const second200Quentity = 200;
    const above200Quentity = 300;
    if(quantity <= 100){
        const total = quantity * first100Quentity;
        return total
    }
    else if(quantity<=200){
        const first100Quentity = 100*first100Quentity;
        const reaminingQuantity =quantity-100;
        const reaminingTotal = reaminingQuantity-second200Quentity;
        const total = first100Quentity+reaminingQuantity;
        return total
    }
    else{
        const first100Quentity =100*first100Quentity;
        const second200Quentity = 100*second200Quentity;
        const reaminingQuantity = quantity-200;
        const reaminingTotal = reaminingQuantity+above200Quentity;
        const total = first100Quentity+second200Quentity+reaminingTotal;
        return total;
    }
   
}

const getDiscount = shairdDiscount(30);
console.log('price without discount:',getDiscount);