const express = require("express");
const mongoose = require("mongoose");
const getLastestNews = require("./controllers/newsController");

const app = express();

const PORT = "6969";

// var path = require ('path');
// app.use('/static',express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));
// app.use(express.static("views"));
app.set('view engine', 'ejs');
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
    `mongodb+srv://thieuquanlac:iMyQSZ5ZQLsYnJMb@cluster0.eezcbqy.mongodb.net/HealthUs?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// <<<<<<< Updated upstream
app.get('/', async (req, res) => {
  try {
    const limit = 10;
    const news = await getLastestNews(limit);

    res.render('HomePage', {news: news});
  } catch (err) {
    throw new Error("Failed to retrieve home page's data");
  }
});
// =======
app.get('/',function(req,res){
    res.render('HomePage');
})
// >>>>>>> Stashed changes

