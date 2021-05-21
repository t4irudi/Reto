// FileName: index.js

//Import Body parser
let bodyParser = require('body-parser');

//Import Mongoose
let mongoose = require('mongoose');

// Import express
let express = require('express');



//Initialize the app
let app = express();

//headers express
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Import routes
let apiRoutes = require("./api-routes");

//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
mongoose.connect('mongodb://almi:Almi123@localhost/t4irudi?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
if (!db) {
    console.log("error connecting db");
} else {
    console.log("DB connected succesfully");
}

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('WS by t4'));

// Launch app to listen to specified port
app.listen(port, function() {
    console.log("Running on port " + port);
});


//Use Api routes in APP
app.use('/api', apiRoutes);

































/**/