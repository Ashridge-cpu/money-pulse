const C='money-pulse-enc-'+1791923960,F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo.webp','./hero.webp','./stirling-avatar.mp4','./stirling-avatar.webm'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok&&F.some(f=>new URL(f,self.location).href===e.request.url.split('?')[0]))caches.open(C).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
