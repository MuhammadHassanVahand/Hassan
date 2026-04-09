'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"app-ads.txt": "081cbd73effcd8250425472a87ab93e6",
"assets/AssetManifest.bin": "42312b4241c717c33971d710c9da3fee",
"assets/AssetManifest.bin.json": "0095b32888c18e13a5c64a80afd98981",
"assets/AssetManifest.json": "7285c820a6afd3275a5864394b850046",
"assets/assets/images/48965da2c75390e8c486058c282b35cd.png": "c74605e11d7896c95adb099d9e146009",
"assets/assets/images/api-integration.png": "8a9fe608b73935f849d741b556c5dfae",
"assets/assets/images/booksApp.gif": "5eccb154cc6ad4d33e702bd25e2498f9",
"assets/assets/images/cropped_circle_image%2520(1).png": "0f672145b249b186fc8d2a4170e3ec7a",
"assets/assets/images/doctorApp.gif": "67308ed496bf65a6acfda8cd59c32bc3",
"assets/assets/images/download-removebg-preview%2520(1).png": "54f74bc3e1d7de59b63ebefa5bb1bbb1",
"assets/assets/images/download-removebg-preview.png": "529373de3e68d074a302443107a253f5",
"assets/assets/images/download.png": "851d15271c3660176a8f8f0dbbfb0a0c",
"assets/assets/images/Eco-Trac%2520Desktop%25201.png": "aa1148830b0abcacadc16dde0bb050a3",
"assets/assets/images/Eco-Trac%2520Desktop%252010.png": "cfd11e3b37c9f5032fcb75a214077900",
"assets/assets/images/Eco-Trac%2520Desktop%252011.png": "96984bd49a40ed8a1f6eb8b1a17faa88",
"assets/assets/images/Eco-Trac%2520Desktop%25202.png": "47fc408489a9cab240786dacbcd98f82",
"assets/assets/images/Eco-Trac%2520Desktop%25203.png": "88af2a57d1b33e0fbb53ea2990eea050",
"assets/assets/images/Eco-Trac%2520Desktop%25204.png": "c94039c9e8f7249dd5abe56b28b3a950",
"assets/assets/images/Eco-Trac%2520Desktop%25205.png": "cc1a90e9cd24df7eb89c563e0c17cda9",
"assets/assets/images/Eco-Trac%2520Desktop%25206.png": "ff5f04c0a306c23fbc2e6ad85b6e6a56",
"assets/assets/images/Eco-Trac%2520Desktop%25207.png": "fb20f586466cf46e3046b32de36a8f87",
"assets/assets/images/Eco-Trac%2520Desktop%25208.png": "0fe67957675adb5fcdb99af5a694b00a",
"assets/assets/images/Eco-Trac%2520Desktop%25209.png": "8dc19a1c809e5b41210d44d5ccef1c05",
"assets/assets/images/EcoTrack1.png": "ebaf35e67999ff6ef8614e2ed406ca9f",
"assets/assets/images/EcoTrack2.png": "64fc4bfc988c800e8c27e83720cf5706",
"assets/assets/images/EcoTrack3.png": "bde278ce4b88270e5e117a692c7d91a5",
"assets/assets/images/EcoTrack4.png": "1845106bef049927cd8cdcf47d49f479",
"assets/assets/images/EcoTrack5.png": "3dc9a67a96c5d4bbca9653a0155ade8d",
"assets/assets/images/EcoTrack6.png": "f3ab8ebc979d003bf4c8d8690b7b65e7",
"assets/assets/images/EcoTrackLogo.png": "14908440280df1690ac162829663f8c2",
"assets/assets/images/favicon.png": "9c323d4cfc4db33e87a2bc09aaf06b95",
"assets/assets/images/flutter-logomark-320px.png": "17329cac5046ff53a00edc375d09395e",
"assets/assets/images/foodApp.gif": "2bfa11a65f9db0f310b7af25afb66769",
"assets/assets/images/git-icon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/hassan-bg-removed.png": "69a44e6fae19aab9404acd6520bbefa0",
"assets/assets/images/IMG_1396.HEIC": "bdd6320cd2c849b603f464f4f60c5156",
"assets/assets/images/patternix1.jpeg": "c552de69b778f397b9d7b55dce9f6de4",
"assets/assets/images/patternix2.jpeg": "78f11359339eb297c8fca87c18dcd803",
"assets/assets/images/patternix3.jpeg": "d5fffeb91530d88430b55d198f5d28a9",
"assets/assets/images/patternix_new_logo-removebg-preview.png": "bedeaa2a10391690ff4f9547db5c2899",
"assets/assets/images/play_store_512.png": "2adda4f0194ec6f52ef940468bcdb77d",
"assets/assets/images/Profile.jpeg": "74a3d3120d750d0d512e1fcdd9f853b2",
"assets/assets/images/Profile.png": "e231b0d0929696e0165291a0af30aeac",
"assets/assets/images/Profile.zip": "2163e669da185b4c566edfe48c42bdb1",
"assets/assets/images/Quizler1.png": "ca61e4379dd057568d77c7b66e3a0fff",
"assets/assets/images/Quizler2.png": "f8b91d4aec867a28e207e159d54f1376",
"assets/assets/images/Quizler3.png": "b5753e5aa32d0995ea6404ec9bc4721f",
"assets/assets/images/Quizler4.png": "e8d0016412fb1c57e4d79e9aac4c28c5",
"assets/assets/images/Quizler5.png": "c975f6d8d5520e797613faa473777f49",
"assets/assets/images/Quizler6.png": "11ab27fefa172d0757ce5bd0b80f280a",
"assets/assets/images/quizler_logo.png": "bf6129f3bf2b753a2e4aac33b0f37aa0",
"assets/assets/images/Random%2520Reading%2520Generator%25202024-08-15%2520162902.png": "9a61092e47193af8c3b2bc805c467454",
"assets/assets/images/randomTools.gif": "d2e4e7d125526b2a03d6c3847f5cd280",
"assets/assets/images/Sqlite-square-icon.svg.png": "7df319c1d22e85b0f0ad89faa94d8073",
"assets/assets/images/SteriTrack1.png": "1be0e24d251e788d619719b095a7f6b4",
"assets/assets/images/SteriTrack2.png": "887ef0c8cb9954af5c1a8d1bd1ce76b7",
"assets/assets/images/SteriTrack3.png": "5bd757515bc15141529c8f6afe4d4566",
"assets/assets/images/SteriTrack4.png": "562a8741a47e3aea68ff80bea42d7e86",
"assets/assets/images/SteriTrack5.png": "9191ce9a741d515a96b65f2bf918bf1e",
"assets/assets/images/TemperatureReadings1chart.png": "0ee4c5c1ccf50d40eedefc11d8cf8977",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252011.59.20%2520AM%2520(1).jpeg": "7a5494661d2e3fd4eb13fc7220681cb4",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252011.59.20%2520AM%2520(2).jpeg": "33aa2e9be5a564d9246dcb93fac8859c",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252011.59.20%2520AM.jpeg": "120ca829d85dc7f6fd7f7ceb3fdc96f6",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252011.59.21%2520AM.jpeg": "17ed06def4f02e5439ae4c1354647676",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252011.59.30%2520AM.jpeg": "e3afb631c7a88ab0490e3a9ac597f6a0",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252011.59.31%2520AM.jpeg": "1db6768521dabad1911b2234f39aa416",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252012.01.01%2520PM.jpeg": "7d7e714ca18bb3ff527b859689e999b6",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252012.01.02%2520PM%2520(1).jpeg": "d34424d3188e3484848bb3656973a9ce",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252012.01.02%2520PM%2520(2).jpeg": "5dbf75237064b104aee0d0b32b53aff4",
"assets/assets/images/WhatsApp%2520Image%25202024-08-15%2520at%252012.01.02%2520PM.jpeg": "c0355000e1cfa287b47fc559cd03f472",
"assets/assets/images/WhatsApp%2520Image%25202024-08-16%2520at%25204.34.44%2520PM%2520(1).jpeg": "c9894b96a88a451fd01bb8ede1d18a60",
"assets/assets/images/WhatsApp%2520Image%25202024-08-16%2520at%25204.34.44%2520PM.jpeg": "8a5d9fe5501b8e3ce831ce9dada6f83f",
"assets/assets/images/WhatsApp%2520Image%25202024-08-16%2520at%25204.34.45%2520PM%2520(1).jpeg": "42c8a07875a44fc6181037a2b69c503c",
"assets/assets/images/WhatsApp%2520Image%25202024-08-16%2520at%25204.34.45%2520PM%2520(2).jpeg": "3f20ab4ebdb7fd8cf49640d31f63fda5",
"assets/assets/images/WhatsApp%2520Image%25202024-08-16%2520at%25204.34.45%2520PM%2520(3).jpeg": "a2a584a9cb7f0440556a84cc467b7023",
"assets/assets/images/WhatsApp%2520Image%25202024-08-16%2520at%25204.34.45%2520PM.jpeg": "aaa32f3b81843012e250ff8ddcedae46",
"assets/assets/images/WhatsApp%2520Image%25202024-08-16%2520at%25205.13.19%2520PM.jpeg": "320952ac09136f42dcda1dfaba3d410b",
"assets/assets/images/WhatsApp%2520Unknown%25202024-08-15%2520at%252012.49.25%2520PM.zip": "208a095c9933ae5d9ae5df01d841817a",
"assets/assets/images/WhatsApp%2520Unknown%25202024-08-16%2520at%25204.35.56%2520PM.zip": "86f8f7ca4e665562c2bb8983b8fa9b1a",
"assets/assets/Muhammad_Hassan_Vahand.pdf": "6678c5a30b883581f6edcbe79bddd51b",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "c6393124e0e4e67100936ae3442e3a79",
"assets/NOTICES": "04b05a497d90ca9796de1c78799f1f47",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1b2f0ad16bc47d96b6f6df4a373a5a49",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/web/favicon.png": "9c323d4cfc4db33e87a2bc09aaf06b95",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "9c323d4cfc4db33e87a2bc09aaf06b95",
"favicon.png": "9c323d4cfc4db33e87a2bc09aaf06b95",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "540bbd85cf40b3ab1240965fe75b5545",
"icon/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icon/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icon/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icon/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "a9a8dfec79d5f012c3ca33ddfb8512a9",
"icons/Icon-512.png": "a9a8dfec79d5f012c3ca33ddfb8512a9",
"icons/Icon-maskable-192.png": "a9a8dfec79d5f012c3ca33ddfb8512a9",
"icons/Icon-maskable-512.png": "a9a8dfec79d5f012c3ca33ddfb8512a9",
"index.html": "db2ba6676afcc0b313c20063d3e0af76",
"/": "db2ba6676afcc0b313c20063d3e0af76",
"main.dart.js": "e66b7a146976b707d59f520b3067c435",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
