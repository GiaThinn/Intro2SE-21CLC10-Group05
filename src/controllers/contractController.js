const Contracts = require("../models/contracts")

exports.createContracts = async(req, res) =>{
    const newContracts = new Contracts({
        fullname: req.body.fullname,
        message: req.body.message,
        email: req.body.email
    })
    newContracts.save()
    console.log(req.body);
    res.redirect('/contract-us')
}