const MedicalProfiles = require('../models/medical_profiles');

exports.getByPatID = async (req, res) => {
    const id = req.session.user.id;
    
    await MedicalProfiles
    .findAll({ where: { patientID: id } })
    .then(data => {
        console.log('data:', data);
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            message: "Error retrieving MedicalProfiles with id=" + id
        });
    });
}