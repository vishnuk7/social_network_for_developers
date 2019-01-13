const express = require('express');
const mongoose = require('mongoose');

//DB congfig
const db = require('./config/keys').mongoURI;

//Connet to MongoDB
mongoose.connect(db)
        .then( () => console.log('Mongo DB is connected'))
        .catch(err => console.log(err));

const app = express();

app.get("/" , (req, res) => res.send("Hello") );

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server currently run on port ${port}`));