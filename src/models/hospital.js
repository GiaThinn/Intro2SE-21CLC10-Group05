const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
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
    },
    image: {
        url: String,
        caption: String
    }
});

const Hospital = mongoose.model("hospitals", HospitalSchema);
module.exports = Hospital;