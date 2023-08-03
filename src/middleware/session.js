// check session timeout
exports.lastActive = (req, res, next) => {
    if (req.session && req.session.user) {
        req.session.lastActive = Date.now();
        next();
    }
    else {
        res.redirect('/login');
    }
}

exports.checkSessionTimeout = (req, res, next) => {
    if (req.session && req.session.user) {
        const timeLimit = 1000 * 60 * 30;
        if (Date.now() - req.session.lastActive > timeLimit) {
            console.log('Session timeout');
            req.session.destroy();
            res.redirect('/login');
        }
        else {
            next();
        }
    }
    else {
        res.redirect('/login');
    }
}