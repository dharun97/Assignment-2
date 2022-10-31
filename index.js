require('dotenv').config();
const express = require("express");
const app = new express();
const PORT = process.env.PORT || 8000;

const mainRouter = require("./routes/main");


// middleware
app.use(express.static('./public'));
app.use(express.json());
app.set('view engine', 'ejs')


app.use('/', mainRouter);


const start = async () => {
    try {
        app.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();