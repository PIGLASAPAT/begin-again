/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","a4e2271d19eb1f6f93a15e1b7a4e74dd"],["README.md","de48f4904d56d6ec82089c39f372235b"],["assets/bootstrap/css/bootstrap.min.css","8983eba9dfaa26b616151d6a85479ed5"],["assets/bootstrap/js/bootstrap.min.js","7f389f5d2622ce2090eca7c36bcb90bc"],["assets/css/4-Column-Team-Block---Circles.css","e40af4a6d9290f46b6f5bed9516587a5"],["assets/css/Article-Clean.css","c9b807fa7f038a918ca8b59ed79e928e"],["assets/css/Cool-Menu-Navbar.css","8d26bcef8a4f957852c4ac32ed704795"],["assets/css/Header-Blue.css","f7d2ee36cdc86e166dffac56a4521018"],["assets/css/Navbar-Centered.css","d85ad039ead052f307852a3af93e109b"],["assets/css/Social-Icons.css","2e22c571d9ac912b03869e64d1bebfa5"],["assets/css/Team-Grid.css","03caa168ea124f3461b8d8191ea290cf"],["assets/css/Team-with-rotating-cards.css","b3056cb17e87eb5bbee56143bf47cd08"],["assets/css/candidate-grid.css","037c10c4e83bd71c345e85c360a593fe"],["assets/css/header.css","cbc4d4af8bb9bed61d0ae4904d070a8d"],["assets/css/icons.css","0f9a464676f49120048997381494874d"],["assets/css/main.css","5353df169b92dd1d77781aea602cd146"],["assets/css/navbar.css","e8671c603ed702e3cc1ea1c2340fc001"],["assets/css/navbar2.css","cfb09e333fa78fc305754b0d4a12068f"],["assets/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["assets/fonts/fa-brands-400.eot","088a34f78f530102fd9661173b4a4f26"],["assets/fonts/fa-brands-400.svg","d72293118cda50ec50c39957d9d836d0"],["assets/fonts/fa-brands-400.ttf","273dc9bf9778fd37fa61357645d46a28"],["assets/fonts/fa-brands-400.woff","f4920c94c0861c537f72ba36590f6362"],["assets/fonts/fa-brands-400.woff2","822d94f19fe57477865209e1242a3c63"],["assets/fonts/fa-regular-400.eot","3ac49cb33f43a6471f21ab3df40d1b1e"],["assets/fonts/fa-regular-400.svg","d2e53334c22a9a4937bc26e84b36e1e0"],["assets/fonts/fa-regular-400.ttf","ece54318791c51b52dfdc689efdb6271"],["assets/fonts/fa-regular-400.woff","a57bcf76c178aee452db7a57b75509b6"],["assets/fonts/fa-regular-400.woff2","9efb86976bd53e159166c12365f61e25"],["assets/fonts/fa-solid-900.eot","7fb1cdd9c3b889161216a13267b55fe2"],["assets/fonts/fa-solid-900.svg","7a5de9b08012e4da40504f2cf126a351"],["assets/fonts/fa-solid-900.ttf","2aa6edf8f296a43b32df35f330b7c81c"],["assets/fonts/fa-solid-900.woff","93f284548b42ab76fe3fd03a9d3a2180"],["assets/fonts/fa-solid-900.woff2","f6121be597a72928f54e7ab5b95512a1"],["assets/fonts/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["assets/fonts/fontawesome-all.min.css","e0076d9b1984448e1b530d5b1a419c7a"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["assets/fonts/fontawesome5-overrides.min.css","efc9f7da67e38b107d16395fa0a2ee63"],["assets/fonts/ionicons.eot","2c2ae068be3b089e0a5b59abb1831550"],["assets/fonts/ionicons.min.css","e5c40720e40dfc20694f2333b08480bb"],["assets/fonts/ionicons.svg","c037dbbc0e6790f30e824a50010df5fb"],["assets/fonts/ionicons.ttf","24712f6c47821394fba7942fbb52c3b2"],["assets/fonts/ionicons.woff","05acfdb568b3df49ad31355b19495d4a"],["assets/img/1.jpg","106372dbd63ec141cd7d385f281a2976"],["assets/img/2.jpg","cfb863e2175ce05b81fd37553b36c4eb"],["assets/img/3.jpg","f4929ccce029208cabc5a09d192abdbe"],["assets/img/4.jpg","6a57a48dc9b6532140a61f61f30d4318"],["assets/img/Banner/Banner-Berdin3.png","cac16f2ac0dca4b06266f9ad63137ed8"],["assets/img/Banner/Banner-Doctor3.png","86c116ce61abad4745b9b18fbe054f84"],["assets/img/Banner/Banner-Galvez3.png","80f8a957ff422b10dbca4a185bef04f6"],["assets/img/Banner/Banner-Lamadora3.png","55dcb0dd7b1c6165ece497cd082c5284"],["assets/img/Banner/Banner-Ng3.png","1d372fc66dafc21e1453d51307ca2f3d"],["assets/img/Banner/Banner-Olbes3.png","189025f63c23dfd29490699d04f55d1e"],["assets/img/Banner/Banner-Tagalog3.png","9da8fadaccb0f9b05fc7dcb2ecf31ed4"],["assets/img/Banner/Banner-Tajora3.png","e14b5e60ce434fbcb6143a7e5e143ba8"],["assets/img/Banner/Banner-Tarnate3.png","d6b04b5aba0928e3fa3f1a9704645dd5"],["assets/img/Banner/Banner-Torreon-3.png","0a9bc596f182960110465e7ada6c7a98"],["assets/img/Banner/Banner-Verallo-3.png","c9315d9fbc4da382c00167a3abee8769"],["assets/img/Banner/Berdin-Banner-Type.png","4250bbd05946140cf0e2804572ac2874"],["assets/img/Banner/Doctor-Banner-Type.png","74a588b19934b022c69d038becf78b0a"],["assets/img/Banner/Galvez-Banner-Type.png","c728ee0abf6249cef64c640cf194ab1c"],["assets/img/Banner/Lamadora-Banner-Type.png","1a0b3da5a308ff973c6ce999bd980656"],["assets/img/Banner/Ng-Banner-Type.png","33d8ea7cd0d8981c6393220adbcdaa6b"],["assets/img/Banner/Olbes-Banner-Type.png","69385e2143b97b9026cf483fe8a6a1a1"],["assets/img/Banner/Tagalog-Banner-Type.png","af5b62493fedb40c88aa0d0269c421f4"],["assets/img/Banner/Tajora-Banner-Type.png","2f5072a53abae12feb19698acb75b157"],["assets/img/Banner/Tarnate-Banner-Type.png","a92385d3ab42b1292a42c5f59a024426"],["assets/img/Banner/Torreon-Banner-Type.png","d066b3cd47b5591438754d4230d21980"],["assets/img/Banner/Verallo-Banner-Type.png","697827c10de3adef2842558f318de2dc"],["assets/img/Cards/card_berdin.png","2f5b00c616985df816422ff65d01b939"],["assets/img/Cards/card_doctor.png","236d3210e2546ca8a55a3e345299ad69"],["assets/img/Cards/card_galvez.png","9cc326fb8774a039e69736bafdcf6d93"],["assets/img/Cards/card_lamadora.png","cd0b0f60dc456633b2d1a9772f4766e4"],["assets/img/Cards/card_ng.png","ed08aecfc58e6ca18bb677c6ec921e8e"],["assets/img/Cards/card_olbes.png","f37d2011ac881b51699cad42e37da5c9"],["assets/img/Cards/card_tagalog.png","4f6022059af823831270b7024345f086"],["assets/img/Cards/card_tajora.png","27119eba986f3cfe6f7d3aaaf843487a"],["assets/img/Cards/card_tarnate.png","cdd1444ad4b9953f41df939cb7138084"],["assets/img/Cards/card_torreon.png","6e918a2f742a9d4e633c280ef666cb98"],["assets/img/Cards/card_verallo.png","1cd6fd962a601ea20d341ba306480b94"],["assets/img/Frame 1.png","e698182422f5854c21ccd27d78633ddc"],["assets/img/Frame 2.png","cfc727cd076dfc33e6ded322c96066a6"],["assets/img/Frame 3.png","3172e5266b2fcee8719fc45218ad5d6c"],["assets/img/Frame 4.png","d7d68fc5b47d51123ac1e248283c2000"],["assets/img/Frame 6.png","e5bc7f503147845469a5e007cb2aed30"],["assets/img/Group 2.png","bddc24a1f4bd6c1e37476789ee0eeb76"],["assets/img/Group 3.png","dc89ce36080d0c8448f0770188295275"],["assets/img/Logotype.png","38e01034bd44a13365dfc47cb400a933"],["assets/img/Track Record/Track Record-Olbes.png","079886e7e0f965ab85ff933951560350"],["assets/img/Track Record/Track Record-Tarnate.png","0844c6a14a5a6491013471bcea3b7062"],["assets/img/beach.jpg","7ca38aaf54f73009a64afaf44ef2a96c"],["assets/img/beginagain_logo.png","dc89ce36080d0c8448f0770188295275"],["assets/img/beginagain_logotype.png","38e01034bd44a13365dfc47cb400a933"],["assets/img/desk.jpg","c7690cdad07c9619c209278d791f5c57"],["assets/img/phone.svg","ad5e82371279d7ca537c2fa0c9232375"],["assets/img/screen-content-phone.jpg","8c332c8fe1c168ec10fbc361a50cac8b"],["assets/img/slider/Facade 1.png","a3ffe59731fdc1ca011729fbc2728378"],["assets/img/slider/slide3.png","a3ffe59731fdc1ca011729fbc2728378"],["assets/js/Simple-Slider.js","b4c48781313e470a8f45bdcc1d61de2e"],["assets/js/bs-init.js","a6d276d3d2084bcfd9e5324e228cfe5d"],["assets/js/jquery.min.js","12b69d0ae6c6f0c42942ae6da2896e84"],["assets/js/slider.js","d0bf870cabd5631f35300fd2f79088a0"],["berdin.html","6b667a449b27cd77bcb1231797e40255"],["campaign.html","465f55aeaaaf3b243334a9e14eddeab9"],["doctor.html","9be8d7c4a277163fdeca6365956c31a8"],["election.html","f0958dd8f7ee4d5edf4cd5c2bdd485da"],["galvez.html","169b6138d2d3e104e2a99b296bde1bb3"],["hidden.html","c140687efac63cb49d2b78a9e99b802b"],["index.html","efea14757d005b65e59f258343dc3555"],["lamadora.html","86d890d33fb185ffa366fb168b4d9022"],["manifest.json","aa990428d2bc6b0cb681ea2197e5e985"],["ng.html","f2f9a47d45c809f7857b424e9f30b6e9"],["olbes.html","304f6600c88dc12587005be430723b31"],["sitemap.xml","7741b3dd4588e234aef305166072e77f"],["support.html","bc0c703cc6caab0d412e23f06f7872c3"],["tagalog.html","7f1f7f871d3c999bd593226aec98073e"],["tajora.html","c19cf6a347f378000464dd7762a8fd9d"],["tarnate.html","4bc82f0cbda2f225eb0bb0aed9881a03"],["torreon.html","78ee37cc927275db0d03c432a5591771"],["verallo.html","ad6c762f4c52154cdfa742799002e1a2"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







