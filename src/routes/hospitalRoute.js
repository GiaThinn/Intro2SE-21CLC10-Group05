const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('hospital_dashboard');
});
module.exports = router;