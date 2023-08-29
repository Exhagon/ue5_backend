import * as database from '../mysql';
/* CONTROLADOR */
const getData = (req:any,res:any)=>{
    const sql = 'SELECT * FROM new_table'
    database.connection.query(sql,(err:any,rows:any)=>{
        if(err) throw err;
        rows.length > 0 ? res.json(rows) :
        res.send('Not Result');
    });
}

export {getData}