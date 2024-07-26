/*
Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
*/

class Account {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposit of ${amount} successful. \nBalance: ${this.#balance}`);
    }
    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Withdrawal of ${amount} successful. \nBalance: ${this.#balance}`);
        } else {
            console.log(`Insufficient balance! \nBalance: ${this.#balance}`);
        }
    }
}

const account = new Account();
account.deposit(5000);

account.withdraw(2000);

account.deposit(1000);

account.withdraw(5000);