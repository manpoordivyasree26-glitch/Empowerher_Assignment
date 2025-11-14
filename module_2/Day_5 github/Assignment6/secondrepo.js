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
//step 2
function login(userName, password) {
    let users = [
        { name: "deepthi", password: "Emp@123" },
        { name: "shiva", password: "Emp@123" },
        { name: "raki", password: "Emp@123" },
        { name: "sam", password: "Emp@123" }
    ];

    let user = users.find(u => u.name === userName);

    if (!user) {
        return "User Not Found, Please Signup";
    } else {
        if (user.password === password) {
            return "Login Successfull...";
        } else {
            return "Wrong Password....";
        }
    }
}
console.log(login("deepthi", "Emp@123"));  
console.log(login("deepthi", "12345"));   
console.log(login("divya", "Emp@123"));
