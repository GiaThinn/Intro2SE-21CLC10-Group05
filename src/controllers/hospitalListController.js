const Hospital = require('../models/hospital');

// const data = [
//     {
//         username: "hospital1",
//         idHospital: 1,
//     },
//     {
//         username: "hospital2",
//         idHospital: 2,
//     },
//     {
//         username: "hospital3",
//         idHospital: 3,
//     },
//     {
//         username: "hospital4",
//         idHospital: 4,
//     },
//     {
//         username: "hospital5",
//         idHospital: 5,
//     },
//     {
//         username: "hospital6",
//         idHospital: 6,
//     },
//     {
//         username: "hospital7",
//         idHospital: 7,
//     },
//     {
//         username: "hospital8",
//         idHospital: 8,
//     },
//     {
//         username: "hospital9",
//         idHospital: 9,
//     },
//     {
//         username: "hospital10",
//         idHospital: 10,
//     },
//     {
//         username: "hospital11",
//         idHospital: 11,
//     },
//     {
//         username: "hospital12",
//         idHospital: 12,
//     },
//     {
//         username: "hospital13",
//         idHospital: 13,
//     }
// ]

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
