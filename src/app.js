const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

const PORT = "6969";

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

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});