if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const t=e=>n(e,c),d={module:{uri:c},exports:r,require:t};a[c]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"df86c11fac775ae4013a4c19ed2cfdf4"},{url:"/_next/static/chunks/186-ee95cb5e829c8d48.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/294-da7435f72563d41f.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/401-a0ca2350fdfe9e8d.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/548-fda804170a56abdb.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/700-a4b3ca743e65ba94.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/704-3e20055c6f5baf0d.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/716-10648746dadd810f.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/749-cd28bc50d4b8e4f0.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/788-91e1630a7c75c653.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/923-47ed481789ef4df7.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/938-8927bb296440cd38.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/_not-found-0b35695bb692e70c.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/about/page-22e11bd7ba6e5f17.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/issue/page-369bd94257249e83.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/issue/result/page-34aaf5ea8604a8cf.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/layout-ba482ed8c43dba72.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/loading-8880cc8e486af1d1.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/page-a347d63ababd55d3.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/app/reference/page-6c2d51537d0c7555.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/fd9d1056-dc9e5287ad9bf788.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/main-app-f742665e08b6aaaa.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/main-d4c896d86a23123b.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/pages/_app-8e650e1c50ef0819.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/pages/_error-0ffac66cb3fae446.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6b13a13f8069ab4d.js",revision:"r6KYekVxRQRmgqgBdavjY"},{url:"/_next/static/css/beff93372d1e8a9e.css",revision:"beff93372d1e8a9e"},{url:"/_next/static/media/69314bc0865f4ce1-s.woff2",revision:"cee6e49453e48f939ebe7a2cb840b7fe"},{url:"/_next/static/media/9d17fec1fd5d47d9-s.woff2",revision:"893c7a20d9cb2d5a76952bb16a89d9c5"},{url:"/_next/static/media/c3fb87e343a67219-s.p.woff2",revision:"990d404bcad1a5e230559c3b2c0e08f7"},{url:"/_next/static/media/howTheAppWork.579f7ecc.png",revision:"f039a87a24b99a4e8d450d9b4755ae46"},{url:"/_next/static/media/icon.690840f4.png",revision:"62481bea285b2bd0304ca8b764a556ed"},{url:"/_next/static/media/islamic_todo.3137455d.png",revision:"8dddd2a90a223b80cd6a2783cab51f21"},{url:"/_next/static/media/noConnection.1f004bf4.png",revision:"ce1aa922f865dc2457452b9a8efdbaa6"},{url:"/_next/static/media/nonProfit.19e7bd2f.png",revision:"a48f14926ed1d47e2d41cd124640c13f"},{url:"/_next/static/media/pieChart.7c839649.png",revision:"6ee6856fdb1938849fc68ad1e92031a3"},{url:"/_next/static/media/prophet_Mohammad.b0a19a0a.png",revision:"67a5c08f1d67c5f78626c475559dfbb5"},{url:"/_next/static/media/refBook.8383c46b.png",revision:"194fa36ba4f9d495f871f0f13a5da3fe"},{url:"/_next/static/media/restrictions.dd79830b.png",revision:"ad2b1b55819ac12f16c50c26d09c6054"},{url:"/_next/static/r6KYekVxRQRmgqgBdavjY/_buildManifest.js",revision:"e50bd43c906648e2a1ccbe057d6ceadb"},{url:"/_next/static/r6KYekVxRQRmgqgBdavjY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fonts/HafsSmart_08.ttf",revision:"bd28a1b12834eee0203cf77b7eb03230"},{url:"/icons/android-chrome-192x192.png",revision:"731823aa68264e745a9867b71f856dc3"},{url:"/icons/android-chrome-384x384.png",revision:"d6ab8d214354f6af64ca22596c006038"},{url:"/icons/apple-touch-icon.png",revision:"50d0d767bc2617d83fb64c8f232a546f"},{url:"/icons/calculate-icon.png",revision:"9f848d5d8d1bd197e03e037ec3055548"},{url:"/icons/favicon-16x16.png",revision:"84041a8d2dd2572c59c329a354a17213"},{url:"/icons/favicon-32x32.png",revision:"bfa5c1d7e28c3ce62d9c42a1e7fb87f6"},{url:"/icons/favicon.ico",revision:"e621169a246d4f8fcfef280a209248ca"},{url:"/icons/icon-256x256.png",revision:"52f3dbdcdfb1ec3e2824ecb908c21908"},{url:"/icons/icon-512x512.png",revision:"7da7e86e46efc3b7f5fa852890b7a44f"},{url:"/icons/info-icon.png",revision:"d2e08d222c28c13aae29426c6f0b2f57"},{url:"/icons/ref-icon.png",revision:"787f8a267761334dbfa10d2c578072a0"},{url:"/images/about/NoConnection2.png",revision:"177e67105a9c775ffac1c4615c265db2"},{url:"/images/about/device.png",revision:"f7066b0a3ca90ac1ccc880c3e81484f4"},{url:"/images/about/howTheAppWork.png",revision:"f039a87a24b99a4e8d450d9b4755ae46"},{url:"/images/about/noConnection.png",revision:"ce1aa922f865dc2457452b9a8efdbaa6"},{url:"/images/about/nonProfit.png",revision:"a48f14926ed1d47e2d41cd124640c13f"},{url:"/images/about/refBook.png",revision:"194fa36ba4f9d495f871f0f13a5da3fe"},{url:"/images/bg.jpg",revision:"e3e64254af621915356c8d945a8b8663"},{url:"/images/icon.png",revision:"62481bea285b2bd0304ca8b764a556ed"},{url:"/images/loading1.gif",revision:"5e8223486863b17824210a824715e193"},{url:"/images/reference/Holy_Quran.png",revision:"1ebea576b5ba043fd0615df6b16731f8"},{url:"/images/reference/Quran.jpeg",revision:"544a1c4c47f9b6b5bcccaceed9b9a08c"},{url:"/images/reference/Quran.png",revision:"7cb5fcc8be5be0ef0845b0e70cc6c112"},{url:"/images/reference/book.png",revision:"4ac49092b7ac855514c20b5d16645b58"},{url:"/images/reference/islamic_todo.png",revision:"8dddd2a90a223b80cd6a2783cab51f21"},{url:"/images/reference/league.png",revision:"bbc3e3d69b311661fa865ed45bdddf74"},{url:"/images/reference/pieChart.png",revision:"6ee6856fdb1938849fc68ad1e92031a3"},{url:"/images/reference/prophet_Mohammad.png",revision:"67a5c08f1d67c5f78626c475559dfbb5"},{url:"/images/reference/restrictions.png",revision:"ad2b1b55819ac12f16c50c26d09c6054"},{url:"/manifest.json",revision:"ae2c6d972dd668b07d1133dee75b7939"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
