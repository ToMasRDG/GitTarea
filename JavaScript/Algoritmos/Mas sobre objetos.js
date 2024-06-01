//Cuando creamos un Objeto, tal vez no lo hagamos correctamente la primera vez.Hagamos otro Objeto que represente a Dojo:

var dojo = {};                                 // crea un objeto vacío
dojo = {
    name: 'Coding Dojo',                         // la propiedad puede almacenar un string
    number_of_students: 25,                      // la propiedad puede almacenar un número
    instructors: ['Andrew', 'Michael', 'Jay'],   // la propiedad puede almacenar arrays
    location: {                                  // ¡la propiedad puede incluso almacenar otro objeto!
        city: 'San Jose',
        state: 'CA',
        zipcode: 95112
    }
}                                              // accede a las propiedades del objeto con notación de punto (.)
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // o notación de [] corchete (nota: escribe la clave entre comillas)

//Luego de crear un nuevo objeto, puede que necesitemos agregar una nueva clave con un nuevo valor, no solo actualizar la información que contiene nuestro Objeto. Agreguemos una nueva clave a nuestro Objeto Dojo llamado snacks, un array de snacks que tenemos en nuestro Dojo.

dojo.snacks = ['Fig Bars', 'Bagels', 'Popcorn', 'Apples'];

//Ahora que hemos agregado una nueva clave con un valor para nuestro objeto, actualicemos entonces algunas de las claves anteriores con nuevos valores. Cada vez que usemos la misma clave, reasignaremos el valor para esa clave.

dojo.number_of_students = 40;         // podemos reasignar cualquiera de las propiedades
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";

//Si tuviéramos que console.log nuestro objeto esto es lo que veríamos:

{
    name: 'Coding Dojo',
        number_of_students: 40,
            instructors: ['Andrew', 'Michael', 'Jay'],
                location: {
        city: 'Bellevue',
            state: 'Washington',
                zipcode: 'unknown'
    },
    snacks: ['Fig Bars', 'Bagels', 'Popcorn', 'Apples']
} 
//Arrays de Objetos
//Es muy común ver arrays de objetos, donde todos los objetos tiene las claves pero con diferentes valores. Veamos el conjunto de donas favoritas de Mike.

var glazedDonuts = [
    {
        frosting: 'glazed',
        style: 'cake',
        type: 'old fashioned',
        age: '45',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'regular',
        age: '5',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'jelly filled',
        age: '1',
        time: 'seconds'
    }
];

//Entonces podrías ir a la tienda de donas y preguntar algo como: ¿Puedo comprar la primera dona en el estante si esta ha estado fuera del horno por menos de 25 minutos ? Esta conversación llevada a código sería algo como esto:

var purchase;
//Tú
if ((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds') {
    //dueño de la tienda
    purchase = glazedDonuts[0];
}
else {
    console.log('sorry it has been out a bit longer');
} 
//Como puedes ver, estamos accediendo a un Array de glazedDonuts donde cada índice representa un objeto. Ese objeto tiene claves que podemos imprimir y luego echar un vistazo a los detalles. 

//Digamos que Mike decide usar todo lo que tiene en el bolsillo para comprarse cuantas donas pueda. Revisemos todas las donas disponibles para ver cuántas puede comprar.

var numPurchase = 0;
for (var donut in glazedDonuts) {
    console.log(glazedDonuts[donut].type);
    if ((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds') {
        numPurchase++;
    }
    else {
        console.log('not this donut...');
    }
}
console.log(numPurchase);

//¡Parece que Mike puede comprar 2 donas!