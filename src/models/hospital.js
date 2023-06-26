const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
    username: String,
    idHospital: Number,
    name: String,
    location: String,
    contactNumber: String,
    email: String,
    website: String,
    description: String,
    specialist: {
        specName: String,
        specDescription: String
    } 
});

const Hospital = mongoose.model("hospital", HospitalSchema);
module.exports = Hospital;