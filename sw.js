/* ServiceWorker */

//Cuando se instala el service worker, este codigo solo se ejecuta una vez
self.addEventListener('install', e=>{
    console.log('Instalado el Service Worker');
    console.log('e', e);
} )

//Activar el service worker, se ejcuta cuando se activa el service worker
self.addEventListener('activate', e=>{
    console.log('Service Worker Activado');
    console.log('e', e);
})

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e=>{
    console.log('fetch...');
    console.log('e', e);
})