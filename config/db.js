const mysql = require("mysql");

const con = ()=>{
    return mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"qwert",
        database:"wanderson"
    });
}


module.exports = ()=>{
    return con;
}