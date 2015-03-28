// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express	= require('express');// call express
var bodyParser	= require('body-parser'); // get body-parser
var morgan	= require('morgan');// used to see requests
var mongoose	= require('mongoose'); // for working w/ db

var app		= express(); // define our app using express
var port	= process.env.PORT || 8080; // set the port for our app

// APP CONFIGURATION --------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParse.json());

// configure our app to handle CORS requests
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
	}
);

// log all requests to the console
app.use(morgan('dev'));

// ROUTES FOR OUR API
// ===================================

//basic route for the home page
app.get('/', function(req, res){
	res.send('Welcome to the home page!');
	}
);

// get an instance of the express router
var apiRouter = express.Router();

// test route to make sure everything is working
// accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res){
	res.json({message: 'hooray! welcome to our api!'});
	}
);

// more routes below


// REGISTER OUR ROUTES -----------------
// all our routes will be prefixed with /api
app.use('/api', apiRouter);

// START THE SERVER
// ====================================
app.listen(port);
console.log('Listening to port ' + port);









