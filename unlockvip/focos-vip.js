/***********************************

> 应用名称：focos
> 下载地址：http://t.cn/AilyJ3mp
> 脚本作者：ddgksf2013
> 解锁说明：解锁高级会员权限
> 更新时间：2023-05-05

          
[rewrite_local]
  
# > focos解锁会员权限
^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) url script-response-body https://raw.githubusercontent.com/whitepaper2023/myquantumult/main/unlockvip/focos-vip.js 


[mitm]
 
hostname = focos.oracle.bendingspoonsapps.com


***********************************/




















var obj=JSON.parse($response.body);obj.me.active_subscriptions_ids=["com.focos.1w_t8_1w"],$done({body:JSON.stringify(obj)});
