const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')

router.get('/dashboard', (req, res) => {
    res.render('Dashboard');
});

router.get("/CRUDAccount", accountController.listAccount);

router.get('/add', (req, res) =>{
    res.render('addAccount')
})

router.post('/add', accountController.createAccount);

module.exports = router;