function timer(duration,oncomplete){
    setTimeout(()=>{
        oncomplete(`Timer of ${duration} ms finished`)
    },duration);
}
timer(1000,function(message){
console.log(message);
});
