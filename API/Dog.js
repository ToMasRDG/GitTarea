//Promesa

function mostrarPerro() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            var imagen_perro = `<img alt="perro" src="${data.message}">`;
            document.querySelector('.imagen-perro').innerHTML = imagen_perro;
            console.log(data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}
async function muestraPerritoAsync() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var data = await response.json();
    var imagen_perrito = `<img alt="perrito" src="${data.message}" >`;
    document.querySelector('.imagen-perro').innerHTML = imagen_perrito;
}

//La elección entre muestraPerritoAsync() y mostrarPerro() depende de tus preferencias y preferencias de estilo de codificación. Aquí hay algunas consideraciones que puedes tener en cuenta:

//Simplicidad y legibilidad: Si prefieres un estilo de codificación más sencillo y legible, muestraPerritoAsync() con async/await puede ser más fácil de entender y mantener. Es más conciso y evita la anidación excesiva de promesas utilizando then().
//Flexibilidad: Si deseas tener un mayor control sobre el manejo de errores y las promesas, mostrarPerro() con métodos de encadenamiento (then()) puede ser más flexible. Puedes agregar manejadores de errores utilizando catch() y realizar acciones adicionales después de obtener los datos de la API.
//Estilo de codificación: Considera el estilo de codificación de tu equipo o proyecto. Si el resto del código utiliza métodos de encadenamiento (then()), es posible que sea más coherente y //consistente utilizar mostrarPerro(). Por otro lado, si el resto del código utiliza async/await, es posible que prefieras muestraPerritoAsync() para mantener la consistencia en el estilo de codificación.