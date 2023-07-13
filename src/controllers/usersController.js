const connection = require("../config/connectionDb");
const md5 = require('md5');

class User{
    constructor(){
    }
    createUser = async(req,res) =>{
        const {username,password} = req.body;
        const hash = md5(password);
        connection.query(`SELECT * FROM users WHERE username = '${username}'`,(err,rows)=>{
            if (err) throw err;
            // console.log(rows);
            if(rows[0] == null){
                connection.query(`INSERT INTO users (username,password,status) VALUES ('${username}' ,'${hash}','Active')`,(err,rows)=>{
                            if(!err){
                            res.status(201).send(req.body);
                            }
                        else
                            // console.log(err);
                            res.status(400).send(err);
                        })
            }
            else{
                res.send("user is already registered");
            }
        });
       
    }

    logInUser = async(req,res) =>{
        const {username,password} = req.body;
        const hash = md5(password);
        connection.query(`SELECT * FROM users WHERE username = '${username}'`,(err,rows)=>{
            if (err) throw err;
            // console.log(rows);
            if(rows[0] == null){
                res.send("user not exist");   

    }
    else{
        if(md5(req.body.password)==rows[0].password){
            res.send("user login");
        }
        else{
            res.send("wrong password");
        }
    }
        })
    }

}




module.exports = new User();