// ServiceWorker 

const nombreCache = 'apv-v5';
/* Catchar archivos */
const archivos= [
    './', //Catched pagina principal
    'index.html',
    'error.html',
    'css/bootstrap.css',
    'css/styles.css',
    'js/app.js',
    'js/apv.js'
];
//Cuando se instala el service worker, este codigo solo se ejecuta una vez
self.addEventListener('install', e=>{
    console.log('Instalado el Service Worker');
    //console.log('e', e);


    //Espera hasta que se descarguen todos los archivos y agragando a cache
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                    console.log('cacheando');
                    cache.addAll(archivos);
                })
    )
} )

//Activar el service worker, se ejcuta cuando se activa el service worker
self.addEventListener('activate', e=>{
    console.log('Service Worker Activado');
   
    e.waitUntil(
        caches.keys()
            .then(keys =>{
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                    .map(key => caches.delete(key)) //Borra versiones anteriores de cache
                )
            })
    )
})

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e=>{
    console.log('fetch...');
    //console.log('e', e);

    e.respondWith(
        caches.match(e.request) //Revisa el tipo de request y en caso de que sea igual a lo que tenemos en chace vamos a cargar lo que esta en cache
        .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))
    )
})