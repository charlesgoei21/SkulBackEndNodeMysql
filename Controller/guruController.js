'use strict';

const response      = require('./res');
const connection    = require('../conn');
const fs            = require('fs')
const fp            = require('filepath')


exports.users       = function(req, res){
    connection.query('SELECT * FROM Guru', function(error,rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
exports.cariGuru    = function(req,res){
    const NIP       = req.params.nip;

    connection.query('SELECT * FROM Guru where nip=?', [NIP],
    function (error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};
exports.tambahGuru  = function(req, res){
    const Nama      = req.body.nama;
    const Alamat    = req.body.alamat;
    const Tgl_Masuk = req.body.tglMasuk;
    const password  = req.body.password;
    const imgGuru   = 'http://192.168.5.224:8081/Public/images/guru/' + req.body.nama + '.' + 'jpg'

    connection.query('INSERT INTO Guru (nama, alamat,password, tglMasuk, imgGuru) values (?,?,?,?,?)',
    [Nama, Alamat,password, Tgl_Masuk, imgGuru],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("berhasil menambah guru", res)
            console.log("berhasil menambah guru")
        }
    });
}
exports.updateGuru      = function(req, res){
    const NIP           = req.params.nip;
    const Nama          = req.body.nama;
    const Alamat        = req.body.alamat;
    const password      = req.body.password;
    const Tgl_Keluar    = req.body.tglKeluar;
    const imgGuru       = 'http://192.168.5.224:8081/Public/images/guru/' + req.body.nama + '.' + 'jpg'

    connection.query('UPDATE Guru SET nama=?, alamat=?, password=?,tglKeluar=?, imgGuru=? WHERE nip=?',
    [Nama,Alamat,password,Tgl_Keluar,imgGuru, NIP],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update guru", res)
            console.log("Berhasil update guru")
        }
    });
};

