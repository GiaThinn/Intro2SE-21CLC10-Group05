const express = require('express');
const router = express.Router();

const newsController = require("../controllers/newsController");
const hospitalController = require("../controllers/hospitalController");

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
router.get('/hospital-list', hospitalController.getHospitalList);
router.get('/hospital-list/query', hospitalController.getHospitalListbyQuery);

// Login
router.get('/login', (req, res) => {
    res.render('Login');
});

// Sign up
router.get('/signup', (req, res) => {
    res.render('signUp');
});

//News
router.get('/news', (req, res) => {
    res.render('NewsPage');
});

// SingleNews
router.get('/single-news', (req, res) => {
    res.render('OnlyNews');
});

//AddContract
router.get('/contract-us', (req, res) => {
    res.render('AddContract');
});
module.exports = router;