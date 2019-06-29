'use strict';

const response      = require('./res');
const connection    = require('../conn');

exports.mapel       = function(req, res){
    connection.query('SELECT * FROM Mapel', function(error,rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
exports.cariMapel   = function(req,res){
    const Id_Mapel  = req.params.id;

    connection.query('SELECT * FROM Mapel where id=?', [Id_Mapel],
    function (error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};
exports.tambahMapel     = function(req, res){
    const Nama_Mapel    = req.body.namaMapel;

    connection.query('INSERT INTO Mapel (namaMapel) values (?)',
    [Nama_Mapel],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("berhasil menambah Mapel", res)
            console.log("berhasil menambah Mapel")
        }
    });
}
exports.updateMapel     = function(req, res){
    const Id_Mapel      = req.params.id;
    const Nama_Mapel    = req.body.namaMapel;
    
    connection.query('UPDATE Mapel SET namaMapel=? WHERE id=?',
    [Nama_Mapel, Id_Mapel],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update Mapel", res)
            console.log("Berhasil update Mapel")
        }
    });
};
exports.deleteMapel = function(req, res) {
    
    const Id_Mapel  = req.params.id;

    connection.query('DELETE FROM Mapel WHERE id= ?',
    [ Id_Mapel ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus Mapel!", res)
            console.log("Berhasil Menghapus Mapel")
        }
    });
};

