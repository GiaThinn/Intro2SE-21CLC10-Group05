import express from 'express';
import ejs from 'ejs';

const app = express();

const PORT = "6969";

app.use('/public', express.static('public'));
// app.use(express.static("views"));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/",function(req,res){
    res.render("HomePage");
})