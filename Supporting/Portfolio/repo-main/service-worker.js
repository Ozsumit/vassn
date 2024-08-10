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

var precacheConfig = [["14990782626308686(1).svg","dc6e9fdf6f0f240d467be0a0450126be"],["14990782f626308686.svg","3fad71bad6f91dfb890b219299cbac25"],["404.html","9a7c151110e205959da9a6810e1a6cec"],["Classes/class10.html","87c389f836d5547ee769eb82fcf37025"],["Dev.html","d41d8cd98f00b204e9800998ecf8427e"],["Snapchat-1407048496.jpg","847cc2522a7debae1d046da244114bd0"],["Snapchat-618579574.jpg","bb04bd9d5749b62c0a5647019dfa691b"],["Voicy_Say my name.mp3","dfe1c505f70814c4567a110a83a2fdc6"],["Voicy_You are god damn right.mp3","938abbe0b8e738eaa8f2bfbaf85947c3"],["blir.svg","8d7aacf1f5d4964135d78d67c93f1216"],["blur.svg","05103a2555879ce5e4e3e85534a76ae9"],["breaking-bad-walter-white.gif","ed624b9cc784445920db9fb6dd2641d5"],["collab partners/IMG-20240511-WA0000-EDIT.jpg","149233eda0da8f897b69962c57928b6d"],["collab partners/IMG-20240512-WA0081.jpg","5f7d3a87cec4a117f1674e065f2ec403"],["collab partners/n485y34n.png","8c976767cd7a1848c79406f1e916a72d"],["contact.html","0c9c2a551991d1583d100e918c756d3e"],["files/Alish.docx","7aa7c762dc01626d5fd0834d30806e10"],["files/CAO-Final-Report-cover-page (1).pdf","cb7029602b2c9402bb3adbc5f2808f2d"],["files/Deadlock.sumit.pdf","01787e35d5b99b78eefbb58a9376f4f9"],["files/Denisha.os.pdf","6f3390402e5016a5c987ecc53c7ef05b"],["files/Denisha.os_1.pdf","4de698706f752f729cd8455847db3b20"],["files/English (2).pdf","194d1729b8894242e9f5a3c7610f3014"],["files/English.pdf","c3ab190c9bc0f5f0b75812816b1307ec"],["files/Final Java Pdf.pdf","91a88acc0d38d50ecada952212c3f982"],["files/GroupB-OS.pdf","6f3390402e5016a5c987ecc53c7ef05b"],["files/GroupD-OS.pdf","c66f98c8fdac8698b2394a7df775a88b"],["files/GroupG,D.pdf","ca4e8d236b5dfe80e4350bbddaf8b7f0"],["files/GroupG,E-OS.pdf","6d6ced124860a3df1b8bc41e99891de3"],["files/Sumit.java.docx","7ff9b78ede555b1a04f42aa683ebe864"],["files/Sumit.java.pdf.docx","d409f07ff427a852fe9be42d2df64388"],["files/Untitled (3).pdf","ccc5b8a36382ef7bff2da4325d9b2f98"],["files/WMAD-Report-cover-page-final.pdf","4c9b4004ded21fb254a6e4957b122f14"],["files/groupF.pdf","0a561be250913188595548c744b31619"],["files/os group g.pdf","ca4e8d236b5dfe80e4350bbddaf8b7f0"],["files/pdf.cover.pdf","d0930cfd3853a434f938392eae664c9b"],["files/pdf.riyaj.pdf","bc914e1c87ea676cb5ee1c35c4f9e078"],["files/~$mit.java.docx","762e0ba1b0519333dc2fa2210c93a1d3"],["files/~$mit.java.pdf.docx","d04931416e0d7474eaeb055ccb1a834e"],["icons/Frame 1 (1).svg","947e2f06081e26de5a26eedbd1a8373e"],["icons/Frame 2 (1).svg","409652309f4448d8055978b74d08c8f4"],["icons/Frame 2.svg","5daf6264416a96e27265699f047ef607"],["icons/handwriting.cur","8d03d797d8f4d7ea8eaa544ac5eea51f"],["icons/link.cur","1d0a56b480fe48c6c4ed5154c45e3cec"],["icons/pointer.cur","c4d488bd8f4e787199402d1452b85961"],["icons/work.ani","6b0dde89ea7c55606854b1cea03440c7"],["ilu.html","99716180b4ab2f88ce3ae20cd2822484"],["index.html","d657470f9db14b4907e177ae1a8245d6"],["manifest.json","923dfd76478227455f1951d96f52c8f1"],["site.js","d526a7bd842aac98e11cef78bb9acc28"],["style.css","fdd5d55307c548816f9ee07fd3c126dd"],["suman (1).pdf","9a4b2a50ce71348818b5d09f42eeb698"],["sw.js","f31274826026170ac4eb57153ba1de50"],["waltwhite-breakingbad.gif","5c55ea5315b0a03fd83c8ff4d988c1ee"]];
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







