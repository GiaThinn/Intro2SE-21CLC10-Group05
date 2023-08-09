const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')
const hospitalController = require('../controllers/hospitalController')
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

router.get("/hospital", hospitalController.listHospital);

router.get('/hospital/add', (req, res) =>{
    res.render('addhospital')
})
router.post('/hospital/add', hospitalController.createHospital);

router.get('/hospital/update/:id', hospitalController.updateHospital)

router.put('/hospital/update/:id', hospitalController.updateHospitalPost)

router.delete('/hospital/delete/:id',hospitalController.deleteHospital)

module.exports = router;