const Account = require("../models/accounts");

exports.roleAuth = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);

    Account
    .findOne({ username: username, password: password })
    .then(account => {
        if (account) {
            req.session.user = {};
            req.session.user.username = account.username;
            res.set('Set-Cookie', 'sessionID=' + req.sessionID);
            
            if (account.role === 0) {
                req.session.user.role = 'admin';
                res.redirect('/admin/dashboard');
            }
            else if (account.role === 2) {
                req.session.user.role = 'hospital';
                res.redirect('/hospital');
            }
            else {
                // res.redirect('/');
                console.log(req.sessionID);
                res.send('Logged in');
            }
        }
        else {
            console.log('Login failed');
            res.redirect('/login');
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal server error');
    })
}