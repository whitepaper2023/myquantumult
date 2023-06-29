/*************************************

# 555和大师兄 去除广告模块

**************************************

[rewrite_local]
^https?:\/\/vip7\.fzwdyy\.cn:8083\/api\/(getAdvertInfo|getGOOGAdvert) url reject
^https?:\/\/vpic\.cms\.qq\.com\/nj_vpic url reject
^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/xgapp\.php\/.+\/(top_notice.+|advert.position.[^2](?<=position..)) url reject

[mitm]
hostname = vip7.fzwdyy.cn, vpic.cms.qq.com, sdk.alibaba.com.ailbaba.me

*************************************/

