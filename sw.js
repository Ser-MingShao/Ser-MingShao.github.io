/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8c775d1f367c1384e7f61ac451ab0067"],["/Gallery/Hzw/index.html","9971f9927f3008c273336c7af7ff1d98"],["/Gallery/index.html","9b365e74a13ce1659456a11b55df896a"],["/archives/2022/02/index.html","0d98d864f602c90f909c125eae8846dc"],["/archives/2022/03/index.html","a817d25dafbaeb46b2dd4a34d9ce0cbd"],["/archives/2022/03/page/2/index.html","c3c7df835a9154bdf7c89a6464fc6bd5"],["/archives/2022/04/index.html","c9efc63985710d5f05ad695483d43941"],["/archives/2022/05/index.html","9cff04ad3d426f0c1a428a741d1790fa"],["/archives/2022/06/index.html","e11788615e46aae2adf842c43c8daa89"],["/archives/2022/index.html","ce2f6641d3962c9685e369aba1f870db"],["/archives/2022/page/2/index.html","478229c2989e2e4cf2e83d391c11e3f2"],["/archives/2022/page/3/index.html","29a430a66f3bc199a408f1a449082841"],["/archives/index.html","abcc67aad410e2507121587a6e67a80e"],["/archives/page/2/index.html","7bbdbe3c6dc5df188351bf62857efe2b"],["/archives/page/3/index.html","8454d1bb8f57b4b9996b594d613607a8"],["/artitalk/index.html","c601684f6220617d0b6ac385fc9cdb67"],["/bb/index.html","ed60ddbd1bdcbadda578f512650940a7"],["/categories/Java/index.html","f9b9ff94b91bb5b8ee7fae6cb4252f77"],["/categories/Java/page/2/index.html","5016edc0d22c29f77523cb460273a8c9"],["/categories/Maven/index.html","2893882d366739fea450077db546113e"],["/categories/Mybatis/index.html","814177431feaa82bdb7e6923039e944a"],["/categories/Mybatis/注解开发/index.html","0941ef1f8e88dfc9e2ece6a62f506824"],["/categories/Mybatis/笔记/index.html","d340435959798884f507bc43a91f7217"],["/categories/OJ/HNKJZYXY-OJ/index.html","848da13824380454faead2e1b9ec5258"],["/categories/OJ/index.html","af59f9d6bc44409264c4c3077a1a5d0e"],["/categories/Spring/EasyCode代码模板生成/index.html","f7883dee891527cd60ac03faa8b3fbf5"],["/categories/Spring/Spring5笔记/index.html","e3d8b41bf7ca1f0355ce8d515bf1c193"],["/categories/Spring/SpringAop介绍/index.html","f95df34a4f377a1d868e681d5c39144d"],["/categories/Spring/SpringAop进阶/index.html","419a84095799edd97a485b1767cf6e97"],["/categories/Spring/SpringBean生命周期/index.html","183ee92131151f90fa40cb73bc56adc7"],["/categories/Spring/SpringIOC详解/index.html","66d958200bf7b0604c5154b2dbf23c87"],["/categories/Spring/SpringMVC笔记/index.html","9fc43dd84739229c1bb49b5910207f4e"],["/categories/Spring/Spring注解/index.html","c0fb9187b7527969e6e6965f5dacfa05"],["/categories/Spring/Spring自动装配/index.html","df05b6df26c38f8aad5505522e315d45"],["/categories/Spring/index.html","ad4ce3a87e1496e25659b2b11155195d"],["/categories/Spring/page/2/index.html","1085bcfbf013d085ff2ab2e62622b4d9"],["/categories/Spring/四种依赖注入/index.html","dc354f12b2944623664778b1ab355649"],["/categories/Spring/插件/index.html","d5ade787a75e1b2665a89e2878a997cf"],["/categories/Spring/面试题/index.html","e5c9abe5666eb4404cc74ea75a8c0359"],["/categories/Tomcat/index.html","8d40936c04dc8d37a744bbf0d72f3584"],["/categories/Vue/Vue-NavigationDuplicated异常/index.html","cc467c21cb2a778dc577f4c34b8379f5"],["/categories/Vue/Vue天禹老师笔记/index.html","d5b627952cfcd4ac4e23a21af268a0fc"],["/categories/Vue/Vue路由三种传参方式/index.html","4fc6e73538b685336c4baa709e4692d1"],["/categories/Vue/index.html","fe3b692d7c841b32ef28d332ee56bebe"],["/categories/bufferfly/index.html","a2519f6882af56d3b12341e2e99786b4"],["/categories/bufferfly/哔哔/index.html","733828a301b22c18a22cc2d047162a42"],["/categories/bufferfly修改/index.html","ac421e3d3201517426b215dbedaafb46"],["/categories/index.html","5354138b30b83e72c2482e75d0e85a45"],["/categories/奇怪的知识/index.html","8d8b979653e4f1d7ef9c096fc19fbc9e"],["/categories/奇怪的知识/为什么IDEA不推荐你使用-Autowired/index.html","44de06b6a83c862ea91be13d2e6dc569"],["/categories/奇怪的知识/怎样科学上网/index.html","06d2a216c58bf19d6e3837fa6b4ae1a1"],["/categories/数据结构/index.html","828190f48d27cf14caf78ac897fe7527"],["/categories/数据结构/循环队列/index.html","38fd69676f53a9682ef011f6f0b55a5d"],["/categories/数据结构/递归/index.html","c2617ad22f1c2d56444f1d7778cfe209"],["/categories/数据结构/链表/index.html","e80976a112234839dba202c5f8f8978f"],["/categories/算法/index.html","f5598b268fad6b12a88fef2db329d3c0"],["/categories/算法/回溯/index.html","d499cc3b17f16d413b214a4cc0af9c58"],["/categories/算法面试题/index.html","bfa4209aadcd6b07d9502253c12852ad"],["/categories/编程笔记/index.html","a3841af23c9d72aa0c3a210ecbd80b42"],["/categories/软件合集/Navicats/index.html","981e819bda8c0d1b81ae8686b0a3ef28"],["/categories/软件合集/idea/index.html","39f83773eed61aaebed17369b6580e07"],["/categories/软件合集/index.html","9bafe8dadcb6c3b7156a46e8118d2c26"],["/categories/阿里云/index.html","361599aa9132edcc898d7b316df7d1d7"],["/categories/阿里云/项目部署/index.html","baf37f8acfe654673e36c684abe4c799"],["/comments/index.html","ce8d401beed9775d6da23072f1a817c9"],["/css/aplayer/APlayer.min.css","b554a8c66b57ac89dbd304202c019ddd"],["/css/custom/aplayer.css","3df287f09aff5387e1a494a86ec9ed2b"],["/css/custom/artitalk.css","a16a5cb11d1616450719d14dcd69d3f7"],["/css/custom/clkp.css","e0495c68539c27059be54f05721a8cfa"],["/css/custom/fixed_comment.css","353c9b9de1fa7f54130092e5140cbd1f"],["/css/custom/font.css","a8699788b930c8d4f8c5fcd9920d72e5"],["/css/custom/futetli.css","80cdcdbbfb5dcfb0ea7269107edbe453"],["/css/custom/icon.css","142e80c9c6a74a8bded77650fc0cb1ab"],["/css/custom/loading_wizard.css","9e542764eb21c90da200165acbcbc816"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/custom/ws.css","263c441f1b9efaa18490e789af940af8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","edd3ad6da83f792534e2a782fd5a8761"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","018f514d8377be2ee5f37776396a1e95"],["/forum/index.html","1707b743c1f289d5f58e3ec95ce2af4c"],["/img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","6baff6e59ba4274432bb79ec252f7104"],["/img/bg02.jpg","90d242c4f3b437c9c9cccc0c8b644d6d"],["/img/bg03.png","5d854caa4ee98da101700b23c37b45cc"],["/img/favicon.png","a2fa8c803f86057a512902dcce27f17f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/log.png","347768bb9c3b1842d353f4ef6f0cff70"],["/img/wechat.png","b0be0e3b83aadedc472772f3935f8cc2"],["/img/wx.png","6e84965eb49716bbb5b9ce29a512eeca"],["/index.html","4b616c0edaa192dbe1d060813185baf9"],["/js/Meting.min.js","f52073ee95c3f319e57532eac06f16ca"],["/js/custom/comments.js","6cde9f390e092aa03b77f8a663d12aa9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/custom/fixed_comment.js","105ef085d165e2b75aed7eb1d6cccc8d"],["/js/custom/grayscale.js","c6abd8e29326703430a8b0a6c17f76c6"],["/js/custom/nav.js","a7981d6c5f9ebad06d19b89ff1738662"],["/js/custom/runtime.js","5723eb10b7f63c9c59f4237257ea289f"],["/js/custom/ss.js","cc152e5838e702ae5740741a0db313eb"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/wow_init.js","3507866c4b2902dc9de3bf21c76625a3"],["/js/main.js","d4533ca549681f965ce4cc4bc2fb5725"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a5af074ed12f50e338477a998ed34f2f"],["/ms/css/Lete.css","ce50e480777259fa32af759844295eef"],["/ms/css/background.css","1f048c7f7acf6d1a564c475275a7bde2"],["/ms/js/Lete.js","501d50da17faa73eccc7e015dd38ab2d"],["/music/index.html","2308167c406e67a798b0fa5781578f94"],["/page/2/index.html","87fd02aa6acb0be815a2b7fb88da31bf"],["/page/3/index.html","80a53658137ff10da3d0cc1c8bb1b9e8"],["/page/4/index.html","e52e4f70f6180de4a7f52d7246ea01a9"],["/post/13e760ef/index.html","6f6429348645a0b1c3edefb8f3301bee"],["/post/1d0508a6/index.html","e3bc75b70849f071bf51c62818d3c68c"],["/post/1d84dc88/index.html","6d342bddaa7d4f3f5f90c25706dfe1e8"],["/post/319c21eb/index.html","685816c7973079fb6744eacaf20b7848"],["/post/3208ee03/index.html","2691b52575adb286c55f98c1fa9bca33"],["/post/32277b7/index.html","fd9eecdafcba35f11337888cb3785511"],["/post/3a723147/index.html","15026c42f353a03f99f454fe03c0bdb9"],["/post/3d190b4f/index.html","b5dfe16dc2e2c4b4b8389b417d97927e"],["/post/5dd00982/index.html","efcec9ebc743f017fbcec960706cc43c"],["/post/63755f3a/index.html","923ed7f2abb804939d49f76388585b54"],["/post/6e9321d6/index.html","54c13e73e1d74a4ed82d452992c8616e"],["/post/7047b0e7/index.html","510db5b67695c1516a3817d0d23670da"],["/post/75ce1e02/index.html","0102d9893fa0ed369c38eeb4975854c5"],["/post/7a5d2d7e/index.html","f1102bcd44ab0bf2c87c16b0064e87d3"],["/post/7fd48667/index.html","86a2fcd94ee1e2ab278868a45a56efae"],["/post/841c624e/index.html","1e4c4a840dfa902a0614d07051343d6e"],["/post/86aff880/index.html","8aa67cdf93c1348014fe11ec82628dd8"],["/post/93f3f3c2/index.html","b3cb9bb428fde8514c078bb43ff13349"],["/post/9b97716e/index.html","91c242e78da3390d78b749cfcb8016e6"],["/post/9dadefec/index.html","585c703739fe0e9b8665cb2748a245ad"],["/post/a528d135/index.html","26d08cf8282afe8f92824b9cf96fd4ad"],["/post/b3b6ba72/index.html","fe75079ffc64d1d310c862643174bc1e"],["/post/b66774c1/index.html","f2536323536e5fa95baab5369452810e"],["/post/b6bbba88/index.html","0675da5d1df76d70ddc112d6e5cf45cd"],["/post/b6dbc3f5/index.html","bcc2b6f63e043ea7f32ebda40d6ac5ae"],["/post/bb6ff07f/index.html","74620775250df491dc8e920134ff70dd"],["/post/bcbdb63a/index.html","41a34576a7fed99e595a07b7199c71f7"],["/post/d811784c/index.html","e59b1bf7e1f8541695adaf6d073fdcba"],["/post/da904ab5/index.html","45046ce071dae6855134bb71395e2487"],["/post/e72b5a3a/index.html","77a3ffa0c985e7faf601361a401859dd"],["/post/e97079a9/index.html","d8e43aacaf55417695d3775ec53be932"],["/post/f605ecd9/index.html","8d7a921663abe7ac98d9bc4af0ab64e0"],["/sw-register.js","4b9ad7b84ecc97f9a29fba7e748e1ced"],["/tags/HNKJZYXY-OJ/index.html","9a5d8a73e9248b6247837a0ab09e8b4a"],["/tags/Java/index.html","7018f1de8f23bed1bab075b98e51cd1a"],["/tags/MVC/index.html","3f778f235f08eac3521487f959f8f13e"],["/tags/Maven/index.html","81533da355e7ba710c1579f4658ccea5"],["/tags/Mybatis/index.html","75ef5b179f12d5b67df397883365b22b"],["/tags/MybatisPlus代码模板/index.html","1836d0b156209d1202aa56e29557d108"],["/tags/Navicat/index.html","3ff5ad4e26eaac2ee6259167c3b443a5"],["/tags/NavigationDuplicated异常/index.html","6990323004922f45ac392bdcecd01129"],["/tags/OJ/index.html","73baccca4350ffc249de85d1a396d102"],["/tags/Spring/index.html","42b76c387516772f2c2a9e58dafeea9d"],["/tags/SpringBean生命周期/index.html","d7040d588105a9e96ad2a8c8d185ab5c"],["/tags/SpringBoot代码模板/index.html","13372e1d16c17727c3a292074959e0d9"],["/tags/SpringIOC/index.html","daaf62d80d9507f9d29f0c5753cec5d4"],["/tags/Spring注解/index.html","c6fb95937aab2d479966bb7ab0b7bc2b"],["/tags/Spring面试题/index.html","94e4bbf719ea81991778598b96e38d6b"],["/tags/Tomcat乱码/index.html","483d1f1753feffceaf0a3942811a2a50"],["/tags/Vue/index.html","7afe90ec051d6dc9b9ad963432ac4bf0"],["/tags/Vue学习笔记-尚硅谷天禹老师/index.html","f85e66a0a9b50dde94523aa7fa750cbf"],["/tags/Vue路由传参的三种方式/index.html","53afe68798dd4b4db178c728f8692cd7"],["/tags/bufferfly/index.html","0a8304d787d15746971fae05fe510e5a"],["/tags/idea/index.html","46abe5b48402515fcd43454e67783c82"],["/tags/index.html","00137e5fd82ecf78fba685ce5f880408"],["/tags/哔哔/index.html","174db9cfda6eebff6b9137902834cabf"],["/tags/奇怪的知识/index.html","7fb5cde6309683a1c20a77367839ab90"],["/tags/怎样科学上网/index.html","55a50cdb9670414ae520d0f612d70f95"],["/tags/数据库/index.html","a7085b55916b8040c19ad3d5a08c86b5"],["/tags/数据结构/index.html","647b5d10855c179b702cb35dd5000a1d"],["/tags/算法/index.html","4aa0ab966e8a454e03a72127ec408e54"],["/tags/编程笔记/index.html","e8d26cf317b35cb1ed4bb6746740f1dc"],["/tags/阿里云ECS/index.html","73f594d59a57d7641c05b0bfea7303c2"],["/tags/项目部署/index.html","71839bdcfc52ad88fb58da5960fda869"],["/timeline/index.html","03667439d40552f15429e8b61404420a"],["/workbox/index.html","c44e5df560e57e8d3c4415155fc8ffdc"]];
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
