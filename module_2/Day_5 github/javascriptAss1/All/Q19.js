//1 template literals+expressions
//a
const a=5;
const b=7;
console.log(`${a}+${b}=${a+b}`);
//b
const msg=`
    Hello,
    howareyou,
    welcome
`;
console.log(msg);
//c
let firstname="John"
let lastname="Doe"
console.log(`full name:${firstname} ${lastname}`);
// Arrow Functions&this
//a
const square=n=>n*n
console.log(square(5))
//b
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();//this referes to the global scope it is undefined.
//c
const obj2={
    value:50,
    test:function(){
        console.log(this.value);
    }
};
obj2.test();
//3 rest,spread&coping object
//a
const product = { name: "Pen", price: 10 };
const copy={...product}
console.log(copy);
//b
const a1= { x: 1 };
const b1 = { y: 2 };
const c={...a1,...b1}
console.log(c);
//c
const maxValue=(...nums)=>{
    let max=nums[0];
    for(let n of nums){
        if(n>max){
            max=n;
        }
    }
    return max;
};
console.log(maxValue(3,10,5,8));
//Destructuring&Optional Chaining
//a
const [a2, ,c2] = [10, 20, 30];
console.log(a2,c2)
//b
const laptop = { brand: "Dell", ram: "8GB" };
const {brand}=laptop;
console.log(brand);
//c
const info={};
console.log(info?.name?.surname)
//5 Scoping(let/var/const)
//a
for (var i = 0; i < 3; i++) {}
console.log(i);
//b
//for (let j = 0; j < 3; j++) {}
//console.log(j); it shows the refernce error
//c
//const pi = 3.14;
//pi = 4; // error

//6 Ternery Operator 
//a
let kmph=70;
let speed=kmph>60?"fast":"Normal"
console.log(speed);
//b
let age=17;
let person=age>=18?"major":"minor"
console.log(person);
//c
let num=-5;
let check=num>0?"positive":num===0?"zero":"Negative"
console.log(check);
//7 spread,rest & arrays
//a
const num1=[1,2,3]
const num2=[4,5]
const num3=[...num1,...num2]
console.log(num3)
//b
const a3=["x","y"]
const b3=["z"]
console.log(...a3,...b3)
//c
const printNames=(...names)=>{
    return names;
}
console.log(printNames("A","B","C"));
//8 Object Destructuring&Shorthand
//a
const user1 = { id: 101, status: "active" };
const {id,status} = user1
console.log(id, status);
//b 
const id1 = 101;
const role = "admin";
const user3 = {
  id,
  role
};
console.log(user3);
//9 Template Literals
//a
const today=new Date().toDateString()
console.log(`Today is ${today}`);
//b
const name="Divya";
const score=90;
console.log(`Hello ${name},your score is ${score}/100`);
//10.Arrow function Shorthands
//a
const add=(a,b)=>a+b;
console.log(add(5,8))
//b
const isAdult=(age)=>age>18;
console.log(isAdult(20))
console.log(isAdult(15));
//c
const double=n=>n*2;
console.log(double(7));
//11.spread operator(array&objects)
//a
const arr=[10,20]
const cloneArr=[...arr]
console.log(cloneArr);
//b
const number=[10,20,30]
const newArr=[40,...number]
console.log(newArr);
//c
const obj1={name:"Divya",age:20}
const obj3={age:21,place:"hyd"}
const mergedObj={...obj1,...obj3}
console.log(mergedObj);

//12 optional Chaining
//a
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city);
//b
console.log(user?.job?.title);
//c
const student = { name: "Ravi" };
//console.log(student.address.city); it shows the error


