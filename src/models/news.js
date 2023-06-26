const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    description: String,
    image: {
        uri: String,
        caption: String
    },
    publishedDate: Date
});

const News = mongoose.model("News", NewsSchema);
module.exports = News;