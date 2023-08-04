const express = require('express');
const router = express.Router();

router.get('/making-appointment', (req, res) => {
    res.render('makeAppoint');
});

module.exports = router;