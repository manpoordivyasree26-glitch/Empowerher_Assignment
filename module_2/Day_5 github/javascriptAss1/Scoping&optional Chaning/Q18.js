if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
//console.log(x);
//referenceerror: x is not defined
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
const student = {
  name: "Ravi",
};
//console.log(student.address.city);
//gives the error 

console.log(student?.address?.city);