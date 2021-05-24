//Business logic related to the account
const Account = require('../models/Account');
const Statement = require('../models/Statement');
//const Client = require('../models/Client');
//const Contact_info = require('../models/Contact_info');


let accounts = {}

exports.open = (req, res, next) => {
    //Check if client exists. If exists we add a new account. If not, we create the client and add the account.
    let account = new Account();
    if(accounts[account.accountId]){
        next(new Error('There was a problem creating an account'));
    }
    accounts[account.accountId] = account; //store account in memory
    return account.accountId;
}

exports.deposit = (req, res, next) => {
    let accountId = req.params.accountId;
    //Search in the database the account related to the accountId -- Defensive programming > guard function()
    let account = accounts[accountId];
    if (!account) {
        next(new Error(`Account with id: ${accountId} does not exist`));
    }

    //Apply changes to the account
    let amount = req.params.amount;
    account.balance += amount;
    account.statements.push(new Statement(amount, account.balance));
    //Store account
    console.log(account);
};

//different ways of doing things!
exports.withdrawal = (req, res, next) => {
    //same idea as above but account.balance -= amount instead of +=
};

