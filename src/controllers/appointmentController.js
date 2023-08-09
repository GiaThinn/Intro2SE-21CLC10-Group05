const Appointment = require('../models/appointments');

exports.addAppointment = async (req, res) => {
    const newApp = req.body.id;

    const lastRec = await Appointment.find().sort({appointmentID: -1}).limit(1);
    
    let lastID = Number(lastRec[0].appointmentID.slice(3,7));
    
    let newID = (lastID + 1).toString();
    const len = newID.length;
    
    for(let i = 1; i <= 4 - len; i++){
        newID = '0'  + newID;
    }
    
    newID = 'apm' + newID;
    
    await Appointment.create({
        appointmentID: newID,
        patientID: newApp[6],
        profileID: newApp[0],
        hospitalID: newApp[1],
        doctorID: newApp[3],
        specialist: newApp[2],
        date: newApp[4],
        time: newApp[5]
    });

    res.redirect('/');
    
}
