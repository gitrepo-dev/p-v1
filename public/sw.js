let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/src_pages_home_index_ts.chunk.js",
        "/index.html"
      ])
    })
  )
})

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) return result
      return fetch(event.request);
    })
  )
})