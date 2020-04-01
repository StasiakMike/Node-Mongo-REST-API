const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middleware 


app.use(cors());
app.use(bodyParser.json());
//middleware test
//app.use('/posts', () => {
//    console.log('middleware logic runs');
//});


//main route
app.get('/', (req, res) => {
    res.send('Home/main page');
});

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//db connection
mongoose.connect(
    process.env.DB_CONNECTION,
 { useNewUrlParser: true }, () => {
    console.log('db connected');
});

//server
app.listen(3000);

