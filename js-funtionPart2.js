/*Task -1:
Find the lowest number in the array below.*/

// const heights2 = [167, 190, 120, 165, 137];

function lowest(heights2){
    // console.log(heights2);
    let low =heights2[0];
    for(const number of heights2){
        if(number<low){
            low=number;
        }
    }
    return low;
}

// const lowNumber=lowest(heights2);
// console.log(lowNumber);


/*Task -2:
Find the friend with the smallest name.*/

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestFriendName(friends){
    // console.log(friends);
  if(!Array.isArray(friends)||friends.length===0){
    return 'Please Provide right array'
  }
  let smallest =friends[0];
  for(let name=1;name<friends.length;name++){
    if(friends[name].length<smallest.length){
        smallest = friends[name];
    }
  }
  return smallest;
}


const smallestName=smallestFriendName(heights2);
// console.log(smallestName);

/*Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.*/

function calculateElectronicsBudget(laptopQun,tabletQun,mobileQun){
    const laptopPrice=35000;
    const tabletPrice=15000;
    const mobilePrice=20000;

    const totalBudget = (laptopPrice*laptopQun)+(tabletPrice*tabletQun)+(mobilePrice*mobileQun);
    return totalBudget;

}
const budget =calculateElectronicsBudget(2,1,1);
// console.log(budget);


/*Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];*/

    const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    // ইনপুট যাচাই
    if (!Array.isArray(phones) || phones.length === 0) {
        return 'একটি ফোনের অ্যারে দিন';
    }

    let totalPrice = 0;

    // প্রতিটি ফোনের দাম যোগ করা
    for (let i = 0; i < phones.length; i++) {
        totalPrice += phones[i].price;
    }

    // গড় দাম হিসাব
    const averagePrice = totalPrice / phones.length;

    return averagePrice.toFixed(2);
}

const average = findAveragePhonePrice(phones);
// console.log("গড় ফোনের দাম:", average);


/*Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];*/

        const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateMonthlySalary(employees) {
    // ইনপুট যাচাই
    if (!Array.isArray(employees) || employees.length === 0) {
        return "⚠️ একটি কর্মচারীর তালিকা দিন";
    }

    let totalMonthlySalary = 0;

    for (let i = 0; i < employees.length; i++) {
        const emp = employees[i];
        const currentSalary = emp.starting + (emp.experience * emp.increment);
        totalMonthlySalary += currentSalary;
    }

    return totalMonthlySalary;
}

// ✅ ফাংশন কল করে আউটপুট দেখানো
const totalSalary = calculateMonthlySalary(employees);
console.log("💰 কোম্পানির মোট মাসিক বেতন:", totalSalary, "টাকা");
