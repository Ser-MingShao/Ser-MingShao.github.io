/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","09f0fef9b2deb6b2554a2415d48f9691"],["/Gallery/Hzw/index.html","526ef5bb65420e8b18ab6b383b902176"],["/Gallery/index.html","3da0a4e0b4c1c294fa4a2055dc473cfe"],["/archives/2022/02/index.html","74c5bfecdb137d5adb94f576c0f184e1"],["/archives/2022/03/index.html","1a6e2dfce6f25ce26ab45c81487d3734"],["/archives/2022/03/page/2/index.html","506a414de995d1085b35e3cc966f9ea4"],["/archives/2022/04/index.html","d4ab8f8bbe4adcfc0fa546639ea93cb6"],["/archives/2022/05/index.html","13b290f607bb2d0214476a77a14aee41"],["/archives/2022/06/index.html","4bed941e79bae759dfd3fb02f04e6b8b"],["/archives/2022/07/index.html","3071bac5809402d6c8dee8ec43368b14"],["/archives/2022/index.html","c5f22923acb639486b12aff8431507a0"],["/archives/2022/page/2/index.html","3fad69fb3a0e9a498124d091031e1004"],["/archives/2022/page/3/index.html","7ff20aa708c2ba5daf9a564ec1d4a0fc"],["/archives/index.html","6f8fe39e3dd5bf488ec58ffcba75662a"],["/archives/page/2/index.html","34a666c5e2d39236380dff94409469dc"],["/archives/page/3/index.html","20041fbd54237265fa5488c49db255cd"],["/artitalk/index.html","443a9d5683ca3097b694e7b1c15a263a"],["/bb/index.html","96b14d4774566a7feb1bc734f8628366"],["/categories/Java/index.html","7510a4860647df274fa56ec3d14c055e"],["/categories/Java/page/2/index.html","88e5f9f679573aa69f7bc986a46f5bca"],["/categories/Maven/index.html","a16eea7a43e9fb057a64561c5032db47"],["/categories/Mybatis/index.html","839033712d1db66315687f7191834eec"],["/categories/Mybatis/注解开发/index.html","1762afb19f19dd4ef1c1ce47b854b9ca"],["/categories/Mybatis/笔记/index.html","12161edf22f8593d46b864725a7b64fa"],["/categories/OJ/HNKJZYXY-OJ/index.html","cf625c963de43b15095f6735efc5c0af"],["/categories/OJ/index.html","35a1e6aabb190600224805fac202c465"],["/categories/Spring/EasyCode代码模板生成/index.html","97397afac97514fb6ed867dfb64b6276"],["/categories/Spring/Spring5笔记/index.html","391ea83eb8d1cb032a095580fc6f81bd"],["/categories/Spring/SpringAop介绍/index.html","b0da504dfa6fc012596e1e7a8515ac12"],["/categories/Spring/SpringAop进阶/index.html","1bbd8b4c5acf64ca2dc73616fa038f2a"],["/categories/Spring/SpringBean生命周期/index.html","55419aa674611a0f6ddcd8801c53e635"],["/categories/Spring/SpringIOC详解/index.html","ebfeb22f096fced3cbb2d90034d75c23"],["/categories/Spring/SpringMVC笔记/index.html","177d532215bd4a48a3762248b00dcb9d"],["/categories/Spring/Spring注解/index.html","5c0f42fd119b1bfbf4c5a5deee004a88"],["/categories/Spring/Spring自动装配/index.html","145f28881f9169c1b2565e62f052e9fc"],["/categories/Spring/index.html","3e649df2eb6ef15b72cb333e0204eb1c"],["/categories/Spring/page/2/index.html","74f50b2e7b9eb7a0f192a83a6c6af13e"],["/categories/Spring/四种依赖注入/index.html","a793ee8c2f84316f3f4da730d560a113"],["/categories/Spring/插件/index.html","817f1d8567145ae4f32ffbe79e899a73"],["/categories/Spring/面试题/index.html","1dc8554f8f75a1652d3b5fdd05665b71"],["/categories/Tomcat/index.html","e56f6bc754d48759bf0f8607beeb6bbc"],["/categories/Vue/Vue-NavigationDuplicated异常/index.html","99abfd448d224ff0514fd20ed1f8448b"],["/categories/Vue/Vue天禹老师笔记/index.html","96c1ff1ea794c509e23f4fa26a8aa15e"],["/categories/Vue/Vue路由三种传参方式/index.html","eb71a77eac9cdba5cfdcc25b7b214697"],["/categories/Vue/index.html","80cbc45b8e254a32eb7747a5033eb002"],["/categories/bufferfly/index.html","4c2b36d7e8d29e2bc348ef22ce6c8a9d"],["/categories/bufferfly/哔哔/index.html","719d2fb7da7933e2c6b45e0c9668a786"],["/categories/bufferfly修改/index.html","4ddc01c7854e9b2405df5b2b8dd12b1e"],["/categories/git/index.html","b6f00fb7fd4e87807a7b5cdc17982a81"],["/categories/index.html","82938e181ba8c1ec5e4183cc193f973b"],["/categories/奇怪的知识/index.html","516886f40b32186941f1a066e8e50a5d"],["/categories/奇怪的知识/为什么IDEA不推荐你使用-Autowired/index.html","fd143e0f7d0d64361f6779c073acdaef"],["/categories/奇怪的知识/怎样科学上网/index.html","4243a7a6c4feb49d2b63aa9dfcb19645"],["/categories/数据结构/index.html","9a78bb918c5b745949ccd3b8e57247fe"],["/categories/数据结构/循环队列/index.html","6f866061a469e6fa95e5b7278f7c1b09"],["/categories/数据结构/递归/index.html","fbbf17f12e88f6c4e4a2f0a6fe2a6d58"],["/categories/数据结构/链表/index.html","83367c337e1ed45898c64e6863e96d94"],["/categories/算法/index.html","6000eae9c1323cbc7b114deca30f0228"],["/categories/算法/回溯/index.html","be44aae2a8fa16b1166c14a2238bd620"],["/categories/算法面试题/index.html","b599d1609971ea404da7f2afec0a24c1"],["/categories/编程笔记/index.html","20bf71cc8f1a31e75961f64330685f0c"],["/categories/软件合集/Navicats/index.html","fddb8b8e582d00e86d04fd69eb4b13ce"],["/categories/软件合集/idea/index.html","5079a2f489a530f802c8cf44d5abacb8"],["/categories/软件合集/index.html","eaeb26c48807c902cee0dad3c1c9025f"],["/categories/阿里云/index.html","c53f4dc9a3479f763dcc5c040a642548"],["/categories/阿里云/项目部署/index.html","a81f46da494364d0af42ac093779a3c0"],["/comments/index.html","e6bf016813c2549fa496562c427558fb"],["/css/aplayer/APlayer.min.css","b554a8c66b57ac89dbd304202c019ddd"],["/css/custom/aplayer.css","3df287f09aff5387e1a494a86ec9ed2b"],["/css/custom/artitalk.css","a16a5cb11d1616450719d14dcd69d3f7"],["/css/custom/clkp.css","e0495c68539c27059be54f05721a8cfa"],["/css/custom/fixed_comment.css","353c9b9de1fa7f54130092e5140cbd1f"],["/css/custom/font.css","a8699788b930c8d4f8c5fcd9920d72e5"],["/css/custom/futetli.css","80cdcdbbfb5dcfb0ea7269107edbe453"],["/css/custom/icon.css","142e80c9c6a74a8bded77650fc0cb1ab"],["/css/custom/loading_wizard.css","9e542764eb21c90da200165acbcbc816"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/custom/ws.css","263c441f1b9efaa18490e789af940af8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","edd3ad6da83f792534e2a782fd5a8761"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","695ef516790f57970698b396b3240dd8"],["/forum/index.html","833d42ca4eb9b653dcbc2ccd548b9f6a"],["/img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","6baff6e59ba4274432bb79ec252f7104"],["/img/bg02.jpg","90d242c4f3b437c9c9cccc0c8b644d6d"],["/img/bg03.png","5d854caa4ee98da101700b23c37b45cc"],["/img/favicon.png","a2fa8c803f86057a512902dcce27f17f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/log.png","347768bb9c3b1842d353f4ef6f0cff70"],["/img/wechat.png","b0be0e3b83aadedc472772f3935f8cc2"],["/img/wx.png","6e84965eb49716bbb5b9ce29a512eeca"],["/index.html","d345dbca46e0ba51d796f56fcd32bde9"],["/js/Meting.min.js","f52073ee95c3f319e57532eac06f16ca"],["/js/custom/comments.js","6cde9f390e092aa03b77f8a663d12aa9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/custom/fixed_comment.js","105ef085d165e2b75aed7eb1d6cccc8d"],["/js/custom/grayscale.js","c6abd8e29326703430a8b0a6c17f76c6"],["/js/custom/nav.js","a7981d6c5f9ebad06d19b89ff1738662"],["/js/custom/runtime.js","5723eb10b7f63c9c59f4237257ea289f"],["/js/custom/ss.js","cc152e5838e702ae5740741a0db313eb"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/wow_init.js","3507866c4b2902dc9de3bf21c76625a3"],["/js/main.js","d4533ca549681f965ce4cc4bc2fb5725"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","284edeee498bfe9c8cca185ea057f1fe"],["/ms/css/Lete.css","ce50e480777259fa32af759844295eef"],["/ms/css/background.css","1f048c7f7acf6d1a564c475275a7bde2"],["/ms/js/Lete.js","501d50da17faa73eccc7e015dd38ab2d"],["/music/index.html","01dd613c1188724c59ed83a57ed2f168"],["/page/2/index.html","749f28799442fac80789f568ea552dc1"],["/page/3/index.html","3a4d12a7b877e98dc2fe72142cb3f0a7"],["/page/4/index.html","8684796a7d16cc0ef46c9756ca579952"],["/posts/13e760ef/index.html","c38fa85692d003f5a2b27c1817d40b0c"],["/posts/1d0508a6/index.html","5ab7394888a6c6d098e8960c9db77263"],["/posts/1d84dc88/index.html","c60a5349dd02c3536139e10bc5e2a365"],["/posts/319c21eb/index.html","d146a19e24cb091811f2d5754f9dd8b1"],["/posts/3208ee03/index.html","af37790a597ba490a9c41c6b9ffe437d"],["/posts/32277b7/index.html","dfc0665d985ff9d3b8172ae9ab62db9b"],["/posts/372934289/index.html","e9435c8301784ac47de0d75b73a91c9c"],["/posts/3a723147/index.html","096732d29a5e036bf3bf6595c54edcd7"],["/posts/3d190b4f/index.html","fbb4901a375cec5a4aea0cd8142d6e16"],["/posts/5dd00982/index.html","34de67c5bd20ec7bd78a05c506d18973"],["/posts/63755f3a/index.html","18b7662853f272286d321b7078bf81b0"],["/posts/6e9321d6/index.html","72c50f7e9fc23255f0858369ff7da6c6"],["/posts/7047b0e7/index.html","d863dd8fae0e3a462af9194b4db9d641"],["/posts/75ce1e02/index.html","c3f479254da5d9e3f9bb07fee2fc088c"],["/posts/7a5d2d7e/index.html","2b33da060707b6c2aaa8c30803fb9eec"],["/posts/7fd48667/index.html","2778c57a6a3ada0a5c380c6836715a58"],["/posts/841c624e/index.html","0ae09c0c2c8fa88902de1ed64ca03958"],["/posts/86aff880/index.html","b3d339b834ab0e364f86bcaae75584cf"],["/posts/93f3f3c2/index.html","c99cff310b0472570ae3acddd6efd1c3"],["/posts/9b97716e/index.html","7007b7b10f2f8ef7e07071b201ab71a0"],["/posts/9dadefec/index.html","7e47b5d369f4917ce885043b5d8187eb"],["/posts/a528d135/index.html","c96fe9b8f7253718f40323b4f267faa5"],["/posts/b3b6ba72/index.html","7a84918b419806083f0af85403301c40"],["/posts/b66774c1/index.html","3c67d60ef8191769753f9443bd522c1b"],["/posts/b6bbba88/index.html","2194439d0df6d356ba3d62e7c14ae5b0"],["/posts/b6dbc3f5/index.html","4233b46a532b0350c4e2a62eebe7c7db"],["/posts/bb6ff07f/index.html","10628e351077b906df03ed16dd3f58cc"],["/posts/bcbdb63a/index.html","e828c5eab70ac75e20207c07e0093175"],["/posts/d811784c/index.html","2a6bc99d467e06065f09670bf3dcaf6c"],["/posts/da904ab5/index.html","65bd28ea01a0fbaa73e97f82e95eb865"],["/posts/e72b5a3a/index.html","ce631da1db42f78700696673285ac26c"],["/posts/e97079a9/index.html","01c769ea7eeeb383505d13b890f3325f"],["/posts/f605ecd9/index.html","76679c43dedf1ff1aaa92db36ac1a194"],["/sw-register.js","034737a87ccf53078b5b5f1a55f3f3df"],["/tags/HNKJZYXY-OJ/index.html","8e9d93f3b8d2907f76cd1cc41aa15d32"],["/tags/Java/index.html","53b232394715d10ed6e9825ed92b4b58"],["/tags/MVC/index.html","17b783748f4248d3b5b91249ffb9aae2"],["/tags/Maven/index.html","8c3cf6387c2e4b54fe2146b514fe20cf"],["/tags/Mybatis/index.html","ba2c07e75a8647b6cb9a62ecaa508091"],["/tags/MybatisPlus代码模板/index.html","d81da598ec2895636e475e377683b23b"],["/tags/Navicat/index.html","6ff6ab08be962335b3ca8f409c1171fd"],["/tags/NavigationDuplicated异常/index.html","3507a9f7b4ef2fe7b5d9caf6c5d5331c"],["/tags/OJ/index.html","871b9b69fefa60a44fd7fb82d98f755d"],["/tags/Spring/index.html","16cb24fac2f8dc67894e6774f8d8462a"],["/tags/SpringBean生命周期/index.html","f516e1d3cc7bafc161a203964828f875"],["/tags/SpringBoot代码模板/index.html","d69cd7de88759e66c7d06dbb27526720"],["/tags/SpringIOC/index.html","8fd2dd176b17d21400848be784cf850e"],["/tags/Spring注解/index.html","f47a1431089af683013f85d6cfa64054"],["/tags/Spring面试题/index.html","39492ff3f7b196c86daaef641dc3fc8d"],["/tags/Tomcat乱码/index.html","abbe13d73568f01bcec8a47fb792478b"],["/tags/Vue/index.html","81937d2ade5b916622e5e2b027df6e41"],["/tags/Vue学习笔记-尚硅谷天禹老师/index.html","56d46b64253a02526ed7515ae84d0865"],["/tags/Vue路由传参的三种方式/index.html","733d34f12e4b2596fadc252913eb8768"],["/tags/bufferfly/index.html","1799c0e0b653ebe42fda11cdd8182d07"],["/tags/git/index.html","2e147c378836ce163e76ae6ab2b263c1"],["/tags/idea/index.html","5ca356b8c24fd21f68e22eca64cd4f74"],["/tags/index.html","224289a1b2de4a0ebeb8e08442d9ebca"],["/tags/哔哔/index.html","146782d7a13c485397dc3c2d632b1edb"],["/tags/奇怪的知识/index.html","77c4eb25ec518704d86c8b370f94fc0a"],["/tags/怎样科学上网/index.html","85312733bf00004fbe5d69928f6f51b3"],["/tags/数据库/index.html","f2007a69d1e89dea8e24873d0fc2a672"],["/tags/数据结构/index.html","60c2b75f1d05ec4df1327cb75c1243b3"],["/tags/算法/index.html","b249ae9c8bd7c1183ab359cacf484ef8"],["/tags/编程笔记/index.html","425ce4c5fecd0f4bad2816b38aeb6045"],["/tags/阿里云ECS/index.html","66b81f89f20cf7596e15532efa2b7681"],["/tags/项目部署/index.html","58987813c8b82872cd9e62a6c511774c"],["/timeline/index.html","8fd43ade9c52d5727e01c47d5ab64fa5"],["/workbox/index.html","b59c2ff54822f500cd4168e5c0d82744"]];
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
