const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')


router.get('/dashboard', (req, res) => {
    res.render('Dashboard');
});

module.exports = router;