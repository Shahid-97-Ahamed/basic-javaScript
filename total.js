const price =[100,500,900,1200];

const products =[
    { name:'shirt',price:100 },
    { name:'pant',price:500 },
    { name:'watch',price:900 },
    { name:'perfume',price:1100 }
];

function totalProductPrice(products){
    let total = 0;
    for(const product of products){
      total =  total + product.price;
    }
    return total;
}

const total = totalProductPrice(products);
console.log('total cost of:',total);