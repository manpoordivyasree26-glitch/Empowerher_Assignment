//1

function createCounter(){
let count = 0;
return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    }
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement(); 
//2
function createBankAccount() {
  let balance = 0;

  return {
    deposit: function (amount) {
      balance += amount;
      console.log("Deposited:", amount);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount);
      } else {
        console.log("Insufficient balance");
      }
    },
    getBalance: function () {
      console.log("Current balance:", balance);
    }
  };
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200);
account.withdraw(400); 
account.getBalance(); 

console.log(account.balance); 
