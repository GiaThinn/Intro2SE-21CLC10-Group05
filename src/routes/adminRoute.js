const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')


router.get('/dashboard', (req, res) => {
    res.render('Dashboard');
});

router.get("/CRUDAccount", accountController.listAccount);
router.get('/addAccount', accountController.addAccount);
router.post('/addAccount', accountController.postAccount);

module.exports = router;