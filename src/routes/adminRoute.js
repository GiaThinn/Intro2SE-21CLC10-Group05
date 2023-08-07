const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')

router.get('/dashboard', (req, res) => {
    res.render('Dashboard');
});

router.get("/account", accountController.listAccount);

router.get('/account/add', (req, res) =>{
    res.render('addAccount')
})

router.post('/account/add', accountController.createAccount);

module.exports = router;