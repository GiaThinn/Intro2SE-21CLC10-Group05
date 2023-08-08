const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const Contracts = mongoose.model("contracts", ContractSchema);
module.exports = Contracts;