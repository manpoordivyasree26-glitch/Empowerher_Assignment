let count=0;
let start=setInterval (function(){
console.log("Loading........");
count++;
if(count===5){
clearInterval(start)
    console.log("Loaded succesfully")
}
},1000);