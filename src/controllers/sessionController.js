const Session = require("../models/sessions");
const Patient = require("../models/patients");

exports.getbyID = async (req, res) => {
    const sessionID = req.headers.authorization?.split(' ')[1].toString();

    await Session
    .findOne({_id: sessionID})
    .then(result => {
        res.json({
            session: result.session
        });
    })
    .catch(err => {
        res.status(500).json({
            message: "Error retrieving Session with id=" + sessionID
        });
    });
}
