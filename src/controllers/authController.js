const Account = require("../models/accounts");

exports.roleAuth = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Account
    .findOne({ username: username, password: password })
    .then(account => {
        if (account) {
            req.session.user = {};
            if (account.role === 0) {
                req.session.user.role = 'admin';
                res.redirect('/admin/dashboard');
            }
            else if (account.role === 2) {
                req.session.user.role = 'hospital';
                res.redirect('/hospital');
            }
            else {
                res.redirect('/');
            }
        }
        else {
            res.redirect('/login');
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal server error');
    })
}