//引入mysql模块
const mysql = require('mysql');
//创建连接池对象
const pool = mysql.createPool({
  host:'39.103.66.129',
  port:'33060',
  user:'root',
  password:'root',
  database:'mstx',
  connectionLimit:15
});
//3.导出(暴露)对象
module.exports = pool;
