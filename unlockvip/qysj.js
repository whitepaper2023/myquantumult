/**************************

脚本功能：千亦视界 一次解锁永久会员
脚本作者：伟人
更新时间：2023-06-05


*********************************************

^http[s]?:\/\/app\.thwlqy\.com\/login\/login\/veifys\.html url script-response-body https://raw.githubusercontent.com/whitepaper2023/myquantumult/main/unlockvip/qysj.js

hostname = app.thwlqy.com

****************************/



var body = $response.body; 
let obj = JSON.parse($response.body);
obj.msg.time = -1 ;
$done({body: JSON.stringify(obj)});
