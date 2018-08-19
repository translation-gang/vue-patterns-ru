/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68c7fe95e30de752a34a04c4790a49cf"
  },
  {
    "url": "assets/css/0.styles.a3e46cac.css",
    "revision": "9ef0b64d28ee499977311b72130ba5b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c26cd00.js",
    "revision": "8b869ac0ce41bad495586c180d5dacd9"
  },
  {
    "url": "assets/js/11.15c9e816.js",
    "revision": "726072ce70cf4db8650c7295e8770575"
  },
  {
    "url": "assets/js/12.aac6003e.js",
    "revision": "b7c873ee325bb8f76791621718a92cc9"
  },
  {
    "url": "assets/js/13.a8522495.js",
    "revision": "3343ee29c31bbfe8ad6f7d47361e9689"
  },
  {
    "url": "assets/js/14.7d64550b.js",
    "revision": "3e5976b3eb87012490de21999c25e790"
  },
  {
    "url": "assets/js/15.3f16450c.js",
    "revision": "0e2d229b346611901d7300ffc460454f"
  },
  {
    "url": "assets/js/16.9d1d8ed5.js",
    "revision": "184c5484c9c3a68c8e43db62d84287b3"
  },
  {
    "url": "assets/js/17.bab10368.js",
    "revision": "31fc6f397409e51b19ca18f91fb83c54"
  },
  {
    "url": "assets/js/18.481ab2d7.js",
    "revision": "8c882873ba270b52587079bd867a12c2"
  },
  {
    "url": "assets/js/19.84261635.js",
    "revision": "b0106887627581d5fa065a841f40eec9"
  },
  {
    "url": "assets/js/2.178aa6c2.js",
    "revision": "2014c261c578f3061f13f24cf3464593"
  },
  {
    "url": "assets/js/20.89c26700.js",
    "revision": "bc000c529d4955793e16ef4dea41e5eb"
  },
  {
    "url": "assets/js/21.7dfdbf24.js",
    "revision": "b238aaf84478ce4733e2a1b40493f5c4"
  },
  {
    "url": "assets/js/22.e76ae0a5.js",
    "revision": "b30db103fdf1cf06bf70efd1d663acb0"
  },
  {
    "url": "assets/js/3.733b4fc2.js",
    "revision": "3e2946e5d44e5d93f2cb5a8bf8510bae"
  },
  {
    "url": "assets/js/4.98d3bb88.js",
    "revision": "566a3f4576cbda10a33b041d1f80a79f"
  },
  {
    "url": "assets/js/5.427abb1a.js",
    "revision": "52f587d3083b65bea6d3187fd1929a66"
  },
  {
    "url": "assets/js/6.98651dbd.js",
    "revision": "1e07b267f2b90e68ceceba1dd50569d1"
  },
  {
    "url": "assets/js/7.1591b6ea.js",
    "revision": "118574825d28d0bafc3109e266500e0b"
  },
  {
    "url": "assets/js/8.96b7b19a.js",
    "revision": "5594f14e1abb81cdbd3b9fb8afa4b779"
  },
  {
    "url": "assets/js/9.0c267817.js",
    "revision": "b20ea851a91da325b77b2e2660719d9c"
  },
  {
    "url": "assets/js/app.70c39077.js",
    "revision": "ec09cb3226799d2f09e920c77fe7525e"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "b0d517030a965c4b7f98f24e2b5415ce"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "ce1f6fc73c4beff021d4ceccb94671f6"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "6041d37258923a0f5bed736ccd885a5f"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "11a8afbc5d9f4bc10114c74246c9e849"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "cb504e491e70597af0261cbbcb78b2a8"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "a15689d1a60d96f81a9ff1194930975c"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "f20d4422b750fcdd2c96046da813e701"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "cbda5626bfcf66615f90e6a9ff78333c"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "eb7c5ef78c76740395c665dfb54f99f4"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "670df00471999c0ee43995c91a6f31b9"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "e04ebe51d4c68d86dcb2fe96abd7548e"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "11a8afbc5d9f4bc10114c74246c9e849"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "6a134cf3a30a5abc95756e40533aee9d"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "4e1ccf073355d07b399c64702f576f90"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "4e1ccf073355d07b399c64702f576f90"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d960221622ef741e94d94594a2002ff7"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "97262e1be19354f0db0c013c1823d674"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "cb504e491e70597af0261cbbcb78b2a8"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "ce5742fa510bdd5d9875b4cc5953d235"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "5cec2130d8b4b2524d356f08b663e0ec"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "0e920f4e15ee53318b93ae959a6e4989"
  },
  {
    "url": "index.html",
    "revision": "799708fab08358b895aa7905c40a13bb"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "61ca52edf7c9b3e3598b0dc82c1f12b5"
  },
  {
    "url": "ru/index.html",
    "revision": "8b2593b3bb7c9b347a18d346791be21c"
  },
  {
    "url": "ru/patterns/index.html",
    "revision": "39ef0d5760465837c658e12eb035c96a"
  },
  {
    "url": "ru/sponsors/index.html",
    "revision": "7a92364805d51616b8f737c07d6ff6f9"
  },
  {
    "url": "ru/translations/index.html",
    "revision": "0b772207aebe6479c87d2412eafb2ecc"
  },
  {
    "url": "ru/useful-links/index.html",
    "revision": "cd9b3ec47f4e517adaa3e402d2e4b53f"
  },
  {
    "url": "sponsors/index.html",
    "revision": "ff75d160a1867e67293e1557e73b4e1d"
  },
  {
    "url": "translations/index.html",
    "revision": "a9ca0cd1d7a2e27afacf97894c7273e4"
  },
  {
    "url": "useful-links/index.html",
    "revision": "0a4ac1105ac806f9c5fb682618ca9aa0"
  },
  {
    "url": "vue-patterns-hero.png",
    "revision": "2a63731bd05e1fad9cbd8a0834b46858"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
