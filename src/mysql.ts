import mysql from "mysql";
let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'123',
    database:'prueba'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("funciona");
})
exports.connection = connection;