const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');

router.get('/making-appointment', (req, res) => {
    res.render('makeAppoint');
});

module.exports = router;