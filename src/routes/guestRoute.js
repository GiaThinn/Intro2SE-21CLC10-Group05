const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/sessionController')
const newsController = require("../controllers/newsController");
const hospitalController = require("../controllers/hospitalController");
const authController = require("../controllers/authController");
const accController = require("../controllers/accountController");
const patController = require("../controllers/patientController");


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
router.post('/login', authController.roleAuth);

// Sign up
router.get('/signup', (req, res) => {
    res.render('signUp');
});

// Forgot password
router.get('/forgot-password', (req, res) => {
    res.render('forgotPass');
});
router.post('/forgot-password', accController.forgotPassword);

// Reset password
router.get('/reset-password/:username/:token', (req, res) => {
    res.render('resetPass', { username: req.params.username, token: req.params.token });
});
router.post('/reset-password/:username/:token', accController.resetPassword);

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

// Get id by username
router.post('/getID', patController.getIDbyUsername);
router.get('/getUsn', sessionController.getbyID); // for getting username from sessionID (req.headers.authorization)

module.exports = router;