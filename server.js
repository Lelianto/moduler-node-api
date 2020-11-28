var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    Jobs = require('./api/models/todoJobsModel'), //created model loading here
    bodyParser = require('body-parser'),
    fileUpload = require('express-fileupload'),
    cors = require('cors'),
    morgan = require('morgan'),
    _ = require('lodash');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(fileUpload({
    createParentPath: true,
    limits: {
        fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    },
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('uploads'));



var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

var routeJobs = require('./api/routes/todoJobsRoutes'); //importing route
routeJobs(app); //register the route

var uploadFileRoutes = require('./api/routes/uploadFileRoutes'); //importing route
uploadFileRoutes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

//** "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" */