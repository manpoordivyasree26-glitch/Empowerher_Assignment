const arr1=[1,2,3]
const arr2=[4,5]
const mergedArr=[...arr1,...arr2]
console.log(mergedArr);
const sum=(...nums)=>{
    let total=0;
    for(let n of nums){
        total += n;
    }
    return total;
};
console.log(sum(1,2,3,4));
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const{name,address:{city,pin}}=user
console.log(name);
console.log(city);
console.log(pin);