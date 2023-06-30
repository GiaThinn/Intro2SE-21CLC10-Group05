const express = require('express');
const router = express.Router();

const newsController = require("../controllers/newsController");
const hospitalListController = require("../controllers/hospitalListController");

// Partnership
router.get('/partnership', (req, res) => {
    res.render('Partnership');
});

// Login
router.get('/login', (req, res) => {
    res.render('Login');
});

// Signup
router.get('/signup', (req, res) => {
    res.render('Signup');
});

// Home
router.get('/', newsController.getLastestNews);

// Hospital List
router.get('/hospital-list', hospitalListController.getHospitalList);
router.get('/hospital-list/query', hospitalListController.getHospitalListbyQuery);


module.exports = router;
