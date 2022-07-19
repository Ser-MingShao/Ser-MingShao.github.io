/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","33afdce7fd002bef209edc0baefad944"],["/Gallery/Hzw/index.html","e1460b24e10aaa45578145ecc2f9fe1b"],["/Gallery/index.html","de02d5665258718e3475a00023bb2275"],["/archives/2022/02/index.html","c89456bff2610620decea1a30453f27f"],["/archives/2022/03/index.html","ddb8f766f5f353facbc01a7c3250dedc"],["/archives/2022/03/page/2/index.html","7df717aefbba83378a4515032a179b9e"],["/archives/2022/04/index.html","1c2f98eecf89eff84d0b04c04c2e95d1"],["/archives/2022/05/index.html","277ecd37b83bed999eb2feca76cbf5b8"],["/archives/2022/06/index.html","016ad62589d0c6acccdbb8334ddf86ce"],["/archives/2022/index.html","54af2979d6c597160195344c75151c61"],["/archives/2022/page/2/index.html","f0ae7e7c4a42a019f7df3bf1e5c48c06"],["/archives/2022/page/3/index.html","7f3823f672f57000da329269caa4ee54"],["/archives/index.html","8d22c75755fc62c45b80639e12f46b38"],["/archives/page/2/index.html","f235c5881a9d8e0098664e881f2b7b5c"],["/archives/page/3/index.html","9b19ff4ab667e6caeaf96227115e5e8c"],["/artitalk/index.html","527952a97be27cffefbc43c4f33d4352"],["/bb/index.html","54abc38ea96e57dcfe2103587f4e2149"],["/categories/Java/index.html","9a5aa9cc50b198ec9ab7dc0896620d15"],["/categories/Java/page/2/index.html","40667bc819b0f6da44749c081e8f9e98"],["/categories/Maven/index.html","74ebe67dee358c866e3dff49e276cdcf"],["/categories/Mybatis/index.html","ea34b29b0efea6a192df1a2ed06125b5"],["/categories/Mybatis/注解开发/index.html","fa8b91a01f4d1b791df09984e058b30a"],["/categories/Mybatis/笔记/index.html","e759658d928758cd6565dfdd30d923a1"],["/categories/OJ/HNKJZYXY-OJ/index.html","8bbbe4ce3c804e3fd80b354ae8ff0c5c"],["/categories/OJ/index.html","2bc7de1b1c9f13dc867119184723e964"],["/categories/Spring/EasyCode代码模板生成/index.html","34f6a5daa9a223e522b1046636251f70"],["/categories/Spring/Spring5笔记/index.html","c626d64682694fca79ed0150b02a10d7"],["/categories/Spring/SpringAop介绍/index.html","df8aae2a7133c051e20e13b4b45b20d1"],["/categories/Spring/SpringAop进阶/index.html","e14df352e933a6e348eb4f2cffd605f5"],["/categories/Spring/SpringBean生命周期/index.html","2e7a3bbe2a297562c6b2c950cdd78421"],["/categories/Spring/SpringIOC详解/index.html","c79011e1afb2bccd48c28fa84cd4a0ae"],["/categories/Spring/SpringMVC笔记/index.html","41734e709c13976b66e5a1313726ff5e"],["/categories/Spring/Spring注解/index.html","4a688d3acc7bfaf4a5495fc0e0782156"],["/categories/Spring/Spring自动装配/index.html","4c76db2da37e311d82aeddaa6495e62f"],["/categories/Spring/index.html","d9aee9b4ef9e5e5920f48593a046c941"],["/categories/Spring/page/2/index.html","d81ffaf94b74134df7e6f40bdcbaaa8f"],["/categories/Spring/四种依赖注入/index.html","e9087c859e3272fea132a2f91560af17"],["/categories/Spring/插件/index.html","ad83a3c73d1b2328af7f8be911a0afd5"],["/categories/Spring/面试题/index.html","192f82695c3dcaf91ae910c1f97d4e9a"],["/categories/Tomcat/index.html","e6509e27f911d3d2e4e7ba2025657345"],["/categories/Vue/Vue-NavigationDuplicated异常/index.html","3682601c6129bcd19516d9f0cbfe04b7"],["/categories/Vue/Vue天禹老师笔记/index.html","b0f86b57226a6a01ef1b8f04fa5d2d98"],["/categories/Vue/Vue路由三种传参方式/index.html","2e0f5754ee423aec0b7de0a2aea257bd"],["/categories/Vue/index.html","a490af49c772032e7ac30dd11efcd812"],["/categories/bufferfly/index.html","225659fccb311d78d80d9a23a2fdd6b1"],["/categories/bufferfly/哔哔/index.html","14eab407e0cb040c34ba9492487c973d"],["/categories/bufferfly修改/index.html","6c70384fed49ccd2ff68caed5c04a873"],["/categories/index.html","6bd5c7a09ef5a51b76318c9498177fdd"],["/categories/奇怪的知识/index.html","f2fcdb100f4cbe9c3e6c89f0eddf6a84"],["/categories/奇怪的知识/为什么IDEA不推荐你使用-Autowired/index.html","3576a2ea7963beefb417e2066408cae3"],["/categories/奇怪的知识/怎样科学上网/index.html","8e4b3303fc7e3569fc97247e9b27ca84"],["/categories/数据结构/index.html","fa8cd64a1ef25c90f3ef258a03b214af"],["/categories/数据结构/循环队列/index.html","d564d5b6129ac2beb14536a1692eb4c0"],["/categories/数据结构/递归/index.html","36fa4f418577286c5adfdac90fc3e5f4"],["/categories/数据结构/链表/index.html","9a100690da82e1af0bc9ea139027ac59"],["/categories/算法/index.html","7c12e1d5a0cc2cf1919e7c33efae4d07"],["/categories/算法/回溯/index.html","91ceee229747a76109e9ec59e7751b6c"],["/categories/算法面试题/index.html","0a0b21cf3f67c47ecaf630abab115793"],["/categories/编程笔记/index.html","8fb9345f2802cd197473ac90b1fb7a70"],["/categories/软件合集/Navicats/index.html","a498213ed63fca9b0cc4062766fefe1d"],["/categories/软件合集/idea/index.html","279dab40351c96e704a436d92a7e2a0e"],["/categories/软件合集/index.html","2892a57dd591779a8374061d35ea60f4"],["/categories/阿里云/index.html","5ecc8ad0f1d7b063035e33e09422ff5c"],["/categories/阿里云/项目部署/index.html","63d514c57815f8fdaf9987c1558ac673"],["/comments/index.html","e8f5a9048806215e432175236829e06d"],["/css/aplayer/APlayer.min.css","b554a8c66b57ac89dbd304202c019ddd"],["/css/custom/aplayer.css","3df287f09aff5387e1a494a86ec9ed2b"],["/css/custom/artitalk.css","a16a5cb11d1616450719d14dcd69d3f7"],["/css/custom/clkp.css","e0495c68539c27059be54f05721a8cfa"],["/css/custom/fixed_comment.css","353c9b9de1fa7f54130092e5140cbd1f"],["/css/custom/font.css","a8699788b930c8d4f8c5fcd9920d72e5"],["/css/custom/futetli.css","80cdcdbbfb5dcfb0ea7269107edbe453"],["/css/custom/icon.css","142e80c9c6a74a8bded77650fc0cb1ab"],["/css/custom/loading_wizard.css","9e542764eb21c90da200165acbcbc816"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/custom/ws.css","263c441f1b9efaa18490e789af940af8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","edd3ad6da83f792534e2a782fd5a8761"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","72e0ef45a82db92e0efa42fe7b27784f"],["/forum/index.html","1de1792cf6c9bd7c814febc65eafc72e"],["/img/1favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","6baff6e59ba4274432bb79ec252f7104"],["/img/bg02.jpg","90d242c4f3b437c9c9cccc0c8b644d6d"],["/img/bg03.png","5d854caa4ee98da101700b23c37b45cc"],["/img/favicon.png","a2fa8c803f86057a512902dcce27f17f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/log.png","347768bb9c3b1842d353f4ef6f0cff70"],["/img/wechat.png","b0be0e3b83aadedc472772f3935f8cc2"],["/img/wx.png","6e84965eb49716bbb5b9ce29a512eeca"],["/index.html","106e218a089c4ec4184029e4aea283bf"],["/js/Meting.min.js","f52073ee95c3f319e57532eac06f16ca"],["/js/custom/comments.js","6cde9f390e092aa03b77f8a663d12aa9"],["/js/custom/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/custom/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/custom/fixed_comment.js","105ef085d165e2b75aed7eb1d6cccc8d"],["/js/custom/grayscale.js","c6abd8e29326703430a8b0a6c17f76c6"],["/js/custom/nav.js","a7981d6c5f9ebad06d19b89ff1738662"],["/js/custom/runtime.js","5723eb10b7f63c9c59f4237257ea289f"],["/js/custom/ss.js","cc152e5838e702ae5740741a0db313eb"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/wow_init.js","3507866c4b2902dc9de3bf21c76625a3"],["/js/main.js","d4533ca549681f965ce4cc4bc2fb5725"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","6983c2107eb46b84fadc001ccf624f78"],["/ms/css/Lete.css","ce50e480777259fa32af759844295eef"],["/ms/css/background.css","1f048c7f7acf6d1a564c475275a7bde2"],["/ms/js/Lete.js","501d50da17faa73eccc7e015dd38ab2d"],["/music/index.html","e1c93d8ba3df74d37136f60c461aa16c"],["/page/2/index.html","af37180b3cda7d2ffee6b5a6e9e1acef"],["/page/3/index.html","f36bbe383d9a56fa1ee971bea18fea4b"],["/page/4/index.html","18bdff1ed7d53e0beef3bdb85e753a37"],["/post/13e760ef/index.html","6d422073e3d84b5bf5cb3cb7c586bcc7"],["/post/1d0508a6/index.html","75c0ed8bd73d237b49c6625cf5e2d841"],["/post/1d84dc88/index.html","c85b41357d70af7c61b1345d9bd2fb82"],["/post/319c21eb/index.html","9dbef57d34fb0919fe7742eb97f3c45a"],["/post/3208ee03/index.html","3d4f5f12100e40e64f3635fb8910177c"],["/post/32277b7/index.html","1579195fd8c264b60b04631e79a9db97"],["/post/3a723147/index.html","31a26d376f7a1d152d408378b4ec89e6"],["/post/3d190b4f/index.html","3fa42d517b67050ccec7a9aace1ecbe4"],["/post/5dd00982/index.html","e65488c481e1c13b2e6cb10e26c94c91"],["/post/63755f3a/index.html","44acc34004f7f06e8584b346eac99e18"],["/post/6e9321d6/index.html","9ab06cc489ff5ab50b467a60ede8868b"],["/post/7047b0e7/index.html","793c4e2c4f48438bdc452395e4e0e9bf"],["/post/75ce1e02/index.html","323c4c06d1de4b14220df35798da273f"],["/post/7a5d2d7e/index.html","f60b29289e2cd895f7da81687eb4660d"],["/post/7fd48667/index.html","ba81c0bb86818953178732610fde6a15"],["/post/841c624e/index.html","07eecffd34c51c2464b009828a8b9d28"],["/post/86aff880/index.html","c59b3b95e3891eed9af6d157974da263"],["/post/93f3f3c2/index.html","3d3988e584d5906678a5ce64fc514450"],["/post/9b97716e/index.html","6cc7ed87e0ae748008304c8206a4695b"],["/post/9dadefec/index.html","d4ffb0c1a561e9ecea5b184d9f28d422"],["/post/a528d135/index.html","e12dff479e49af1d8668f8d5b1ab0c2d"],["/post/b3b6ba72/index.html","26cad35f3014a4d86af45c9e71995af5"],["/post/b66774c1/index.html","ac0664497d5716d9973c2d8ad1663500"],["/post/b6bbba88/index.html","4a3cfcab256ed4214dbb295fd226d865"],["/post/b6dbc3f5/index.html","a99354b5570673c9988d2ed1b594b040"],["/post/bb6ff07f/index.html","3f5f1a7c2cdc199a6581c76bd3baee87"],["/post/bcbdb63a/index.html","cfee5e54136ec311c3c6ac762dff916d"],["/post/d811784c/index.html","80ab73010bff15aaf800dadd2560718b"],["/post/da904ab5/index.html","51698b6db084d49b7bcb3cdb9adf7ed5"],["/post/e72b5a3a/index.html","d0eef3796cb09a26979064adfd6528d4"],["/post/e97079a9/index.html","b338adf0f284460f104779414b555d12"],["/post/f605ecd9/index.html","0998e1474c53de8127ee15662aef9fa6"],["/sw-register.js","b2fb897fa8ff947321403c089504951b"],["/tags/HNKJZYXY-OJ/index.html","09731b147f64a043755d00dd05522779"],["/tags/Java/index.html","8301cbc6faab2397b423e4923f5357ec"],["/tags/MVC/index.html","3287a7d6d999cd5236b13746cb367bb5"],["/tags/Maven/index.html","b07dd1d66d778a679ff3944b1fd958b1"],["/tags/Mybatis/index.html","24b7a33505909647fed3074922a3629c"],["/tags/MybatisPlus代码模板/index.html","81cac1376fe2b17a77c91ff5d3188614"],["/tags/Navicat/index.html","b087c222da70b8a18e50311a96db8bfd"],["/tags/NavigationDuplicated异常/index.html","d9ff00ebe7e355928058eadfbd5576a4"],["/tags/OJ/index.html","6e0438dd375555cf73f9453f9c7e77c5"],["/tags/Spring/index.html","2c6eb93248cce2b6e655f2e71a7ecb55"],["/tags/SpringBean生命周期/index.html","0ba801105ce92c77ea8b3ce232b758aa"],["/tags/SpringBoot代码模板/index.html","9cb01e2ea49cb6f26220547a1aca595e"],["/tags/SpringIOC/index.html","545a65a6b7b8dc33148c29319975a625"],["/tags/Spring注解/index.html","2811ed0ec337e18ca5926d20ace68266"],["/tags/Spring面试题/index.html","d5e96f06475365187dab45d9b8b183e4"],["/tags/Tomcat乱码/index.html","dc90b2b03fe936cd65941e205246654c"],["/tags/Vue/index.html","3d567a3fae2f236d8b6fdf62c7af9c12"],["/tags/Vue学习笔记-尚硅谷天禹老师/index.html","21b568d5e55da41637ee5298ddf42fcf"],["/tags/Vue路由传参的三种方式/index.html","ecc558b67c4e49735e502a0c379ceada"],["/tags/bufferfly/index.html","755934a5590b322a5401c5c0b402fec8"],["/tags/idea/index.html","7a1bea37d2ed534bdfb9d53dabda7702"],["/tags/index.html","f853cf0ea418f5821e87da8f5b48df3e"],["/tags/哔哔/index.html","bec4077418c6ef87975508038094de0d"],["/tags/奇怪的知识/index.html","de1aa92d39ebf65775e85d0789aac6a2"],["/tags/怎样科学上网/index.html","13ddf01c36a3f2af34a18214b44b119c"],["/tags/数据库/index.html","a8abaeb5942741e7f4204d7a59e81299"],["/tags/数据结构/index.html","5919f28e153eeb28dc7eb8aea1aeecd2"],["/tags/算法/index.html","b04b5ec6f72e61770fde10fca7fe2118"],["/tags/编程笔记/index.html","a63eaa77cb06aa418a1ee1d73a37af06"],["/tags/阿里云ECS/index.html","1783e78d65647962b15d934b54506b41"],["/tags/项目部署/index.html","e823d42e222b4a3b136560385048ef8d"],["/timeline/index.html","79b46dc94f91ba7a88df81874c53b199"],["/workbox/index.html","876bd7fd4f6ce3c1027403164fda4da0"]];
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
