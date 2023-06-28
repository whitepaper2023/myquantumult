/**********************************************
脚本作者：是豆豆呀
脚本功能：旅途随身听(APP和微信小程序) 解锁会员
使用声明：⚠️仅供学习交流，🈲️商业用途


[rewrite_local]
^https:\/\/www\.1314zhilv\.com\/ltsstnew\/(userApplet|user)\/getInfo url script-response-body https://raw.githubusercontent.com/whitepaper2023/myquantumult/main/unlockvip/ltsst.js



[MITM]
hostname = www.1314zhilv.com
**********************************************/


let obj = JSON.parse($response.body);
   
    obj = {
   "state": 200,
   "message": "success",
   "content": {
     "isAnchor": 1,
     "isShowAppletWX": 1,
     "identityType": 1,
     "isShowAppletDY": 1,
     "levDesc": "SVIP",
     "headUrl": "https://raw.githubusercontent.com/jizhi0520/QX/main/DouDou.JPG",
     "isShowGrey": 1,
     "phoneNum": "是豆豆呀",
     "isMountSwitch": 0,
     "userName": "是豆豆呀",
     "userId": "是豆豆呀",
     "isShowGrey" : 0,
     "isActivate": 1
   },
   "success": true
 }

$done({body : JSON.stringify(obj)});
