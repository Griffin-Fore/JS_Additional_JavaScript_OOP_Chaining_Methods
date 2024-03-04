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
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount
    }
    displayBalance() {
        console.log(`${this.name}'s balance: ${this.accountBalance}`)
    }
    transferMoney(otheruser, amount) {
        if(this.accountBalance >= amount) {
            this.accountBalance -= amount
            otheruser.accountBalance += amount
        }
        else {
            console.log("Insufficient Funds")
        }
    }
}

const rick = new User("Rick Van Python", "rick@python.com");
const morty  = new User("Morty Smith", "morty@pthon.com");
const beth = new User("Beth Smith", "bsmith@arpa.net");

rick.makeDeposit(300)
rick.makeDeposit(400)
rick.makeDeposit(500)
rick.makeWithdrawal(500)
rick.displayBalance()

morty.makeDeposit(500)
morty.makeDeposit(600)
morty.makeWithdrawal(100)
morty.makeWithdrawal(700)
morty.displayBalance()

beth.makeDeposit(1000)
beth.makeWithdrawal(300)
beth.makeWithdrawal(300)
beth.makeWithdrawal(300)
beth.displayBalance()

rick.transferMoney(beth, 100)
rick.displayBalance()
beth.displayBalance()