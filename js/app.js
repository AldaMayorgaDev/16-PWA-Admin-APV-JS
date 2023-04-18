/* Progressive Web Apps y Service Wrokers */
/* Aplicaciones web progresivas 

    Caracteristicas:
        -Rapidas: Cargan toda la informacion en menos de 5seg
        -Instalable: se puede navegar o instalar en tu navegadro o telefono movil como una app nativa
        -Soporte offline: Pueden funcionar incluso sin conexion a internet.

*/

/* Service Workers

    Es la base de una PWA. Son Scrippts que están corriendo todo el tiempo detrasde escenas.
    Escuchan cuando hay y cuando no hay conexion.
    
    Funcionan Offline
    NO tienen acceso a DOM
    Cargan de forma instantanea
    Pueden sincronizar datos detras de escena o sin interferir en la navegacion.


    Funciones NO disponibles en Service Workers

    -window (utiliza self)
    -document (Se utiliza caches)
    -localStorage(Se utiliza fetch)
*/

//Revisa si nuestro navegador soporta el service worker
if('serviceWorker' in navigator){
    //Registrar el serviceWorker
    navigator.serviceWorker.register('./sw.js') //Regresa un promise
        .then(resgistrado =>{
            return console.log('Se Instalo Correctamente', resgistrado)
        })
        .catch(error => console.log('Hubo un error, Fallo la instalacion', error));
}else{
    console.log('Service worker no soportado');
}