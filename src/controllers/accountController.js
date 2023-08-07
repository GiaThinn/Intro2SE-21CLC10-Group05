const Account = require("../models/accounts")

exports.listAccount = async(req, res) =>{
    const account = await Account.find()
    res.render('account', {account})
}

// New acocunt
exports.createAccount = async(req, res) =>{
    const newAcc = new Account({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role
    })
    newAcc.save()
    res.redirect('/admin/account')
}