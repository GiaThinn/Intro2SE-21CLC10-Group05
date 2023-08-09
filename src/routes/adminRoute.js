const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')
const hospitalController = require('../controllers/hospitalController')
const appointmentController = require('../controllers/appointmentController')
const feedbackController = require('../controllers/feedbackController')
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
    res.render('addHospital')
})
router.post('/hospital/add', hospitalController.createHospital);

router.get('/hospital/update/:id', hospitalController.updateHospital)

router.put('/hospital/update/:id', hospitalController.updateHospitalPost)

router.delete('/hospital/delete/:id',hospitalController.deleteHospital)

router.get("/appointment", appointmentController.listAppointment);

router.get('/appointment/add', (req, res) =>{
    res.render('addAppointment')
})
router.post('/appointment/add', appointmentController.createAppointment);

router.get('/appointment/update/:id', appointmentController.updateAppointment)

router.put('/appointment/update/:id', appointmentController.updateAppointmentPost)

router.delete('/appointment/delete/:id',appointmentController.deleteAppointment)

router.get("/feedback", feedbackController.listFeedback);

router.get('/feedback/add', (req, res) =>{
    res.render('addFeedback')
})
router.post('/feedback/add', feedbackController.createFeedback);

router.get('/feedback/update/:id', feedbackController.updateFeedback)

router.put('/feedback/update/:id', feedbackController.updateFeedbackPost)

router.delete('/feedback/delete/:id',feedbackController.deleteFeedback)
module.exports = router;