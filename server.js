const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// *** SET UP SERVER ***
require('dotenv').config()

const app = express()
const port = 3000
//process.env.PORT || 5000

app.use(cors()) // cors middleware
app.use(express.json()) // allows us to use JSON

// *** CONNECT TO MONGODB ***

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Connection to MongoDB established successfully')
})

// //new stuff from tutorial on how to connect backend and frontend
// //start
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//     // Add production middleware such as redirecting to https

//     // Express will serve up production assets i.e. main.js
//     app.use(express.static(__dirname + '../build'));
//     // If Express doesn't recognize route serve index.html
//     const path = require('path');
//     app.get('*', (req, res) => {
//         res.sendFile(
//             path.resolve(__dirname, '../', '/..build', 'index.html')
//         );
//     });
// }
// // end

// *** REQUIRE ROUTE FILES AND USE THEM ***
const vehiclesRouter = require('./routes/vehicles')
app.use('/vehicles', vehiclesRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`) // tells server to listen on a certain port
})