const Hospital = require('../models/hospitals');

exports.getHospitalList = async (req, res) => {
    // return all hospitals
    const data = await Hospital.find();
    const result = data.slice(0, 5);
    const limit = 5;
    const totalPages = parseInt(data.length / limit) + 1;

    return res.render('hospitalList', { items: result, totalPages: totalPages });
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
