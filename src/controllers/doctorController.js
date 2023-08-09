const Doctor = require("../models/doctors")

exports.listDoctor = async (req, res) => {
    const doctor = await Doctor.find()
    res.render('doctor', {doctor})
}

exports.createDoctor = async(req, res) =>{
    await Doctor.create({
        doctorID: req.body.doctorID,
        name: req.body.name,
        hospitalID: req.body.hospitalID,
        specialist: req.body.specialist,
        phone: req.body.phone,
        birth: req.body.birth,
        gender: req.body.gender,
        email: req.body.email,
        yearExp: req.body.yearExp,
        description: req.body.description,
        avatar: req.body.avatar,
        schedule: req.body.schedule,
    });
    res.redirect('/admin/doctor')
}

exports.updateDoctor = async(req, res) => {
    try{
        const doctor = await Doctor.findOne({_id: req.params.id})
        res.render('updateDoctor', {doctor})
    } catch (error){console.log(error)}
}

exports.updateDoctorPost = async(req, res) => {
    try{
        await Doctor.findByIdAndUpdate(req.params.id,{
            doctorID: req.body.doctorID,
            name: req.body.name,
            hospitalID: req.body.hospitalID,
            specialist: req.body.specialist,
            phone: req.body.phone,
            birth: req.body.birth,
            gender: req.body.gender,
            email: req.body.email,
            yearExp: req.body.yearExp,
            description: req.body.description,
            avatar: req.body.avatar,
            schedule: req.body.schedule,
        })
        res.redirect('/admin/doctor')
    } catch{}
}

exports.deleteDoctor = async(req, res) => {
    try{
        await Doctor.deleteOne({_id: req.params.id});
        res.redirect('/admin/doctor')
    } catch(error){}
}

exports.getDocbySpec = async (req, res) => {
    hosID = req.body.hospitalID;
    spec = req.body.pickedID;

    const data = await Doctor.find({hospitalID: hosID, specialist: spec});
    res.json({
        items: data
    });
}

exports.getScheofDoc = async (req, res) => {
    docID = req.body.pickedID;

    const data = await Doctor.find({doctorID: docID});

    res.json({
        items: data[0].schedule
    });