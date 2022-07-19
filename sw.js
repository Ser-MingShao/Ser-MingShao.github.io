/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","200eb5a1a379aa7bc2e722a9d048bfc4"],["/Gallery/Hzw/index.html","8988805e490a04093c67c54a5757d95f"],["/Gallery/index.html","d239c70747acec37f29c1f50d8bc14ee"],["/archives/2022/02/index.html","b057039d08f2dd09fe6d23de759630ec"],["/archives/2022/03/index.html","1ff4ec29b394adc6c24a91d85647bbe0"],["/archives/2022/03/page/2/index.html","db15749f35e35b0681e3f8a7f53a3752"],["/archives/2022/04/index.html","445b319df5d80cbe4ce9e7c191ba1165"],["/archives/2022/05/index.html","3294198cc4600fa0358f5132a14ff30b"],["/archives/2022/06/index.html","770885370592cbccbc87de4a5b2368fa"],["/archives/2022/index.html","ddcf97e25017534c6f8f8af40b36307d"],["/archives/2022/page/2/index.html","c7c64b5bb5e51d0e7ca45f36658f8282"],["/archives/2022/page/3/index.html","1afc41700dae4f13c638d610a7b84f48"],["/archives/index.html","6c66925fafc9cd5df6778f8a9f18d74d"],["/archives/page/2/index.html","51ea638f551a3033b977bac8a34d7bec"],["/archives/page/3/index.html","6a3406fa559dc1cf53684a273c0d3476"],["/artitalk/index.html","c50c7b8ad99b2f9454bc43d831de4d42"],["/bb/index.html","948d552fe6c97fadd71128b0f272100b"],["/categories/Java/index.html","2f05f6cd003b67aff7c4da89ddb4d132"],["/categories/Java/page/2/index.html","d2cc560d7015baec146acaf5b0e6822e"],["/categories/Maven/index.html","37a5219bc523a2c8bd1017fdbd7ea1cd"],["/categories/Mybatis/index.html","9a887093823cc3f6ac2168c7b084b61d"],["/categories/Mybatis/注解开发/index.html","06b226f145ab0ad735a150121b9cb344"],["/categories/Mybatis/笔记/index.html","912c98b20afc4786fa9e3c10b27e4316"],["/categories/OJ/HNKJZYXY-OJ/index.html","f766caa2cf91b5a2f0b8694b77355c8f"],["/categories/OJ/index.html","217dd7a7689adb9dd70ab09e9463411f"],["/categories/Spring/EasyCode代码模板生成/index.html","2be7468b793f358d6328678d35932401"],["/categories/Spring/Spring5笔记/index.html","e6d0e6744976a26ef8bb04a2d5181e70"],["/categories/Spring/SpringAop介绍/index.html","2ec7fe4076ed722f9b3fd519bb5c0af0"],["/categories/Spring/SpringAop进阶/index.html","4df56ac376f4c4f5337b0436547ca9c8"],["/categories/Spring/SpringBean生命周期/index.html","3bf9b1bffab5a0adf39fdf2f3c0c2137"],["/categories/Spring/SpringIOC详解/index.html","833f677f2cdcea5d92fb8ab25d2f1375"],["/categories/Spring/SpringMVC笔记/index.html","792d489957aa27f9eb3dcd05128b2eb4"],["/categories/Spring/Spring注解/index.html","13907a4550f0b3308b107d31d38c4a38"],["/categories/Spring/Spring自动装配/index.html","ed7ea351d39d9253287e3131c9a9c772"],["/categories/Spring/index.html","93c5de902bdf635ac3c092da0097476f"],["/categories/Spring/page/2/index.html","948eb0f7258456c23c29476362b35282"],["/categories/Spring/四种依赖注入/index.html","4f9107d156c185ae5cc8432d7a2a81a7"],["/categories/Spring/插件/index.html","f122e04a0cad7fa00e8186a08eab89f5"],["/categories/Spring/面试题/index.html","1745b5192c55eb622d440c7d3794c059"],["/categories/Tomcat/index.html","b8c760e37536234dcf7a5fe781d9ce42"],["/categories/Vue/Vue-NavigationDuplicated异常/index.html","60b4808ad4bccda1e103cc9191288285"],["/categories/Vue/Vue天禹老师笔记/index.html","efe493a52fb43591cc97ac5e373c33fa"],["/categories/Vue/Vue路由三种传参方式/index.html","f22c1d77c12b62f4cc6e54f61e53fb91"],["/categories/Vue/index.html","66ea26e67c836dea71c05f4fcb4f47b9"],["/categories/bufferfly/index.html","2fa98f1630c2d936d0f41469dac2711c"],["/categories/bufferfly/哔哔/index.html","05cba8405a3a0e92423867abf8648402"],["/categories/bufferfly修改/index.html","fdbf782d64915c79bb20502e27e4365a"],["/categories/index.html","992dc0dd64c4f9f3ee9d638ff9ca68a5"],["/categories/奇怪的知识/index.html","21a25cbfa82ce9e6936c1c9132ed0d6f"],["/categories/奇怪的知识/为什么IDEA不推荐你使用-Autowired/index.html","a34f4c4186c31c8fbca8e743083f2aa3"],["/categories/奇怪的知识/怎样科学上网/index.html","5f1ea08206347cde87d606d540a382f5"],["/categories/数据结构/index.html","80afac77ad40170800eacaca0a090ebe"],["/categories/数据结构/循环队列/index.html","bd56975ea904f0f781b691741854dca1"],["/categories/数据结构/递归/index.html","852fae17573c53cd07641f85edba7768"],["/categories/数据结构/链表/index.html","1024c83df3ae76c89edb3516f373320a"],["/categories/算法/index.html","17ed3a126c1f9b1fcc0c7054bd95949c"],["/categories/算法/回溯/index.html","05c1a3b6ad003657a910e71ca72d589d"],["/categories/算法面试题/index.html","3d9b2c7a430a96e6cb0b845f794fb9f4"],["/categories/编程笔记/index.html","e183f17b1870b2304a5ef3cd8e6ec9ee"],["/categories/软件合集/Navicats/index.html","680f1eb444af00b5599ce8e746596006"],["/categories/软件合集/idea/index.html","647ae3cbad37fe203362a6020caa87aa"],["/categories/软件合集/index.html","7e25fefde4ddd5ad11f3b5369e8638eb"],["/categories/阿里云/index.html","deeaa9229fed31c8fa42e977dc3bb12c"],["/categories/阿里云/项目部署/index.html","3cf73a939fd227ad7f77454f5cbed979"],["/comments/index.html","197ecf4b18f3b52b463fdf897221d3ad"],["/css/aplayer/APlayer.min.css","b554a8c66b57ac89dbd304202c019ddd"],["/css/custom/aplayer.css","3df287f09aff5387e1a494a86ec9ed2b"],["/css/custom/artitalk.css","a16a5cb11d1616450719d14dcd69d3f7"],["/css/custom/clkp.css","e0495c68539c27059be54f05721a8cfa"],["/css/custom/fixed_comment.css","353c9b9de1fa7f54130092e5140cbd1f"],["/css/custom/font.css","a8699788b930c8d4f8c5fcd9920d72e5"],["/css/custom/futetli.css","80cdcdbbfb5dcfb0ea7269107edbe453"],["/css/custom/icon.css","142e80c9c6a74a8bded77650fc0cb1ab"],["/css/custom/loading_wizard.css","9e542764eb21c90da200165acbcbc816"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/custom/ws.css","263c441f1b9efaa18490e789af940af8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","edd3ad6da83f792534e2a782fd5a8761"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","119ee096a1122e014640ea50ff8ab46f"],["/forum/index.html","49400d9b5d659c607fd330e1337911b5"],["/img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","6baff6e59ba4274432bb79ec252f7104"],["/img/bg02.jpg","90d242c4f3b437c9c9cccc0c8b644d6d"],["/img/bg03.png","5d854caa4ee98da101700b23c37b45cc"],["/img/favicon.png","a2fa8c803f86057a512902dcce27f17f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/log.png","347768bb9c3b1842d353f4ef6f0cff70"],["/img/wechat.png","b0be0e3b83aadedc472772f3935f8cc2"],["/img/wx.png","6e84965eb49716bbb5b9ce29a512eeca"],["/index.html","c903b58a02a7ebdac0a07d717205211e"],["/js/Meting.min.js","f52073ee95c3f319e57532eac06f16ca"],["/js/custom/comments.js","6cde9f390e092aa03b77f8a663d12aa9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/custom/fixed_comment.js","105ef085d165e2b75aed7eb1d6cccc8d"],["/js/custom/grayscale.js","c6abd8e29326703430a8b0a6c17f76c6"],["/js/custom/nav.js","a7981d6c5f9ebad06d19b89ff1738662"],["/js/custom/runtime.js","5723eb10b7f63c9c59f4237257ea289f"],["/js/custom/ss.js","cc152e5838e702ae5740741a0db313eb"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/wow_init.js","3507866c4b2902dc9de3bf21c76625a3"],["/js/main.js","d4533ca549681f965ce4cc4bc2fb5725"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","58b4d27a465d51d8ef5ad4f04cfbd285"],["/ms/css/Lete.css","ce50e480777259fa32af759844295eef"],["/ms/css/background.css","1f048c7f7acf6d1a564c475275a7bde2"],["/ms/js/Lete.js","501d50da17faa73eccc7e015dd38ab2d"],["/music/index.html","12a4a14484dfee77fbf86002f4bea6eb"],["/page/2/index.html","29aeb90a16b11dbb359ed0bb908b5090"],["/page/3/index.html","75b3ecba977008497381a1e796f1b4e4"],["/page/4/index.html","ca2131e288c4102352bac75404ec2d09"],["/post/13e760ef/index.html","6f6429348645a0b1c3edefb8f3301bee"],["/post/1d0508a6/index.html","e3bc75b70849f071bf51c62818d3c68c"],["/post/1d84dc88/index.html","6d342bddaa7d4f3f5f90c25706dfe1e8"],["/post/319c21eb/index.html","685816c7973079fb6744eacaf20b7848"],["/post/3208ee03/index.html","2691b52575adb286c55f98c1fa9bca33"],["/post/32277b7/index.html","fd9eecdafcba35f11337888cb3785511"],["/post/3a723147/index.html","15026c42f353a03f99f454fe03c0bdb9"],["/post/3d190b4f/index.html","b5dfe16dc2e2c4b4b8389b417d97927e"],["/post/5dd00982/index.html","efcec9ebc743f017fbcec960706cc43c"],["/post/63755f3a/index.html","923ed7f2abb804939d49f76388585b54"],["/post/6e9321d6/index.html","54c13e73e1d74a4ed82d452992c8616e"],["/post/7047b0e7/index.html","510db5b67695c1516a3817d0d23670da"],["/post/75ce1e02/index.html","0102d9893fa0ed369c38eeb4975854c5"],["/post/7a5d2d7e/index.html","f1102bcd44ab0bf2c87c16b0064e87d3"],["/post/7fd48667/index.html","86a2fcd94ee1e2ab278868a45a56efae"],["/post/841c624e/index.html","1e4c4a840dfa902a0614d07051343d6e"],["/post/86aff880/index.html","8aa67cdf93c1348014fe11ec82628dd8"],["/post/93f3f3c2/index.html","b3cb9bb428fde8514c078bb43ff13349"],["/post/9b97716e/index.html","91c242e78da3390d78b749cfcb8016e6"],["/post/9dadefec/index.html","585c703739fe0e9b8665cb2748a245ad"],["/post/a528d135/index.html","26d08cf8282afe8f92824b9cf96fd4ad"],["/post/b3b6ba72/index.html","fe75079ffc64d1d310c862643174bc1e"],["/post/b66774c1/index.html","f2536323536e5fa95baab5369452810e"],["/post/b6bbba88/index.html","0675da5d1df76d70ddc112d6e5cf45cd"],["/post/b6dbc3f5/index.html","bcc2b6f63e043ea7f32ebda40d6ac5ae"],["/post/bb6ff07f/index.html","74620775250df491dc8e920134ff70dd"],["/post/bcbdb63a/index.html","41a34576a7fed99e595a07b7199c71f7"],["/post/d811784c/index.html","e59b1bf7e1f8541695adaf6d073fdcba"],["/post/da904ab5/index.html","45046ce071dae6855134bb71395e2487"],["/post/e72b5a3a/index.html","77a3ffa0c985e7faf601361a401859dd"],["/post/e97079a9/index.html","d8e43aacaf55417695d3775ec53be932"],["/post/f605ecd9/index.html","8d7a921663abe7ac98d9bc4af0ab64e0"],["/sw-register.js","1b6907be0501e9d7f9245869e8a3deb2"],["/tags/HNKJZYXY-OJ/index.html","438e3aa10b583ec79e1506666528fc7b"],["/tags/Java/index.html","c62dc6a823719f0453ddcb15c36b51f5"],["/tags/MVC/index.html","85fc0bee4a10c259943301bed7913c59"],["/tags/Maven/index.html","8f3a2dbe7bb77564abc4ff4d9d843e60"],["/tags/Mybatis/index.html","6872bdad43c8ef3347cd5130bcf247c3"],["/tags/MybatisPlus代码模板/index.html","d1000fc06fe779176a95cd5af0ec7e63"],["/tags/Navicat/index.html","f3c5023de1921c724ee4db8eb7ddf79f"],["/tags/NavigationDuplicated异常/index.html","58f375fa465fec8d00107a8b78e63e73"],["/tags/OJ/index.html","b02c14979109fd924422c051cedab1d5"],["/tags/Spring/index.html","c1e2d99ec26c4a96762757360a4f37ab"],["/tags/SpringBean生命周期/index.html","014b3f1eaafe793a2d8741f4d8a603d7"],["/tags/SpringBoot代码模板/index.html","597f016b1f43ecd931803634647683cb"],["/tags/SpringIOC/index.html","2e9953d797cc1d62043f5137fb70cc44"],["/tags/Spring注解/index.html","1e2de97524dc2e450e7c5e31be6446c2"],["/tags/Spring面试题/index.html","46da87486a4f1721beb25ec6a29cf5c1"],["/tags/Tomcat乱码/index.html","ccb3740528a6097a962f162d47a080ae"],["/tags/Vue/index.html","c2d44d7f65fc0722089b49049826426f"],["/tags/Vue学习笔记-尚硅谷天禹老师/index.html","44bc9db877d08b3dbb6187b6b2cd7f5d"],["/tags/Vue路由传参的三种方式/index.html","200330f95dd08fba18ba72192b614735"],["/tags/bufferfly/index.html","774fc651bd1f4efcb13c9de067359143"],["/tags/idea/index.html","a01e37d6b3532dea2b2f0344115d7b64"],["/tags/index.html","57f6b74b50692583cdf19c4a484e3a97"],["/tags/哔哔/index.html","ea38a5a9ebb476b295a2f7cfea1a79e7"],["/tags/奇怪的知识/index.html","75f6aed42d9dde0b78ae79fe4acbdc1c"],["/tags/怎样科学上网/index.html","c3400cfa19685ac229d83e535e125868"],["/tags/数据库/index.html","e758b0cd2451df46f51f82ed99fff512"],["/tags/数据结构/index.html","31926110f118b0107710db7cc049b8ff"],["/tags/算法/index.html","46bc2510c2deb59ec4349c1bde18e202"],["/tags/编程笔记/index.html","fd9fab744835fa08e26179f9217872bc"],["/tags/阿里云ECS/index.html","1c82b56c47e679c7d3b2e17402b924b4"],["/tags/项目部署/index.html","722365e6a912fae3c9a48205714e0096"],["/timeline/index.html","072e21b94f709b06a85773f7e780d33d"],["/workbox/index.html","e950a5feef99d5512b64cf27cb6d4b5d"]];
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
