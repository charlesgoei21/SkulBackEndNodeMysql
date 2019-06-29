const jwt       = require('jsonwebtoken')
const atob      = require('atob')
const Cryptr    = require('cryptr')
cryptr          = new Cryptr('myTotalySecretKey') 
const bcrypt    = require('bcrypt')


exports.check_user      = function(req,res){
    const user_name     = req.body.check_user
    const sql_username  = "SELECT id from `login` WHERE `email`= '"+user_name+"'"
    const query         = db.query(sql_username, function(err,result){
        if(result == ""){
            res.json({
                "result":
                {"status" : "true"}
            });
            res.end();
        }else{
            res.json({
                "result":
                {"status":"false"}
            });
            res.end();
        }
    });
};

exports.signup      = function(req,res){
    const fname     = req.body.first_name
    const lname     = req.body.last_name
    // const pass      = bcrypt.hashSync(req.body.password, 8)
    const pass      = req.body.password
    // var dec_pass =atob(pass);
    // var encrypted_pass = cryptr.encrypt(dec_pass);
    const email     = req.body.email
    const sql       = "INSERT INTO `login`(`id`,`first_name`,`last_name`,`email`,`password`) VALUES('','" + fname + "','" + lname + "','" +email+ "','" +pass+ "')"

    db.query('SELECT * FROM login WHERE email=?',[email],function(err,result){
        if(result != ""){
            res.json({
                "result":
                {
                    status : false,
                    "msg" : 'data sudah ada'
                }
            })
        }else{
           
            db.query(sql, function(err,result){
                res.end(JSON.stringify(result));
                console.log('success add admin')
            })
        }
    })
};

exports.signin               = function(req, res){
    const name               = req.body.email
    // const pass               = bcrypt.compareSync(req.body.password,   )
    const pass               = req.body.password
    // var dec_pass = atob(pass);
    // var encrypted_pass = cryptr.encrypt(dec_pass);
    db.query('SELECT id,first_name,last_name,email FROM login where email=? AND password=?', [name, pass ], function(err, results){       
        if(results != ""){                                                               
            const data      = JSON.stringify(results);
            const secret    = 'TOPSECRETTTTT';
            const now       = Math.floor(Date.now() / 1000),
            iat             = (now - 10),
            expiresIn       = 3600,
            expr            = (now + expiresIn),
            notBefore       = (now - 10),
            jwtId           = Math.random().toString(36).substring(7);
            const payload   = {
                iat         : iat,
                jwtid       : jwtId,
                audience    : 'TEST',
                data        : data
            };            
            
            jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn : expiresIn}, function(err, token) {                          
                if(err){
                    res.json({
                        "results"    :
                        {
                            "status" : false,
                            "msg"    : 'Error occurred while generating token'
                        }                                                             
                    });
                } else {
                    if(token != false){
                        res.header();
                        res.json({
                            "results"   :
                            {"status"   : true,
                            "token"     : token,
                            "user"      : results[0]
                        }                                                                             
                    });
                        res.end();
                    }
                    else{
                        res.json({
                            "results"   :
                            {"status"   : false,
                             "msg"      : 'Could not create token'},                                                                               
                        });
                        res.end();
                    }
                    
                }
            });
        }
        else if(results == ""){
            res.json({
                "results"   :
                {"status"   : false, "msg" : 'Not found User!'}                                          
            });
            res.end();
        }
    });
};
exports.gurulogin              = function(req, res){
    const nip                  = req.body.nip
    // const pass               = bcrypt.compareSync(req.body.password,   )
    const pass                 = req.body.password
    // var dec_pass = atob(pass);
    // var encrypted_pass = cryptr.encrypt(dec_pass);
    db.query('SELECT nip,nama,alamat,password FROM Guru where nip=? AND password=?', [nip, pass ], function(err, results){       
        if(results != ""){                                                               
            const data      = JSON.stringify(results);
            const secret    = 'TOPSECRETTTTT';
            const now       = Math.floor(Date.now() / 1000),
            iat             = (now - 10),
            expiresIn       = 3600,
            expr            = (now + expiresIn),
            notBefore       = (now - 10),
            jwtId           = Math.random().toString(36).substring(7);
            const payload   = {
                iat         : iat,
                jwtid       : jwtId,
                audience    : 'TEST',
                data        : data
            };            
            
            jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn : expiresIn}, function(err, token) {                          
                if(err){
                    res.json({
                        "results"    :
                        {
                            "status" : false,
                            "msg"    : 'Error occurred while generating token'
                        }                                                             
                    });
                } else {
                    if(token != false){
                        res.header();
                        res.json({
                            "results"   :
                            {"status"   : true,
                            "token"     : token,
                            "user"      : results[0]
                        }                                                                             
                    });
                        res.end();
                    }
                    else{
                        res.json({
                            "results"   :
                            {"status"   : false,
                             "msg"      : 'Could not create token'},                                                                               
                        });
                        res.end();
                    }
                    
                }
            });
        }
        else if(results == ""){
            res.json({
                "results"   :
                {"status"   : false, "msg" : 'Not found User!'}                                          
            });
            res.end();
        }
    });
};

