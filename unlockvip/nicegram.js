/*************************************

项目名称：Nicegram
下载地址：https://t.cn/A6ou0MCe
脚本作者：chxm1023


**************************************

[rewrite_local]
^https?:\/\/restore-access\.indream\.app\/restoreAccess url script-response-body https://raw.githubusercontent.com/whitepaper2023/myquantumult/main/unlockvip/nicegram.js

[mitm]
hostname = restore-access.indream.app

*************************************/


const isQX = typeof $task != "undefined";
const chxm1023 = {"data":{"premiumAccess": true}};
console.log('已操作成功🎉\n叮当猫の分享频道: https://t.me/chxm1023');
$done({status: isQX ? "HTTP/1.1 200 OK" : 200, headers: $response.headers, body: JSON.stringify(chxm1023)});
