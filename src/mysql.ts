import * as mysql from "mysql";
let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'paloma',
    database:'prueba'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("funciona");
})
export {connection}