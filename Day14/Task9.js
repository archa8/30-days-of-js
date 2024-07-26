/*
Activity 5: Private Fields

Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
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

const test = new Account();
test.deposit(100);
test.withdraw(50);
test.withdraw(100);

// console.log(test.#balance); 
// ? SyntaxError: Private field '#balance' must be declared in an enclosing class