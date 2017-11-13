const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const multer = require('multer');


// Limit the size of file uploads.
const uploadSizeLimit = 1048576 * 1; //1MB

// Destination for file uploads.
const destination = './upload/images'; //'./angular-src/src/assets/images';

// Set Storage Engine
const storage = multer.diskStorage({
	destination: destination,
	filename: function(req, file, cb) {
		//console.log(req.headers.img_id);
		cb(null, /*file.fieldname+*/ Date.now() + '-' + req.headers.img_id + path.extname(file.originalname));
	}
});

const fileUpload = multer({
	storage: storage,
	limits: {fileSize: uploadSizeLimit},
	fileFilter: function(req, file, cb) {
		checkFileType(file, cb);
	}
}).single('img');

//Check File Type
const checkFileType = function (file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if(mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images Only!');
	}
}

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
	console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

const galleries = require('./routes/galleries');

const uploads = require('./routes/uploads');

//Port Number
const port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;

// IP address
const ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0';

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve Static Files
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/galleries', galleries);

app.use('/uploads', uploads);

// Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports.destination = destination;
module.exports.fileUpload = fileUpload;
module.exports.uploadSizeLimit = uploadSizeLimit;


// Start Server PUBLIC
app.listen(port, ip, () => {
	console.log('Server started on ' + ip + ':' + port);
});


// Start Server LOCAL DEV
/*
app.listen(port, () => {
	console.log('Server started on port ' + port);
});
*/
