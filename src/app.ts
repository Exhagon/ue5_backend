import express from 'express';
import path from 'path';
import {router} from './index';
const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/',router);
console.log("XD");
app.listen(3000,()=> console.log("Backend started"));
