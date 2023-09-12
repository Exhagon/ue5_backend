import * as database from '../mysql';
/* CONTROLADOR */
const getData = (req:any,res:any)=>{
    const sql = 'SELECT * FROM new_table'
    database.connection.query(sql,(err:any,rows:any)=>{
        if(err) throw err;
        console.log("rows", rows)
        console.log(typeof rows)
        rows.length > 0 ? res.json(rows) :
        res.send('Not Result');
    });
}

const postData = async(req:any, res:any)=>{
    const sql = `SELECT MAX(Id) FROM new_table;`;
    let lastId:any = 0;
    console.log("Req", req);
    console.log(req.query.data);
    database.connection.query(sql,(err:any,rows:any)=>{
        if(err) throw err;
        lastId = Object.values(rows[0])[0] ;
        database.connection.query(`INSERT INTO new_table (id, dato) VALUES(${lastId+1}, '${req.query.data}')`,(err,rows)=>{
            console.log(req.params);
            if(err) throw err;
            if (rows){ res.send(true);}});
    });
    console.log(lastId);
    
}

const getDataD = (req:any,res:any)=>{
    const sql = 'select * from new_table where id = (select MAX(id) from new_table)';
    database.connection.query(sql,(err:any,rows:any)=>{
        // let arrayD:Array<any> = [];
        // let arrayId:Array<any>= [];
        if(err) throw err;
        console.log("rows", rows)
        console.log(Object.values(rows[0])[1] );
        rows.length > 0 ? res.json({
            "Id":Object.values(rows[0])[0] , "Data":Object.values(rows[0])[1],
        }) :
        res.send('Not Result');
    });
}

export {getData,postData, getDataD }