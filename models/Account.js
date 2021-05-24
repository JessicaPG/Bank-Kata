class Account {
    constructor() {
        this.accountId = Math.floor(Math.random() * 1000);
        this.balance = 0.0;
        this.statements = [];
    }
}

module.exports = Account;
