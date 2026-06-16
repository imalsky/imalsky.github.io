/*
 * Self-destroying service worker.
 *
 * The previous version of this site (a Gatsby PWA using gatsby-plugin-offline /
 * Workbox) registered a service worker that caches the whole site offline. Returning
 * visitors' browsers keep serving that cached OLD site even after the new static site
 * is deployed. This worker replaces the old one, deletes its caches, unregisters
 * itself, and reloads open tabs so everyone gets the new site from the network.
 *
 * It is safe to delete this file once you're confident returning visitors have loaded
 * the site at least once after this was deployed.
 */
self.addEventListener('install', function () {
  // Activate immediately instead of waiting for existing tabs to close.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      // Remove every cache left behind by the old service worker.
      var keys = await caches.keys();
      await Promise.all(keys.map(function (key) { return caches.delete(key); }));

      // Unregister this service worker entirely.
      await self.registration.unregister();

      // Reload any open tabs so they fetch the new site directly from the network.
      var clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(function (client) {
        if ('navigate' in client) {
          client.navigate(client.url);
        }
      });
    })()
  );
});
