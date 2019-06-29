'use strict';

const response      = require('./res');
const connection    = require('../conn');

exports.users       = function(req, res){
    connection.query('SELECT * FROM Siswa', function(error,rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
exports.cariSiswa   = function(req,res){
    const NIS       = req.params.nis;

    connection.query('SELECT * FROM Siswa where nis=?', [NIS],
    function (error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};
exports.tambahSiswa     = function(req, res){
    const Nama          = req.body.nama;
    const Alamat        = req.body.alamat;
    const Tgl_Masuk     = req.body.tglMasuk;
    const Kelas         = req.body.kelas;
    const imgSiswa      = 'http://192.168.5.224:8081/Public/images/siswa/' + req.body.nama + '.' + 'jpg'

    connection.query('INSERT INTO Siswa (nama, kelas, alamat, tglMasuk, imgSiswa) values (?,?,?,?,?)',
    [Nama,Kelas, Alamat, Tgl_Masuk, imgSiswa],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("berhasil menambah Siswa", res)
            console.log("berhasil menambah Siswa")
        }
    });
}
exports.updateSiswa     = function(req, res){
    const NIS           = req.params.nis;
    const Nama          = req.body.nama;
    const Kelas         = req.body.kelas;
    const Alamat        = req.body.alamat;
    const Tgl_Keluar    = req.body.tglKeluar;
    const imgSiswa      = 'http://192.168.5.224:8081/Public/images/siswa/' + req.body.nama + '.' + 'jpg'

    connection.query('UPDATE Siswa SET nama=?,kelas=?, alamat=?, tglKeluar=?, imgSiswa=? WHERE nis=?',
    [Nama,Kelas,Alamat,Tgl_Keluar,imgSiswa, NIS],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update siswa", res)
            console.log("Berhasil update siswa")
        }
    });
};

