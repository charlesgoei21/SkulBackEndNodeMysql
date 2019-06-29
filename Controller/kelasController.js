'use strict';

const response      = require('./res');
const connection    = require('../conn');

exports.kelas       = function(req, res){
    connection.query('SELECT * FROM Kelas', function(error,rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
exports.cariKelas   = function(req,res){
    const Id_Kelas  = req.params.id;

    connection.query('SELECT * FROM Mapel where id=?', [Id_Kelas],
    function (error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};
exports.tambahKelas     = function(req, res){
    const Nama_Kelas    = req.body.namaKelas;
    const Nama_Jurusan  = req.body.namaJurusan;
    const Nomor_Jurusan = req.body.nomorJurusan;

    connection.query('INSERT INTO Kelas (namaKelas,namaJurusan,nomorJurusan) values (?,?,?)',
    [Nama_Kelas,Nama_Jurusan,Nomor_Jurusan],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("berhasil menambah Kelas", res)
            console.log("Berhasil menambah kelas")
        }
    });
}
exports.updateKelas     = function(req, res){
    const Id_Kelas      = req.params.id;
    const Nama_Kelas    = req.body.namaKelas;
    const Nama_Jurusan  = req.body.namaJurusan;
    const Nomor_Jurusan = req.body.nomorJurusan;
    
    connection.query('UPDATE Kelas SET namaKelas=?, namaJurusan=?, nomorJurusan=? WHERE id=?',
    [Nama_Kelas,Nama_Jurusan,Nomor_Jurusan, Id_Kelas],
    function (error,rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil update Kelas", res)
            console.log("berhasil update Kelas")
        }
    });
};
exports.deleteKelas = function(req, res) {
    
    const Id_Kelas  = req.params.id;

    connection.query('DELETE FROM Kelas WHERE id = ?',
    [ Id_Kelas ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus Kelas!", res)
            console.log("Berhasil menghapus Kelas")
        }
    });
};

