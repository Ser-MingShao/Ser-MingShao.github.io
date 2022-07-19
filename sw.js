/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","711c78c26d83c14eb29de480ceb44db1"],["/Gallery/Hzw/index.html","8fd25916645f8c025c32eea4313ddc23"],["/Gallery/index.html","0ffca0deeddb88903d9089406c95c4b6"],["/archives/2022/02/index.html","9a631b94b3eac68cc111e02395e20a28"],["/archives/2022/03/index.html","182734a54afe59ea1bc2602bdaafbf0b"],["/archives/2022/03/page/2/index.html","fb8568f37ca70ecb0d51d0b62113d070"],["/archives/2022/04/index.html","148d6794dc2b3c88321d6ce8c7149bc0"],["/archives/2022/05/index.html","350bf385a37945eecb36187749cead50"],["/archives/2022/06/index.html","6a168ddd63b7dfddaa71a056579df456"],["/archives/2022/index.html","41132f4116192f5bde90fd33017ed665"],["/archives/2022/page/2/index.html","419bb32e95fdb248365cf9074f8c5ca4"],["/archives/2022/page/3/index.html","d33379efc721861e54f4ed167f0d4aa1"],["/archives/index.html","06f2fe5745a9d1a3f89f5f025ec40000"],["/archives/page/2/index.html","181207a6bd572cdb0eaf1f012c5f4903"],["/archives/page/3/index.html","4ac532891d34e87e4072a075a394072f"],["/artitalk/index.html","51a2ca67bab6793f862e9909e7e23c87"],["/bb/index.html","7b597ec4f141369f1cd2340a1b9ab8d9"],["/categories/Java/index.html","3ebfba5c2d4b9a208148609633ae6b27"],["/categories/Java/page/2/index.html","7264d3256c2d7da2432648ca70bee985"],["/categories/Maven/index.html","748ff83024626d36a70e4f13416a5d84"],["/categories/Mybatis/index.html","52a3aa646337fbc041d6e905376e596c"],["/categories/Mybatis/注解开发/index.html","d560b2bf85168bc087e1db8e4c58bb75"],["/categories/Mybatis/笔记/index.html","4f07e87a19cdc90235e971752d4cffa1"],["/categories/OJ/HNKJZYXY-OJ/index.html","41ef22fa3e9a2bef598fb6fd8b65ff7a"],["/categories/OJ/index.html","af56afad81627249f714450b3b7decdc"],["/categories/Spring/EasyCode代码模板生成/index.html","b3c5552894a4652c74b8fc9f895e8062"],["/categories/Spring/Spring5笔记/index.html","4eca816f5596d4773c6b39f2a903bccb"],["/categories/Spring/SpringAop介绍/index.html","6d177e1fd4779198268b39a23da84d7b"],["/categories/Spring/SpringAop进阶/index.html","c4605be45a59e086be5aa2ac2e1c7dd5"],["/categories/Spring/SpringBean生命周期/index.html","e40bbb061b3d37ca1323af1b3abf3bc9"],["/categories/Spring/SpringIOC详解/index.html","3698be2e6305594453cd4dafd499d6e9"],["/categories/Spring/SpringMVC笔记/index.html","d04e0bc656b6a4a047c7fb93be218c89"],["/categories/Spring/Spring注解/index.html","7b93662c2fd077f61ecaeff5f9e64bd9"],["/categories/Spring/Spring自动装配/index.html","7c314f390376230093adfe04cf12d369"],["/categories/Spring/index.html","7a4d171455b13950854988a31cc7a551"],["/categories/Spring/page/2/index.html","c87b304e975ad23e991bdb5fbcfb6c51"],["/categories/Spring/四种依赖注入/index.html","72a25b88f35aa82cac7b3e5bfe55c7a4"],["/categories/Spring/插件/index.html","b0e1287f604b8c917782d187f23a9932"],["/categories/Spring/面试题/index.html","a73135bc6d25b0a9eb9902209446819e"],["/categories/Tomcat/index.html","f26162e87b0c89046abd90c91ef247c6"],["/categories/Vue/Vue-NavigationDuplicated异常/index.html","204dee2e5246ffba6d8220d813c219e9"],["/categories/Vue/Vue天禹老师笔记/index.html","4ffd5e2a5ef86b0cae0ab64558c2bb4e"],["/categories/Vue/Vue路由三种传参方式/index.html","2e456a857202841d043dfe45a9696404"],["/categories/Vue/index.html","7422898f3bcd72ffbcfae759702b8ba0"],["/categories/bufferfly/index.html","69d60cd47121f2e69a46c1e44e540074"],["/categories/bufferfly/哔哔/index.html","4b6d162f936d38358918825a99d837b8"],["/categories/bufferfly修改/index.html","bce2c82aa6f2eab3d6ac5aa114f85ad2"],["/categories/index.html","992dc0dd64c4f9f3ee9d638ff9ca68a5"],["/categories/奇怪的知识/index.html","e1b7e692d95ddf64eead0143a2b67bd2"],["/categories/奇怪的知识/为什么IDEA不推荐你使用-Autowired/index.html","7c318040da7fbb670b0587f1193f18be"],["/categories/奇怪的知识/怎样科学上网/index.html","ca5d486dbefdbde2f1deea65be715b25"],["/categories/数据结构/index.html","5eaaf418673b4d157776801fe452c954"],["/categories/数据结构/循环队列/index.html","b1d9c214077f43673d1f5c499c9c2067"],["/categories/数据结构/递归/index.html","4489f1dffbc0abd19d7040f6eb208862"],["/categories/数据结构/链表/index.html","f3af4076266afc05af7e93638280a3c0"],["/categories/算法/index.html","1a43c653beb6189518c51c4f56385914"],["/categories/算法/回溯/index.html","f65f148df37f07c7332e449227947eff"],["/categories/算法面试题/index.html","5ff0f082c5541f0486ff2d9c2fe6767f"],["/categories/编程笔记/index.html","b25bedf0c2185b3623ac84c902721fa1"],["/categories/软件合集/Navicats/index.html","513f16e775a014d647915756611998a4"],["/categories/软件合集/idea/index.html","273bc033e2451989ff470ad9e2e0ceff"],["/categories/软件合集/index.html","04e51120a833d1bde0931f0b3abcf414"],["/categories/阿里云/index.html","1a4600b32b5400500e9ba63a40e20c91"],["/categories/阿里云/项目部署/index.html","66f4253a25ba201989ba6504be507de6"],["/comments/index.html","a45e62a0c2fb0fe812ea18a1a70e4403"],["/css/aplayer/APlayer.min.css","b554a8c66b57ac89dbd304202c019ddd"],["/css/custom/aplayer.css","3df287f09aff5387e1a494a86ec9ed2b"],["/css/custom/artitalk.css","a16a5cb11d1616450719d14dcd69d3f7"],["/css/custom/clkp.css","e0495c68539c27059be54f05721a8cfa"],["/css/custom/fixed_comment.css","353c9b9de1fa7f54130092e5140cbd1f"],["/css/custom/font.css","a8699788b930c8d4f8c5fcd9920d72e5"],["/css/custom/futetli.css","80cdcdbbfb5dcfb0ea7269107edbe453"],["/css/custom/icon.css","142e80c9c6a74a8bded77650fc0cb1ab"],["/css/custom/loading_wizard.css","9e542764eb21c90da200165acbcbc816"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/custom/ws.css","263c441f1b9efaa18490e789af940af8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","edd3ad6da83f792534e2a782fd5a8761"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","452f01a5992474b7fde3d146fb2c550b"],["/forum/index.html","8ceb652c1b3dce37dcddf615c9a968d5"],["/img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","6baff6e59ba4274432bb79ec252f7104"],["/img/bg02.jpg","90d242c4f3b437c9c9cccc0c8b644d6d"],["/img/bg03.png","5d854caa4ee98da101700b23c37b45cc"],["/img/favicon.png","a2fa8c803f86057a512902dcce27f17f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/log.png","347768bb9c3b1842d353f4ef6f0cff70"],["/img/wechat.png","b0be0e3b83aadedc472772f3935f8cc2"],["/img/wx.png","6e84965eb49716bbb5b9ce29a512eeca"],["/index.html","21cf703922c1e1eeb8bd7329687ab75a"],["/js/Meting.min.js","f52073ee95c3f319e57532eac06f16ca"],["/js/custom/comments.js","6cde9f390e092aa03b77f8a663d12aa9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/custom/fixed_comment.js","105ef085d165e2b75aed7eb1d6cccc8d"],["/js/custom/grayscale.js","c6abd8e29326703430a8b0a6c17f76c6"],["/js/custom/nav.js","a7981d6c5f9ebad06d19b89ff1738662"],["/js/custom/runtime.js","5723eb10b7f63c9c59f4237257ea289f"],["/js/custom/ss.js","cc152e5838e702ae5740741a0db313eb"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/wow_init.js","3507866c4b2902dc9de3bf21c76625a3"],["/js/main.js","d4533ca549681f965ce4cc4bc2fb5725"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","c3f89d283eae4130cbaf98b6d3faa80b"],["/ms/css/Lete.css","ce50e480777259fa32af759844295eef"],["/ms/css/background.css","1f048c7f7acf6d1a564c475275a7bde2"],["/ms/js/Lete.js","501d50da17faa73eccc7e015dd38ab2d"],["/music/index.html","b82bbc425a5cda73c6ec35184ba0856a"],["/page/2/index.html","b13d989d82203df9000e19e424a61cd3"],["/page/3/index.html","3c771d4c19de7e6729799d1095b7e5f1"],["/page/4/index.html","c34a2ceffb4d999435802e4aa73a69da"],["/post/13e760ef/index.html","6f6429348645a0b1c3edefb8f3301bee"],["/post/1d0508a6/index.html","e3bc75b70849f071bf51c62818d3c68c"],["/post/1d84dc88/index.html","6d342bddaa7d4f3f5f90c25706dfe1e8"],["/post/319c21eb/index.html","685816c7973079fb6744eacaf20b7848"],["/post/3208ee03/index.html","2691b52575adb286c55f98c1fa9bca33"],["/post/32277b7/index.html","fd9eecdafcba35f11337888cb3785511"],["/post/3a723147/index.html","15026c42f353a03f99f454fe03c0bdb9"],["/post/3d190b4f/index.html","b5dfe16dc2e2c4b4b8389b417d97927e"],["/post/5dd00982/index.html","efcec9ebc743f017fbcec960706cc43c"],["/post/63755f3a/index.html","923ed7f2abb804939d49f76388585b54"],["/post/6e9321d6/index.html","54c13e73e1d74a4ed82d452992c8616e"],["/post/7047b0e7/index.html","510db5b67695c1516a3817d0d23670da"],["/post/75ce1e02/index.html","0102d9893fa0ed369c38eeb4975854c5"],["/post/7a5d2d7e/index.html","f1102bcd44ab0bf2c87c16b0064e87d3"],["/post/7fd48667/index.html","86a2fcd94ee1e2ab278868a45a56efae"],["/post/841c624e/index.html","1e4c4a840dfa902a0614d07051343d6e"],["/post/86aff880/index.html","8aa67cdf93c1348014fe11ec82628dd8"],["/post/93f3f3c2/index.html","b3cb9bb428fde8514c078bb43ff13349"],["/post/9b97716e/index.html","91c242e78da3390d78b749cfcb8016e6"],["/post/9dadefec/index.html","585c703739fe0e9b8665cb2748a245ad"],["/post/a528d135/index.html","26d08cf8282afe8f92824b9cf96fd4ad"],["/post/b3b6ba72/index.html","fe75079ffc64d1d310c862643174bc1e"],["/post/b66774c1/index.html","f2536323536e5fa95baab5369452810e"],["/post/b6bbba88/index.html","0675da5d1df76d70ddc112d6e5cf45cd"],["/post/b6dbc3f5/index.html","bcc2b6f63e043ea7f32ebda40d6ac5ae"],["/post/bb6ff07f/index.html","74620775250df491dc8e920134ff70dd"],["/post/bcbdb63a/index.html","41a34576a7fed99e595a07b7199c71f7"],["/post/d811784c/index.html","e59b1bf7e1f8541695adaf6d073fdcba"],["/post/da904ab5/index.html","45046ce071dae6855134bb71395e2487"],["/post/e72b5a3a/index.html","77a3ffa0c985e7faf601361a401859dd"],["/post/e97079a9/index.html","d8e43aacaf55417695d3775ec53be932"],["/post/f605ecd9/index.html","8d7a921663abe7ac98d9bc4af0ab64e0"],["/sw-register.js","37380d3e7712568af2bde0ae19c4db63"],["/tags/HNKJZYXY-OJ/index.html","3eb842b62f97433337e1d3f7352e5a8f"],["/tags/Java/index.html","4a2b145de13abf0b746d01d3cbd2c4b2"],["/tags/MVC/index.html","d7251d26ecee2e9b0bf359dd1f9a8efc"],["/tags/Maven/index.html","3e8df3287990c307e6a6204ba34bb33d"],["/tags/Mybatis/index.html","95872385ba104e942550255d010801c5"],["/tags/MybatisPlus代码模板/index.html","237e304db062e8e70603ba137d504dc8"],["/tags/Navicat/index.html","28c215ed7e0525c9c656845d8f5b73e2"],["/tags/NavigationDuplicated异常/index.html","b3bb9051277a4e973ac0fdf206ba2303"],["/tags/OJ/index.html","ebdd08bf71f313f6c9567e0c32e8f585"],["/tags/Spring/index.html","06da994c6d0d2349a718c6ffe581ce7d"],["/tags/SpringBean生命周期/index.html","7d17a1565a2f054c87e54881ca154810"],["/tags/SpringBoot代码模板/index.html","88baecec294014150ca17b1791d41624"],["/tags/SpringIOC/index.html","1e5dd0ae5364c2a7f759bd99f0e126fb"],["/tags/Spring注解/index.html","93c7c38f9c83548d0e0bf1b2068e46f3"],["/tags/Spring面试题/index.html","42d30a09e3bb5611a5762369d10fea3f"],["/tags/Tomcat乱码/index.html","8371e8878831c44aae1b201973eaedce"],["/tags/Vue/index.html","f2d05e7b70e7a42f987e4e7de7be2ddb"],["/tags/Vue学习笔记-尚硅谷天禹老师/index.html","b4439d5eb9bf99d5eb1baee835825e12"],["/tags/Vue路由传参的三种方式/index.html","f8da5db06ca0a9bc297ea8d780a3b8dd"],["/tags/bufferfly/index.html","b3739574bbf112c5a2de54ebea10d18f"],["/tags/idea/index.html","ea2496c702c15e796fdcfa7a478c3234"],["/tags/index.html","bb0b5cf6c6d874b3e51e2b004725fe3f"],["/tags/哔哔/index.html","7072e6a27342dbdd339f14df031da0df"],["/tags/奇怪的知识/index.html","b6ddaefb4158ca74137c8ab310706d85"],["/tags/怎样科学上网/index.html","ae6661580249c1646af797464b515eaf"],["/tags/数据库/index.html","5c37f17d78c6c25932e4dba17f2125e9"],["/tags/数据结构/index.html","55b0d9b1b8e4313556678c4ed96427e6"],["/tags/算法/index.html","de0fc29165b782a4b0cea37b85cd406f"],["/tags/编程笔记/index.html","9d925c17003276ddd82425176c7e6669"],["/tags/阿里云ECS/index.html","d88913f50aa49d7295cbc003c5f7ea7e"],["/tags/项目部署/index.html","c2a52da059214903d87b2de33c64c2ba"],["/timeline/index.html","9f262582e2892744b44a7d6a13b28364"],["/workbox/index.html","af8973eec67aca4f59f33546b46c5b5b"]];
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
