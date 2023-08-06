const Account = require("../models/accounts")

exports.listAccount = async(req, res) =>{
    const account = await Account.find()
    res.render('CRUDAccount', {account})
}

// New acocunt
exports.addAccount = async(req, res) =>{
    res.render('addAccount')
}

exports.postAccount = async(req, res) =>{
    console.log(req.body)
    res.render('addAccount')
}