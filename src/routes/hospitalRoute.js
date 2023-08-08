const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController')
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
module.exports = router;