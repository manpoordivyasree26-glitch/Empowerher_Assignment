function displayMessage(name){
   console.log(`hello ${name} !`) 
}
function getUserInput(callback){
    setTimeout(function(){
   callback("Alice");
},1000);
}
getUserInput(displayMessage);
