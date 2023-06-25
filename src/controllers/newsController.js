const News = require('../models/news');

async function getLastestNews(limit) {
    try {
        const news = await News.find().sort({ publishedDate: -1 }).limit(limit);
        return news;
    } catch (err) {
        throw new Error('Failed to retrieve news from database');
    }
}

module.exports = getLastestNews;
