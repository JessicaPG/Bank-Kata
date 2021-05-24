class Statement {
    constructor(amount, balance) {
        this.date = new Date(); //should be formatted
        this.amount = amount;
        this.balance = balance;
    }
}

module.exports = Statement;