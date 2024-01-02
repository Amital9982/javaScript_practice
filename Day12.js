//Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = {};
        this.expenses = {};
    }

    addIncome(description, amount) {
        if (this.incomes.hasOwnProperty(description)) {
            this.incomes[description] += amount;
        } else {
            this.incomes[description] = amount;
        }
    }

    addExpense(description, amount) {
        if (this.expenses.hasOwnProperty(description)) {
            this.expenses[description] += amount;
        } else {
            this.expenses[description] = amount;
        }
    }

    totalIncome() {
        return Object.values(this.incomes).reduce((total, amount) => total + amount, 0);
    }

    totalExpense() {
        return Object.values(this.expenses).reduce((total, amount) => total + amount, 0);
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }

    accountInfo() {
        let info = `Account Information for ${this.firstname} ${this.lastname}:\n`;
        info += `Total Income: $${this.totalIncome()}\n`;
        info += `Total Expense: $${this.totalExpense()}\n`;
        info += `Account Balance: $${this.accountBalance()}\n\n`;
        info += "Income Details:\n";
        for (const [description, amount] of Object.entries(this.incomes)) {
            info += `${description}: $${amount}\n`;
        }
        info += "\nExpense Details:\n";
        for (const [description, amount] of Object.entries(this.expenses)) {
            info += `${description}: $${amount}\n`;
        }
        return info;
    }
}

// Example usage:
const personAccount = new PersonAccount("John", "Doe");
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Bonus", 1000);
personAccount.addExpense("Rent", 1500);
personAccount.addExpense("Groceries", 200);
console.log(personAccount.accountInfo());

