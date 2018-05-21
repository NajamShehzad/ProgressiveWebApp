const staticAssets = [
    './',
    './app.js',
    
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1')
            .then(res => {
                console.log('wait.........!')
                return res.addAll(staticAssets);
            })
    );
    console.log('installed');
    // var cache = caches.open('v1');
    // cache.addAll(staticAssets);
});

self.addEventListener('activate', (event) => {
    console.log('activated');
});


self.addEventListener('fetch', (ev) => {
    console.log('Fetch from Service Worker ', ev);
    const req = ev.request;
    const url = new URL(req.url);
    
    ev.respondWith(cacheFirst(req));
 
  });
  
  async function cacheFirst(req) {
    let cacheRes = await caches.match(req);
    return cacheRes || fetch(req);
  }
  
  
  