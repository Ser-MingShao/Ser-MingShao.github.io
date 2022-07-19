/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","af6ab39a8f73d3ea7b42b9a49094f60a"],["/Gallery/Hzw/index.html","b3c9b39940f23832a5e718b9edcc9d2d"],["/Gallery/index.html","fada15769e006f0057081b6db82991d7"],["/archives/2022/02/index.html","0d77c9ac16e1b69318602f5ce7ba7a71"],["/archives/2022/03/index.html","51fc6a8c7863e539d64c4deeeb89c2ca"],["/archives/2022/03/page/2/index.html","bc05359f6121236851d3ddf5dde895a7"],["/archives/2022/04/index.html","6e5a3592809078cd2e96a0b8d3c6b786"],["/archives/2022/05/index.html","10b3642f18cff17d074520270650dc47"],["/archives/2022/06/index.html","14b78ded79062739c587b855fc4f3907"],["/archives/2022/07/index.html","ec3269a7e4dc55b46db2a1c3c674e4ca"],["/archives/2022/index.html","daca54b56f744b847ba6e7ac9d4d3626"],["/archives/2022/page/2/index.html","d8294787d7d43ee7ecf4c1011627c93a"],["/archives/2022/page/3/index.html","f525d77ff9bb01c43bfc85f814eccbe0"],["/archives/index.html","1ac500e49bd61c4824a62c09058e8044"],["/archives/page/2/index.html","f1e9f4d58a730f3e4dcd0ef1a52c5fe4"],["/archives/page/3/index.html","b423df2664c2048290706c0196946605"],["/artitalk/index.html","32ab658f0acba2f109e3164197fe6051"],["/bb/index.html","0eaa97d0854b0301d088d3de3ae50894"],["/categories/Java/index.html","4dcbc978d0db3ebd7885875e86a4d76d"],["/categories/Java/page/2/index.html","4a4b0e35ded874f349e080d1ede07a2e"],["/categories/Maven/index.html","a64682238a10e7a905f537cfcddda0db"],["/categories/Mybatis/index.html","ab4db8543781b93b5f5304575fa2bd0e"],["/categories/Mybatis/注解开发/index.html","96cd0c059eb0b9991c7a7084c9064939"],["/categories/Mybatis/笔记/index.html","33d7a9b8e1763087c28f9ef836e3564e"],["/categories/OJ/HNKJZYXY-OJ/index.html","eaccae280c81c1840345c9d6e896deda"],["/categories/OJ/index.html","d4f90fe11fcf3b0c6a28888e7ccf0f26"],["/categories/Spring/EasyCode代码模板生成/index.html","3941a9d09883ad397da7f6d7ee2e7541"],["/categories/Spring/Spring5笔记/index.html","6821982358af9f8f2b1144a98c2d889e"],["/categories/Spring/SpringAop介绍/index.html","c5e1a428dde7f827327a40f877416224"],["/categories/Spring/SpringAop进阶/index.html","4a4a47bee19d41d07bf45740937a4afb"],["/categories/Spring/SpringBean生命周期/index.html","de3ca552078362c06024c561a92fdeb3"],["/categories/Spring/SpringIOC详解/index.html","ad15c2d9eeff91d216f8f8d450fca2c3"],["/categories/Spring/SpringMVC笔记/index.html","b227b60e138ca89741e74d6faf6e84c2"],["/categories/Spring/Spring注解/index.html","01ec070d0d57bb504ac62798907d3da4"],["/categories/Spring/Spring自动装配/index.html","c363cc79d8adae657760e8078628cfed"],["/categories/Spring/index.html","f2dfff9ec1e9848f76a83426d28a2684"],["/categories/Spring/page/2/index.html","6ad683bf6ce78fa2a12d8a7aa830f01f"],["/categories/Spring/四种依赖注入/index.html","78f9186c686718b4c4584494d6c513f2"],["/categories/Spring/插件/index.html","0aa88f839c4d723ad923a0367b4b01ee"],["/categories/Spring/面试题/index.html","70f9295d34d3a9670921dead917bb394"],["/categories/Tomcat/index.html","334e8f42dd5d0c629f4ff403dfa4f6c2"],["/categories/Vue/Vue-NavigationDuplicated异常/index.html","b931cdf731c5c26b493d8edc703ae3e6"],["/categories/Vue/Vue天禹老师笔记/index.html","d879686d4059530f1aaeea4f0feee320"],["/categories/Vue/Vue路由三种传参方式/index.html","10d77e7d29c44fa7b6b9e9a5cfa4c725"],["/categories/Vue/index.html","5be38f506ef3bb4d2c5d8ae256d580ae"],["/categories/bufferfly/index.html","7e75526b0a60a3d8604881f3e06084e3"],["/categories/bufferfly/哔哔/index.html","c2b400cd2af01ae1337954fd160da008"],["/categories/bufferfly修改/index.html","b21c625c1e2170dbe475c4c534947114"],["/categories/index.html","b890bdfaef1c863648e9d63511eb581d"],["/categories/奇怪的知识/index.html","38dd0f080ceb205b7e89a1f77e456a5f"],["/categories/奇怪的知识/为什么IDEA不推荐你使用-Autowired/index.html","0a5c16a6ce69abde3c3ba70259f9edb0"],["/categories/奇怪的知识/怎样科学上网/index.html","fd00ecada198bbe44f056de834ff09b2"],["/categories/数据结构/index.html","5101e12948f2e077cca7466de6ce32b7"],["/categories/数据结构/循环队列/index.html","71b4006c423de659bb53d1d135d0180d"],["/categories/数据结构/递归/index.html","8de15e5d3acf4d6293b29f006d9e4789"],["/categories/数据结构/链表/index.html","2ca8ac933bc64ff894953275438a9c0a"],["/categories/算法/index.html","e0346708a7fdbce2778f837f668dd527"],["/categories/算法/回溯/index.html","a4213d5c4509665d235688598f175bc4"],["/categories/算法面试题/index.html","50a3b1560043e92985bd89f5a30f4194"],["/categories/编程笔记/index.html","6ec2326fb8332f3651b83552b602813d"],["/categories/软件合集/Navicats/index.html","c88818693c0eccacb8d913fe697e4c14"],["/categories/软件合集/idea/index.html","0a7739323190bafd1559eda09cb7bb90"],["/categories/软件合集/index.html","de66c5bc5e1a8849cf49fe35c85ea268"],["/categories/阿里云/index.html","de7ba763fedc0e0bd2adb3297f6cd27c"],["/categories/阿里云/项目部署/index.html","b3f85378a2a886b86ad3ae1c6b51231d"],["/comments/index.html","45861ab9493baf81edfe967de0cab19a"],["/css/aplayer/APlayer.min.css","b554a8c66b57ac89dbd304202c019ddd"],["/css/custom/aplayer.css","3df287f09aff5387e1a494a86ec9ed2b"],["/css/custom/artitalk.css","a16a5cb11d1616450719d14dcd69d3f7"],["/css/custom/clkp.css","e0495c68539c27059be54f05721a8cfa"],["/css/custom/fixed_comment.css","353c9b9de1fa7f54130092e5140cbd1f"],["/css/custom/font.css","a8699788b930c8d4f8c5fcd9920d72e5"],["/css/custom/futetli.css","80cdcdbbfb5dcfb0ea7269107edbe453"],["/css/custom/icon.css","142e80c9c6a74a8bded77650fc0cb1ab"],["/css/custom/loading_wizard.css","9e542764eb21c90da200165acbcbc816"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/custom/ws.css","263c441f1b9efaa18490e789af940af8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","edd3ad6da83f792534e2a782fd5a8761"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","c0d1ecc23f01a29f317186fd0a210ad3"],["/forum/index.html","21285299ab55cca9968799e7d49279d2"],["/img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","6baff6e59ba4274432bb79ec252f7104"],["/img/bg02.jpg","90d242c4f3b437c9c9cccc0c8b644d6d"],["/img/bg03.png","5d854caa4ee98da101700b23c37b45cc"],["/img/favicon.png","a2fa8c803f86057a512902dcce27f17f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/log.png","347768bb9c3b1842d353f4ef6f0cff70"],["/img/wechat.png","b0be0e3b83aadedc472772f3935f8cc2"],["/img/wx.png","6e84965eb49716bbb5b9ce29a512eeca"],["/index.html","e0f719b125320c3c6efb38fc3e2b173c"],["/js/Meting.min.js","f52073ee95c3f319e57532eac06f16ca"],["/js/custom/comments.js","6cde9f390e092aa03b77f8a663d12aa9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/custom/fixed_comment.js","105ef085d165e2b75aed7eb1d6cccc8d"],["/js/custom/grayscale.js","c6abd8e29326703430a8b0a6c17f76c6"],["/js/custom/nav.js","a7981d6c5f9ebad06d19b89ff1738662"],["/js/custom/runtime.js","5723eb10b7f63c9c59f4237257ea289f"],["/js/custom/ss.js","cc152e5838e702ae5740741a0db313eb"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/wow_init.js","3507866c4b2902dc9de3bf21c76625a3"],["/js/main.js","d4533ca549681f965ce4cc4bc2fb5725"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","340f679c910565db32b6001d38d520e2"],["/ms/css/Lete.css","ce50e480777259fa32af759844295eef"],["/ms/css/background.css","1f048c7f7acf6d1a564c475275a7bde2"],["/ms/js/Lete.js","501d50da17faa73eccc7e015dd38ab2d"],["/music/index.html","c75824a985af766e11bd4cb34e1448b5"],["/page/2/index.html","af0b99b7a8fd30aa418fe52bdc8e4661"],["/page/3/index.html","767b196a18b996625455ba68bd3084a2"],["/page/4/index.html","176880625e66cacea77e4c1a857d0f87"],["/posts/13e760ef/index.html","793cc774b0a4facb345646660b5b8128"],["/posts/1d0508a6/index.html","8f83b54e253f7565eab399f56ad655ab"],["/posts/1d84dc88/index.html","d6392148060fb0a3971dd4d09e9f3df3"],["/posts/319c21eb/index.html","47ac4017f72776dfb6bccef936b42271"],["/posts/3208ee03/index.html","e4d541fd6da56ff6c7542f72f50782ae"],["/posts/32277b7/index.html","00ae5bb68c1a58c87615bff980cbea92"],["/posts/372934289/index.html","c140637fdc35f60ec58e77c7eba486eb"],["/posts/3a723147/index.html","6e720a9c145a684a7682b92c75236c06"],["/posts/3d190b4f/index.html","af25a64e7be3b4fdb2201b467da0c057"],["/posts/5dd00982/index.html","2635364331c17078547bdbddd80a51a8"],["/posts/63755f3a/index.html","cdac1b282924f921a748ee2813eb6c7b"],["/posts/6e9321d6/index.html","af23c15223850b51a667cb4fdbd324da"],["/posts/7047b0e7/index.html","40ebd76767b5da53923bcab3b15cb8c4"],["/posts/75ce1e02/index.html","9c65d873609fe9d82a2fd38bf4dcd543"],["/posts/7a5d2d7e/index.html","01a605eeb6a916610952cc46ffe0e16c"],["/posts/7fd48667/index.html","084c52b0efefeb6b23677d6802873ca1"],["/posts/841c624e/index.html","fa79d4fd0b203b26f8967a1265e517d5"],["/posts/86aff880/index.html","4fe25f4bd6bfa461c8887eb7991f40b0"],["/posts/93f3f3c2/index.html","33225061d71f5df6daad8e1fe2246d05"],["/posts/9b97716e/index.html","259bf3bfd1c547920cfe6d265bd4f91b"],["/posts/9dadefec/index.html","7f3d0d3735d49aa14d298325b69cbfc5"],["/posts/a528d135/index.html","56f9eda293b93d1ea9ce91628b237d1f"],["/posts/b3b6ba72/index.html","c41c9915da548e607ea36460b7d55b95"],["/posts/b66774c1/index.html","08324833a1bebd86fa347a14c4ad9228"],["/posts/b6bbba88/index.html","cbdaa187c22229e658ea44d49077ab18"],["/posts/b6dbc3f5/index.html","6a155ba7e3622fc0e21a3f3f33543b9e"],["/posts/bb6ff07f/index.html","1ba85b7630303e3b82be6d52edd2a96f"],["/posts/bcbdb63a/index.html","cc77ca70d1072b74c0cc30b42765ebfb"],["/posts/d811784c/index.html","0c457a6d3aadd78ceed9519a20c33fda"],["/posts/da904ab5/index.html","47fa33b6ca307d0b5ba2608d098af560"],["/posts/e72b5a3a/index.html","dad01448287fe3e66e24a07fac8359e3"],["/posts/e97079a9/index.html","5ec7132d5f24aee917e274bf7267a1d0"],["/posts/f605ecd9/index.html","4ede50620c2b4844e85b5c9265907809"],["/sw-register.js","42123f2208e8bb31214b74f8ed7bed07"],["/tags/HNKJZYXY-OJ/index.html","158e25d7875b003bd2a91fe75177b399"],["/tags/Java/index.html","59042d995f9984b9b010358962fdfe32"],["/tags/MVC/index.html","6b60002cbbb616dfb0529237e725dd9d"],["/tags/Maven/index.html","cb6c9a4d5974f6efcc421b3c42e63bdf"],["/tags/Mybatis/index.html","5e3182f6c8cac287bf62c2bd715de0f2"],["/tags/MybatisPlus代码模板/index.html","24a538433b7116a051bf7699284dcd28"],["/tags/Navicat/index.html","74a562ef466c65b5c3a845c987ce5b3b"],["/tags/NavigationDuplicated异常/index.html","1b7fbb631cd2bd7b5e41b3ea41a79fe4"],["/tags/OJ/index.html","b7268c17fe57abe969e2e368fb10e990"],["/tags/Spring/index.html","098f507aaea1a1294e00ff19e5122bfc"],["/tags/SpringBean生命周期/index.html","dd064eed9775283b9eb0271a16b6deac"],["/tags/SpringBoot代码模板/index.html","b290e69d9deaf74d37ebea6138ef9a5a"],["/tags/SpringIOC/index.html","f6154e528b9d2cb36852b0c813880862"],["/tags/Spring注解/index.html","090fcfe9cebf071ffd4565b5eff84f1b"],["/tags/Spring面试题/index.html","0078a8e9b1079fcd1aac3f17f93e3728"],["/tags/Tomcat乱码/index.html","b2233d4f667f3b07faf4d71b0ca59fbd"],["/tags/Vue/index.html","81d4756cb29a8aa97421240ea78645ab"],["/tags/Vue学习笔记-尚硅谷天禹老师/index.html","1e41be6a0e5e82c02c0d4abf1ffeb95d"],["/tags/Vue路由传参的三种方式/index.html","1e703cd14a34f4ff3cc4ddecd2b39960"],["/tags/bufferfly/index.html","0a0f1472484ea284a7659bd8bead7912"],["/tags/idea/index.html","19815ed2609be164b6ddf3c97053c08b"],["/tags/index.html","87e5c99ded2223c9599c0f922c951252"],["/tags/哔哔/index.html","11feed122d897f8336350404c1116e99"],["/tags/奇怪的知识/index.html","88ce6c741cf4b657e725ad57086b1f8f"],["/tags/怎样科学上网/index.html","f299378eb45b77cf925e6c9e434672d9"],["/tags/数据库/index.html","a4a3b63b97c226b41144bfa3f0e822ee"],["/tags/数据结构/index.html","dce290be9953a92dcaa50066f062803c"],["/tags/算法/index.html","23d28a904f47ae51b4331c60f843b3ee"],["/tags/编程笔记/index.html","a7eb7ba91b5408663715c085757819a4"],["/tags/阿里云ECS/index.html","e9357919077e9e950613faf636e0f09d"],["/tags/项目部署/index.html","91a8087b3bcb753e1546332aa837b015"],["/timeline/index.html","071a1cddaccf8065df1753155b4124e2"],["/workbox/index.html","32f9baf8a60fdecc53767a65ff7f0561"]];
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
