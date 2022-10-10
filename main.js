// First Class
class BankAccount {
    constructor (accountNumber, owner){
            this.accountNumber = accountNumber;
            this.owner = owner;
            this.transactions =[]; 
    }

    balance() {
      let sum = 0;
      
      for (let i = 0; i < this.transactions.length; i++) {
        sum += this.transactions[i].amount
      }   
      return sum
      };

    charge(payee, amt){
      let currentBalance =this.balance();
      console.log("CheckOne: " + currentBalance)
      if(amt <= currentBalance) {
      
        
      let chargeTransaction = new Transaction(-1*amt, payee);
      this.transactions.push(chargeTransaction);
      }

      else {
        console.log('it was an else')
        //do nothing
      }
    };

    deposit(amt){
      if(amt>0){
      let depositTransaction = new Transaction(amt, 'Deposit');
      this.transactions.push(depositTransaction);
      }
    };
}


// New Class
class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}
