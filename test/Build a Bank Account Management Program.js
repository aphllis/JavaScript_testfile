class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    deposit(amount) {
        if (amount > 0) {
            this.transactions.push({ type: 'deposit', amount: amount });
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance: $${this.balance}`
        }
        return `Deposit amount must be greater than zero.`;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.transactions.push({ type: 'withdraw', amount: amount });
            this.balance -= amount;
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
        }
        return `Insufficient balance or invalid amount.`;
    }
    checkBalance() {
        return `Current balance: $${this.balance}`;
    }
    listAllDeposits() {
        let res = 'Deposits: ';
        this.transactions.forEach((obj) => {
            if (obj.type == 'deposit') {
                res += `${obj.amount},`;
            }
        })
        return res.slice(0, -1);
    }
    listAllWithdrawals() {
        let res = 'Withdrawals: ';
        this.transactions.forEach((obj) => {
            if (obj.type == 'withdraw') {
                res += `${obj.amount},`;
            }
        })
        return res.slice(0, -1);
    }
}
let myAccount = new BankAccount();
myAccount.deposit(1000);
myAccount.withdraw(20);
myAccount.deposit(1000);
myAccount.withdraw(300);
myAccount.deposit(1000);