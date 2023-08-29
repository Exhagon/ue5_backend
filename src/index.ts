import express from 'express';
import * as new_table from '../src/controllers/tabla';
let router = express.Router();
router.get('/',(req,res,next)=>{
    res.render('index',{title:'Express'});
});

router.get('/api/table', new_table.getData);
export {router};