const express	 	= require('express');
const app 			= express();
const bodyParser 	= require('body-parser');
const guru 			= require('./Routes/guruRoutes');
const siswa 		= require('./Routes/siswaRoutes');
const mapel 		= require('./Routes/mapelRoutes');
const kelas 		= require('./Routes/kelasRoutes');
const login 		= require('./Routes/loginRoutes');
const cors 			= require('cors');
const mysql 		= require('mysql');
require('dotenv').config();

const connection 	= mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database : process.env.DB_NAME
});
connection.connect(function(err){
	if(err)
	console.log(err);
});
global.db 			= connection;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());



app.use("/api/mapel", mapel);
app.use("/api/guru", guru);
app.use("/api/siswa", siswa);
app.use("/api/kelas", kelas);
app.use("/api", login);




 
//require('./app/route/project.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})


