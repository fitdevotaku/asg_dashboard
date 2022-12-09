const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// express is our server - cors access things outside the server inside of our server - mongoose model app data and is easier to use mongoDB in node

dotenv.config();
// configuration to use environment variables that are inside our .env file

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB database connected successfully!'))
    // we have our database URI - this is how we start our database connection - the environment variable "ATLAS_URI" is located inside our .env file
    .catch((err) => {
        console.log('Cannot connect to the database!', err);
      });

app.use(cors());
app.use(express.json());
// our middleware allows us to parse JSON - our server will be sending/recieving JSON

const fitnessRouter = require('./routes/fitness');
const usersRouter = require('./routes/users');
// imported files

app.use('/fitness', fitnessRouter);
app.use('/users', usersRouter);
// when a person visits root url/ endpoints, our data is loaded from routers 

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is now running on port 4000!`);
})
/*
starts the server listening on port 4000
For best practice use, I've implemented es6 feature such as arrow functions.
*/