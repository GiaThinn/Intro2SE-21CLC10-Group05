const News = require('../models/news');

exports.getLastestNews = async(req, res) => {
    try {
        const limit = req.query.limit || 3;
        const news = await News.find().sort({ publishedDate: -1 }).limit(limit);
        res.json({
            news: news,
        });
    } catch (err) {
        throw new Error('Failed to retrieve news from database');
    }
}
