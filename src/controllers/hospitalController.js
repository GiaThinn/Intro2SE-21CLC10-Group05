const Hospital = require('../models/hospitals');

exports.getHospitalList = async (req, res) => {
    // return all hospitals
    const data = await Hospital.find();
    const result = data.slice(0, 5);
    const limit = 5;
    const totalPages = parseInt(data.length / limit) + 1;

    return res.render('hospitalList', { items: result, totalPages: totalPages });
}

exports.getAllHospital = async (req, res) => {
    const hospitals = await Hospital.find();
    res.json({
        items: hospitals
    });
}

exports.getSpecbyHosID = async (req, res) => {
    hosID = req.body.pickedID;
    const hospital = await Hospital.find({hospitalID: hosID});
    // console.log(hospital);
    const specialists = hospital[0].specialists;
    // console.log(specialists);
    res.json({
        items: specialists
    });
}


exports.getHospitalListbyQuery = async (req, res) => {
    const page = req.query.page || 1; 
    const keyword = req.query.keyword || '';
    const order = req.query.order || 'asc';
    const limit = 5;

    if (page == 0) {
        const num = req.query.limit;
        const data = await Hospital.find().limit(num);
        res.json({
            items: data
        });
    }

    else {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        
        const data = await Hospital.find({ name: { $regex: keyword, $options: 'i' } }).sort({ name: order });
        const result = data.slice(startIndex, endIndex);
        
        const totalPages = parseInt(data.length / limit) + 1;
        // console.log(totalPages);
    
        res.json({
            items: result,
            totalPages: totalPages
        });
    
        // return res.render('hospitalList', { items: data, totalPages: totalPages });
    }
    
}
exports.listHospital = async (req, res) => {
    const hospital = await Hospital.find()
    res.render('hospital', {hospital})
}

exports.createHospital = async(req, res) =>{
    await Hospital.create({
        username: req.body.username,
        hospitalID: req.body.hospitalID,
        name: req.body.name,
        location: req.body.location,
        city: req.body.city,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        website: req.body.website,
        description: req.body.description,
        specialist: req.body.specialist,
        avatar: req.body.avatar
    });
    res.redirect('/admin/hospital')
}

exports.updateHospital = async(req, res) => {
    try{
        const hospital = await Hospital.findOne({_id: req.params.id})
        res.render('updateHospital', {hospital})
    } catch (error){console.log(error)}
}

exports.updateHospitalPost = async(req, res) => {
    try{
        await Hospital.findByIdAndUpdate(req.params.id,{
            username: req.body.username,
            hospitalID: req.body.hospitalID,
            name: req.body.name,
            location: req.body.location,
            city: req.body.city,
            contactNumber: req.body.contactNumber,
            email: req.body.email,
            website: req.body.website,
            description: req.body.description,
            specialist: req.body.specialist,
            avatar: req.body.avatar
        })
        res.redirect('/admin/hospital')
    } catch{}
}

exports.deleteHospital = async(req, res) => {
    try{
        await Hospital.deleteOne({_id: req.params.id});
        res.redirect('/admin/Hospital')
    } catch(error){}
}