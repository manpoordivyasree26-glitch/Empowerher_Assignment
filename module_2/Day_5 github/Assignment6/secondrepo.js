function signup(userName) 
{
    let users = ["deepthi", "shiva", "raki", "sam"]; 
    
    if (users.includes(userName))
     {
        return "User Already Registered, Please Login";
    } 
    else 
     {
        users.push(userName);
        return "Signup Successfull, Please Login";
    }
}
console.log(signup("raki"));  
console.log(signup("divya")); 
