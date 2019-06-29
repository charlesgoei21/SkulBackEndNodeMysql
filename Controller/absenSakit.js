'use strict';

const response      = require('./res');
const connection    = require('../conn');

exports.sakit     = function(req, res, callback){
    const nis     = req.params.nis;
    var sakit     ='';

    connection.query('UPDATE Siswa SET sakit=? +1 WHERE nis=?',
    [sakit,nis],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("siswa sakit", res)
            console.log("siswa sakit")
        }
    });
};