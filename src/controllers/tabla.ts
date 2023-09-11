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
    database.connection.query(sql,(err:any,rows:any)=>{
        if(err) throw err;
        lastId = Object.values(rows[0])[0] ;
        database.connection.query(`INSERT INTO new_table (id, dato) VALUES(${lastId+1}, 'dato ${lastId+1}')`,(err,rows)=>{
            console.log(req.params);
            if(err) throw err;
            if (rows){ res.send(true);}});
    });
    console.log(lastId);
    
}

const getDataD = (req:any,res:any)=>{
    const sql = 'SELECT * FROM new_table'
    database.connection.query(sql,(err:any,rows:any)=>{
        // let arrayD:Array<any> = [];
        // let arrayId:Array<any>= [];
        if(err) throw err;
        // console.log("rows", rows)
        // console.log(typeof rows)
        // rows.forEach((e:any) => {
        //     arrayD.push(`${e.id}`,e.dato);
        // });
        // console.log(arrayD);
        // console.log(arrayId);
        rows.length > 0 ? res.json({
            "Id":1, "Data":"Data1",
        }) :
        res.send('Not Result');
    });
}

export {getData,postData, getDataD }