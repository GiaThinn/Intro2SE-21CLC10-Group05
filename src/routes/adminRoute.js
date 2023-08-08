const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')

router.get('/', (req, res) => {
    res.render('admin_dashboard');
});

router.get("/account", accountController.listAccount);

router.get('/account/add', (req, res) =>{
    res.render('addAccount')
})
router.post('/account/add', accountController.createAccount);

router.get('/account/update/:id', accountController.updateAccount)

router.put('/account/update/:id', accountController.updateAccountPost)

router.delete('/account/delete/:id',accountController.deleteAccount)

module.exports = router;