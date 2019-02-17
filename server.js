const express = require('express');
const mongoose = require('mongoose');

const users = require('./api/users');
const posts = require('./api/posts');
const profile =  require('./api/profile');

//DB congfig
// const db = require('./config/keys').mongoURI;
//Connet to MongoDB
mongoose.connect('mongodb://localhost:27017/SE', {useNewUrlParser: true})
        .then( () => console.log('Mongo DB is connected'))
        .catch(err => console.log(err));

const app = express();

app.get("/" , (req, res) => res.send("Hello") );

//user Routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server currently run on port ${port}`));