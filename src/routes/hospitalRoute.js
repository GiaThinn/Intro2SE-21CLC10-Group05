const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController')
const hospitalController = require('../controllers/hospitalController')
router.get('/', (req, res) => {
    res.render('hospital_dashboard');
});
router.get("/doctor", doctorController.listDoctor);

router.get('/doctor/add', (req, res) =>{
    res.render('adddoctor')
})
router.post('/doctor/add', doctorController.createDoctor);

router.get('/doctor/update/:id', doctorController.updateDoctor)

router.put('/doctor/update/:id', doctorController.updateDoctorPost)

router.delete('/doctor/delete/:id',doctorController.deleteDoctor)

router.get('/specialist', (req, res) => {
    res.render('specialist');
})

// Specialist
router.get('/specialist/add/:id', (req, res) =>{
    res.render('addSpecialist', {id: req.params.id})
})
router.post('/specialist/add/:id', hospitalController.createSpecialist);

// router.get('/specialist/update/:id', feedbackController.updateFeedback)

// router.put('/specialist/update/:id', feedbackController.updateFeedbackPost)

router.delete('/specialist/delete/:id/:specName', hospitalController.deleteSpecialist)

module.exports = router;