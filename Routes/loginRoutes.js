const mysql 			= require('mysql');
const express           = require('express');
const router            = express.Router();
const login    			= require('../Controller/adminLogin');
const multer            = require('multer');
const multParse         = multer();
require('dotenv').config();

const connection 		= mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database : process.env.DB_NAME
});
connection.connect(function(err){
	if(err)
	console.log(err);
});
global.db 				= connection;

router.post('/signin',	multParse.none(), login.signin);
router.post('/signup', 	multParse.none(), login.signup);
router.post('/login/guru', multParse.none(), login.gurulogin)

module.exports 			= router;