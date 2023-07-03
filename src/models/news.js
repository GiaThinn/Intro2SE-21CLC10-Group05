const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    description: String,
    image: {
        url: String,
        caption: String
    },
    publishedDate: Date
});

const News = mongoose.model("news", NewsSchema);
module.exports = News;
