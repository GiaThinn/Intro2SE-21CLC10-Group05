import express from 'express';

const app = express();

const PORT = "6969";

app.use(express.static("public"));
app.use(express.static("views"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});