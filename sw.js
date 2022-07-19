/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","65302bf94b11e873316ff50de5087f02"],["/Gallery/Hzw/index.html","ad81a3e8639eedd6aa585e8a1e33afff"],["/Gallery/index.html","7c7c56a97e0dae49a481d3217264c31c"],["/archives/2022/02/index.html","93968eaa7d842bfc3873f22123791c20"],["/archives/2022/03/index.html","9376ee921e3e5a4acd7b86c0477b7c68"],["/archives/2022/03/page/2/index.html","5c7a04def660df9d9bb3fa6134af8e9c"],["/archives/2022/04/index.html","a3b2aef0474e75b62cba900a447f8953"],["/archives/2022/05/index.html","81e4275fa8a827462e601aa7524deb5d"],["/archives/2022/06/index.html","a7d9a18f501c2a0efb0d464d055c6290"],["/archives/2022/index.html","5c475de8eac846be8264924e6a8c64d9"],["/archives/2022/page/2/index.html","65de3bc3bbb1d1ea924dec4120364f75"],["/archives/2022/page/3/index.html","5322bc43b71108e385b5242523c913f1"],["/archives/index.html","469ad18a1176ae19be0a858f82a8a81b"],["/archives/page/2/index.html","8bf2556be7c2a3e5bf02f966f9da5989"],["/archives/page/3/index.html","a5640adc650d7e8705e62a383bbd2dcb"],["/artitalk/index.html","63f6f4922f620e4b6f67d6c97fae3cd0"],["/bb/index.html","5062e6f27ac13dfe029331ec07e0e5c9"],["/categories/Java/index.html","72e0e1005be4f86cc94ca838672bb983"],["/categories/Java/page/2/index.html","cdea26366a95fa9c41deacd5991da6a5"],["/categories/Maven/index.html","a10e63167988057b825053dfd1ba3474"],["/categories/Mybatis/index.html","5e8c2868c84aebee2766933ede43dd6e"],["/categories/Mybatis/注解开发/index.html","ae0e1d1f0d649b5e9b84a774c7bac70f"],["/categories/Mybatis/笔记/index.html","72b2a6fee9ddead1ec0dcdb76224f6fe"],["/categories/OJ/HNKJZYXY-OJ/index.html","a9c738515d60e45d023fee1a7c1ce377"],["/categories/OJ/index.html","c8a6e3924686958d228427b2d7a5a092"],["/categories/Spring/EasyCode代码模板生成/index.html","72e5ed1cb004de9aef18952e9cd81485"],["/categories/Spring/Spring5笔记/index.html","c2e6b1fb2ebf1570b0659defe0271723"],["/categories/Spring/SpringAop介绍/index.html","8b3f2e37e11aebcc048375bec7308ff6"],["/categories/Spring/SpringAop进阶/index.html","c08f42094f4ae6806f7093574a6c62af"],["/categories/Spring/SpringBean生命周期/index.html","2f138200356a1ce6d1fa74254af8112e"],["/categories/Spring/SpringIOC详解/index.html","0f747b6c879c6fc28597dc763834e571"],["/categories/Spring/SpringMVC笔记/index.html","86bc219e81ee558fd2f0f956d854cb4f"],["/categories/Spring/Spring注解/index.html","91182d7f06f28e732a80ce89f5368768"],["/categories/Spring/Spring自动装配/index.html","8ed5d9b443e6c584ba965d8e6bebb499"],["/categories/Spring/index.html","d612b8b13035af30d266c1f43527db9b"],["/categories/Spring/page/2/index.html","ba5c33b935064081f7c5eb4b9f720999"],["/categories/Spring/四种依赖注入/index.html","528910d8e7de88fe9342eceea3362c94"],["/categories/Spring/插件/index.html","582d255f8d175618cfdf049c1522b8a5"],["/categories/Spring/面试题/index.html","7eaa0be2f6d5ab48e8dbaf06778efa89"],["/categories/Tomcat/index.html","4c73ee8c615048cf2118a07c171497ee"],["/categories/Vue/Vue-NavigationDuplicated异常/index.html","2a031c007a142792c831fb3a56fee5e5"],["/categories/Vue/Vue天禹老师笔记/index.html","8a133c45a97106b5735de453c4f6b203"],["/categories/Vue/Vue路由三种传参方式/index.html","0023d41178360f82d67615c1293e6037"],["/categories/Vue/index.html","23b1b70ac44f59d271949c461e91f6a7"],["/categories/bufferfly/index.html","df66d4fdf6ffdb023062c6d8030d2f50"],["/categories/bufferfly/哔哔/index.html","157417818b35baee23ea0f0cec8a46c7"],["/categories/bufferfly修改/index.html","eb172f3a65d54280c8d474ca6fa4c525"],["/categories/index.html","6ec6957d09680785a41989637849489e"],["/categories/奇怪的知识/index.html","5d6a584b7d27d3326adaee3f16788466"],["/categories/奇怪的知识/为什么IDEA不推荐你使用-Autowired/index.html","a0e775f2612c889eed5daf07fdc936f5"],["/categories/奇怪的知识/怎样科学上网/index.html","bd4551dfcab8138b6d8e5ff81c1d3304"],["/categories/数据结构/index.html","4d95ae9cdaf523345b4414355e5fab4b"],["/categories/数据结构/循环队列/index.html","3f8ab2ddeb0038560e3e2362a17e3a99"],["/categories/数据结构/递归/index.html","2dad8642fa3a66ba71daa5fb66235028"],["/categories/数据结构/链表/index.html","e4982efbc7d87e9508091d797d38d30e"],["/categories/算法/index.html","b61495757865530535fc2a4c29197d76"],["/categories/算法/回溯/index.html","31467344ef63e8433ec5d48e76efe09a"],["/categories/算法面试题/index.html","ca5452cdcd00bab2ca7628c6035c6745"],["/categories/编程笔记/index.html","cd3aa845bee87baab59b9715a1a15835"],["/categories/软件合集/Navicats/index.html","aec86508f249d8840e59f532d973c002"],["/categories/软件合集/idea/index.html","11e6edad744324d9a17ada9642f8332f"],["/categories/软件合集/index.html","ee3bb8f51c2ee4501dde69350f4f169b"],["/categories/阿里云/index.html","2391be4d168c97dd9bec91a48d95a9ed"],["/categories/阿里云/项目部署/index.html","e74aea31feef0b1c52d1a5924d7f421e"],["/comments/index.html","f922fbc9871b5ca4742c5b79f229c9eb"],["/css/aplayer/APlayer.min.css","b554a8c66b57ac89dbd304202c019ddd"],["/css/custom/aplayer.css","3df287f09aff5387e1a494a86ec9ed2b"],["/css/custom/artitalk.css","a16a5cb11d1616450719d14dcd69d3f7"],["/css/custom/clkp.css","e0495c68539c27059be54f05721a8cfa"],["/css/custom/fixed_comment.css","353c9b9de1fa7f54130092e5140cbd1f"],["/css/custom/font.css","a8699788b930c8d4f8c5fcd9920d72e5"],["/css/custom/futetli.css","80cdcdbbfb5dcfb0ea7269107edbe453"],["/css/custom/icon.css","142e80c9c6a74a8bded77650fc0cb1ab"],["/css/custom/loading_wizard.css","9e542764eb21c90da200165acbcbc816"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/custom/ws.css","263c441f1b9efaa18490e789af940af8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","edd3ad6da83f792534e2a782fd5a8761"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","d1ecf1d38344e9238946b5b9e63df24e"],["/forum/index.html","a73842149a8210c2bc947ba2c2b7342c"],["/img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","6baff6e59ba4274432bb79ec252f7104"],["/img/bg02.jpg","90d242c4f3b437c9c9cccc0c8b644d6d"],["/img/bg03.png","5d854caa4ee98da101700b23c37b45cc"],["/img/favicon.png","a2fa8c803f86057a512902dcce27f17f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/log.png","347768bb9c3b1842d353f4ef6f0cff70"],["/img/wechat.png","b0be0e3b83aadedc472772f3935f8cc2"],["/img/wx.png","6e84965eb49716bbb5b9ce29a512eeca"],["/index.html","28d0abefd467fffbb1cad523d4c75b50"],["/js/Meting.min.js","f52073ee95c3f319e57532eac06f16ca"],["/js/custom/comments.js","6cde9f390e092aa03b77f8a663d12aa9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/custom/fixed_comment.js","105ef085d165e2b75aed7eb1d6cccc8d"],["/js/custom/grayscale.js","c6abd8e29326703430a8b0a6c17f76c6"],["/js/custom/nav.js","a7981d6c5f9ebad06d19b89ff1738662"],["/js/custom/runtime.js","5723eb10b7f63c9c59f4237257ea289f"],["/js/custom/ss.js","cc152e5838e702ae5740741a0db313eb"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/wow_init.js","3507866c4b2902dc9de3bf21c76625a3"],["/js/main.js","d4533ca549681f965ce4cc4bc2fb5725"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","58c11cda6744d80bf2e6b6080d04e574"],["/ms/css/Lete.css","ce50e480777259fa32af759844295eef"],["/ms/css/background.css","1f048c7f7acf6d1a564c475275a7bde2"],["/ms/js/Lete.js","501d50da17faa73eccc7e015dd38ab2d"],["/music/index.html","2e9e4fdd5378675226f869b4d8b87f3e"],["/page/2/index.html","4bd6197961d3e598d1280d870847a31c"],["/page/3/index.html","a9810be1635e4e2f5c1edfcef85c00e5"],["/page/4/index.html","851bc63f4f93bab7f0d17af822580934"],["/post/13e760ef/index.html","6f6429348645a0b1c3edefb8f3301bee"],["/post/1d0508a6/index.html","e3bc75b70849f071bf51c62818d3c68c"],["/post/1d84dc88/index.html","6d342bddaa7d4f3f5f90c25706dfe1e8"],["/post/319c21eb/index.html","685816c7973079fb6744eacaf20b7848"],["/post/3208ee03/index.html","2691b52575adb286c55f98c1fa9bca33"],["/post/32277b7/index.html","fd9eecdafcba35f11337888cb3785511"],["/post/3a723147/index.html","15026c42f353a03f99f454fe03c0bdb9"],["/post/3d190b4f/index.html","b5dfe16dc2e2c4b4b8389b417d97927e"],["/post/5dd00982/index.html","efcec9ebc743f017fbcec960706cc43c"],["/post/63755f3a/index.html","923ed7f2abb804939d49f76388585b54"],["/post/6e9321d6/index.html","54c13e73e1d74a4ed82d452992c8616e"],["/post/7047b0e7/index.html","510db5b67695c1516a3817d0d23670da"],["/post/75ce1e02/index.html","0102d9893fa0ed369c38eeb4975854c5"],["/post/7a5d2d7e/index.html","f1102bcd44ab0bf2c87c16b0064e87d3"],["/post/7fd48667/index.html","86a2fcd94ee1e2ab278868a45a56efae"],["/post/841c624e/index.html","1e4c4a840dfa902a0614d07051343d6e"],["/post/86aff880/index.html","8aa67cdf93c1348014fe11ec82628dd8"],["/post/93f3f3c2/index.html","04254c7d3a818747c6607d628ba0cb2b"],["/post/9b97716e/index.html","91c242e78da3390d78b749cfcb8016e6"],["/post/9dadefec/index.html","585c703739fe0e9b8665cb2748a245ad"],["/post/a528d135/index.html","26d08cf8282afe8f92824b9cf96fd4ad"],["/post/b3b6ba72/index.html","fe75079ffc64d1d310c862643174bc1e"],["/post/b66774c1/index.html","f2536323536e5fa95baab5369452810e"],["/post/b6bbba88/index.html","0675da5d1df76d70ddc112d6e5cf45cd"],["/post/b6dbc3f5/index.html","bcc2b6f63e043ea7f32ebda40d6ac5ae"],["/post/bb6ff07f/index.html","74620775250df491dc8e920134ff70dd"],["/post/bcbdb63a/index.html","41a34576a7fed99e595a07b7199c71f7"],["/post/d811784c/index.html","e59b1bf7e1f8541695adaf6d073fdcba"],["/post/da904ab5/index.html","45046ce071dae6855134bb71395e2487"],["/post/e72b5a3a/index.html","77a3ffa0c985e7faf601361a401859dd"],["/post/e97079a9/index.html","d8e43aacaf55417695d3775ec53be932"],["/post/f605ecd9/index.html","8d7a921663abe7ac98d9bc4af0ab64e0"],["/sw-register.js","06a338071b4865933169a5ee282f0678"],["/tags/HNKJZYXY-OJ/index.html","928ee80a5d3d813da05397e460a8c462"],["/tags/Java/index.html","cc3536a22ab3c2a044f45b6df64a6400"],["/tags/MVC/index.html","c173a4732df58185c5f9e359fff4c928"],["/tags/Maven/index.html","b9b8005d01cbc0f0f38d558126eb5e2f"],["/tags/Mybatis/index.html","2f085bfb0e87ff331356846a19cd8a19"],["/tags/MybatisPlus代码模板/index.html","18fc7cdb5914791b622f53f799ce6ac3"],["/tags/Navicat/index.html","9e5c62492683e64162b72e32f46d9d96"],["/tags/NavigationDuplicated异常/index.html","85fd974dcf9287cea53c4c8bd2fbfeb1"],["/tags/OJ/index.html","ac117e349e7a8a788d1d9f2e470c1c4b"],["/tags/Spring/index.html","5813d0b0f9b0c946e6fc862329e2786c"],["/tags/SpringBean生命周期/index.html","3118e7e81c70b74af3df9f83492fee31"],["/tags/SpringBoot代码模板/index.html","9234fc6247f0ce28bde5dee5d4016c46"],["/tags/SpringIOC/index.html","dbf358743a61b461c97b1ba878a48781"],["/tags/Spring注解/index.html","56949fb9d8d117c966c631ed55c68bf1"],["/tags/Spring面试题/index.html","1689c90118211ccfe5dfd69452dc334f"],["/tags/Tomcat乱码/index.html","832c664fafd042ad4e7b70b401dc8c04"],["/tags/Vue/index.html","a47337d34ca315d3cc8e69ff13ce09b4"],["/tags/Vue学习笔记-尚硅谷天禹老师/index.html","e4aa87a87d95c37e8486a2842df9f5f6"],["/tags/Vue路由传参的三种方式/index.html","1d55239ae174b8ddb84ce5b4439992a0"],["/tags/bufferfly/index.html","dc6ef369150fad117673c7d3ce1549e2"],["/tags/idea/index.html","821b990fcc77e75051c7118fc03a1336"],["/tags/index.html","6fb583b99728ba72f7981fde96999215"],["/tags/哔哔/index.html","e504fc6260b5b2f8c41b5d5f5c599289"],["/tags/奇怪的知识/index.html","8c93c281389c64273a6130aea4c69897"],["/tags/怎样科学上网/index.html","143c0c742f2bd7d6d76b73b920d5f69b"],["/tags/数据库/index.html","74f1dd6ee0b1502aed62feb5bd1ad461"],["/tags/数据结构/index.html","9577411c9ddb1470c7f97cb247b58e10"],["/tags/算法/index.html","3518e3a050f7d341e9b5be502314d800"],["/tags/编程笔记/index.html","526c5441ebc00ecb1640ca1d7240c69e"],["/tags/阿里云ECS/index.html","7236537d6a7a1d5aa1591d3adc6fc002"],["/tags/项目部署/index.html","5c19e0fb0242a746a39ace69af825e37"],["/timeline/index.html","03667439d40552f15429e8b61404420a"],["/workbox/index.html","232f297b022d73f2242aab3f574beba6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
