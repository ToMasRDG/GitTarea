var edad = 14;
var mensaje = "";

if(edad > 18){
    mensaje = "La persona es mayor de edad";
} else {
    mensaje = "La persona es menor de edad";
}

//Operador ternario: (condicional) ? "Si se cumple" : "no se cumple"

mensaje = (edad > 18) ? "La persona es mayor de edad" : "La persona es menor de edad";
console.log(mensaje);

var edad_infante = 3;
var mensaje_infante = "";

mensaje_infante = (edad_infante < 2) ? "Es un bebe" : (edad_infante < 5) ? "Es un toddler": (edad_infante < 12) ? "Es un niño" : "Es un preadolescente";

console.log(mensaje_infante);

var Prueba= 15;
var Mensaje_prueba=""

Mensaje_prueba=(Prueba > 5)? "Aprobado":(Prueba<5)? "Reprobado": "Aplazado";

console.log(Mensaje_prueba+" fue el resultado de la prueba")
//Función Flecha: var nombreFuncion = (parametros) => codigo

function sumatoria(num1, num2) {
    return num1 + num2;
}

var sumatoriaFlecha = (num1, num2) => num1+num2;


console.log(sumatoriaFlecha(10, 5) + " Fue el resultado");
function recorrido(numero) {
    for(let i=0; i <= numero; i++) {
        console.log(i);
    }
}

var recorridoFlecha = numero => {
    for(let i=0; i <= numero; i++) {
        console.log(i);
    }
}

var doble = numero => 2*numero;

var doble_de_3 = doble(3);
console.log(doble_de_3);


/* 
Función que reciba un arreglo y regrese la suma de los números positivos e imprima la suma de los números negativos
Funciones Flecha
Operador Ternario
arr = [1, -1, 2, -2, 3, -3]
imprimir -6
return 6
 */
var sumaPositivos = arr => {
    var positivos = 0; //suma nums positivos
    var negativos = 0;
    var resultadoSuma=[] //suma nums negativos;
    for(let i=0; i<arr.length; i++) {
        positivos = arr[i] > 0 ? arr[i] : 0;
        negativos += arr[i] < 0 ? arr[i] : 0;
        resultadoSuma.push(positivos)
    }
    console.log("arr positivos:"+resultadoSuma);
    return positivos;
}   

sumaPositivos([1, -1, 2, -2, 3, -3])

//forEach:recorre un arreglo
var numeros=[1,2,3,4,5];
numeros.forEach(function (num){
    console.log("En este momento el valor es:"+num);
});

numeros.forEach(num => console.log("En este momento el valor es:"+num));

//filter genera una nueva lista recorriendo el arreglo original y agregando solo aquellos que cumplan con la condicion

var numerosFiltrados = numeros.filter(num => num > 2);

console.log(numerosFiltrados);

//map: va a generar una nueva lista recorriendo el array original y agregando o alterando el valor del elemento
var nombres= ["Pepitos","Pepitas","Repitoras","Pepitaras","Pepito","Pepita"]
var saludos= nombres.map(nombre=> `Hola ${nombre}, como estas?`);
console.log(saludos)

var nombres_filtrados=nombres.filter(nombre=> nombre.startsWith("P"));
console.log(nombres_filtrados)

var nuevos_saludos= nombres_filtrados.map(nombre =>`Hola ${nombre}!! te saludo de nuevo`)
console.log(nuevos_saludos)