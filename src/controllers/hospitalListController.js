const Hospital = require('../models/hospital');

const data = [
    {
        username: "hospital1",
        idHospital: 1,
    },
    {
        username: "hospital2",
        idHospital: 2,
    },
    {
        username: "hospital3",
        idHospital: 3,
    },
    {
        username: "hospital4",
        idHospital: 4,
    },
    {
        username: "hospital5",
        idHospital: 5,
    },
    {
        username: "hospital6",
        idHospital: 6,
    },
    {
        username: "hospital7",
        idHospital: 7,
    },
    {
        username: "hospital8",
        idHospital: 8,
    },
    {
        username: "hospital9",
        idHospital: 9,
    },
    {
        username: "hospital10",
        idHospital: 10,
    },
    {
        username: "hospital11",
        idHospital: 11,
    },
    {
        username: "hospital12",
        idHospital: 12,
    },
    {
        username: "hospital13",
        idHospital: 13,
    }
]

exports.getHospitalList = async (req, res) => {
    const page = req.query.page || 1;
    const limit = 5;

    // const data = await Hospital.find(); // return all hospitals
    const totalPage = parseInt(data.length / limit) + 1;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = data.slice(startIndex, endIndex);

    console.log(totalPage);

    res.json(result);


    return res.render('hospitalList', { hospitals: result, totalPage: totalPage});
}
