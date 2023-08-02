const express = require('express');
const router = express.Router();

const newsController = require("../controllers/newsController");
const hospitalListController = require("../controllers/hospitalListController");

// Partnership
router.get('/partnership', (req, res) => {
    res.render('Partnership');
});

// Home
router.get('/', (req, res) => {
    res.render('HomePage');
});

router.get('/latest-news', newsController.getLastestNews);

// Hospital List
router.get('/hospital-list', hospitalListController.getHospitalList);
router.get('/hospital-list/query', hospitalListController.getHospitalListbyQuery);

// Login
router.get('/login', (req, res) => {
    res.render('Login');
});

// Sign up
router.get('/signup', (req, res) => {
    res.render('signUp');
});


module.exports = router;