const express = require('express');
const app = express();
const AccountOperationsManager = require('./controllers/AccountOperationsManager');

app.set('port', process.env.PORT || 3000);

//Account statement (date, balance)
//accountId as a path param
app.get('/account/status/:accountId', (req, res) => {
    //return last client's statement
    res.status(200).json({
        success: true,
        statement: {
            date: '24/05/2021',
            balance: 1000
        }
    });
});

app.post('/account/open', (req, res) => {
    //req.body should contain an object of the type Client
    //return AccountId
    let accountId = AccountOperationsManager.open(req, res);
    res.status(200).json({
        success: true,
        accountId: accountId,
        clientId: 1 //hardcode for now
    });
});

//Account withdrawal
app.post('/account/withdrawal', (req, res) => {
    //body = {
    //  accountID: 1,
    //  amount: 12.3
    //}
    AccountOperationsManager.withdrawal(req, res);
    res.status(200).json({success: true});
});

//Account deposit
app.post('/account/deposit', (req, res) => {
    //body = {
    //  accountId: 1,
    //  amount: 12.3
    //}
    AccountOperationsManager.deposit(req, res);
    res.status(200).json({success: true});
});

app.delete('/account/close/:accountId', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Delete account ${req.params.accountId}`
    })
});

//Error handle
app.use(function (error, req, res, next) {
    res.status(500).send('500: Internal Server Error');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port'));
});
