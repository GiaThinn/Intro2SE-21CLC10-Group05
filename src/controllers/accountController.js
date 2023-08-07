const Account = require("../models/accounts")

exports.listAccount = async(req, res) =>{
    const account = await Account.find()
    res.render('account', {account})
}

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

exports.updateAccount = async(req, res) => {
    try{
        const account = await Account.findOne({_id: req.params.id})
        res.render('updateAccount', {account})
    } catch (error){console.log(error)}
}

exports.updateAccountPost = async(req, res) => {
    try{
        await Account.findByIdAndUpdate(req.params.id,{
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        })
    } catch{}
}

exports.deleteAccount = async(req, res) => {
    try{
        await Account.deleteOne({_id: req.params.id});
        res.redirect('/admin/account')
    } catch(error){}
}