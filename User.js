// makeWithdrawal(amount) - have this method decrease the user's balance by the amount specified
// displayBalance() - have this method print the user's name and account balance to the terminal
    // eg. "User: Guido van Rossum, Balance: $150
// BONUS: transferMoney(otherUser, amount) - have this method decrease the user's balance by the amount 
    // and add that amount to other otherUser's balance

class User {
    constructor(username, email) {
        this.name = username
        this.email = email
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount
        return this;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount
        return this;
    }
    displayBalance() {
        console.log(`${this.name}'s balance: ${this.accountBalance}`)
        return this;
    }
    transferMoney(otheruser, amount) {
        if(this.accountBalance >= amount) {
            this.accountBalance -= amount
            otheruser.accountBalance += amount
            return this;
        }
        else {
            console.log("Insufficient Funds")
            return this;
        }
        return this;
    }
}

const rick = new User("Rick Van Python", "rick@python.com");
const morty  = new User("Morty Smith", "morty@pthon.com");
const beth = new User("Beth Smith", "bsmith@arpa.net");

rick.makeDeposit(300).makeDeposit(400).makeDeposit(500).makeWithdrawal(500).displayBalance()

morty.makeDeposit(500).makeDeposit(600).makeWithdrawal(100).makeWithdrawal(700).displayBalance()

beth.makeDeposit(1000).makeWithdrawal(300).makeWithdrawal(300).makeWithdrawal(300).displayBalance()

rick.transferMoney(beth, 100).displayBalance()
beth.displayBalance()