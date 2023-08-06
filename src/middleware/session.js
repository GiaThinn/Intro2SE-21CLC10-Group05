// check session timeout
exports.lastActive = (req, res, next) => {
    if (req.session && req.session.user) {
        req.session.lastActive = Date.now();
    }
    next();
}

exports.checkSessionTimeout = (req, res, next) => {
    if (req.session && req.session.user) {
        const timeLimit = 1000 * 10;
        if (Date.now() - req.session.lastActive > timeLimit) {
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