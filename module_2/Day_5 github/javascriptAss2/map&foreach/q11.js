//1
const processProduct=[
    {name:"laptop",price:1000},
    {name:"Mouse",price:20}
]
const product=processProduct.map(product=>product.name)
console.log(product)
//2
const processProduct1=[
    {name:"laptop",price:1000},
    {name:"Mouse",price:20}
]
processProduct1.forEach(processProduct1=>{
    if(processProduct1.price>50){
    console.log(`${processProduct1.name} is above $50`);
}else{
    console.log(`${processProduct1.name} is below $50`);
    }

});
