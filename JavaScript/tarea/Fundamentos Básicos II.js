/*Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5]. */

function Big(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            a[i] = "Big"
        }
    }
    return a
}


var arr = Big([-1, 3, 5, -5])
console.log(arr)


/* Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.  */

function b(a) {
    var max = 0
    var min = 0

    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        }

        if (a[i] < min) {
            min = a[i]
        }
    }
    console.log("minimo:" + min)
    return max
}
var arr = b([1, 5, 10, -2])

console.log("Regresa el numero mayor:" + arr)

/* Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/

function b(a) {
    var penultimo = 0;
    var b = 0;
    var Odd = [];
    var impar = 0;

    for (var i = 1; i < a.length; i += 2) {
        Odd.push([i])
    }
    impar = Odd[0]


    for (var i = 0; i < a.length; i++) {
        b = i - 1
    }

    penultimo = a[b]
    console.log("El penultimo es:" + penultimo)
    return impar
}
var arr = b([1, 5, 10, -2])

console.log("Regresa el primer numero impar:" + arr)

/*Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.  */

function Doble(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * 2
    }

    return x;
}

var y = Doble([1, 2, 3]);
console.log(y);

/* Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].*/

function Dojo(a) {
    var pvs = 0
    var b = 0
    for (var i = 0; i < a.length; i++) {
        b = i
        if (a[i] > 0) {
            pvs++
        }



    }
    a[b] = pvs
    return a
}

var arr = Dojo([-1, 1, 1, 1])
console.log(arr)

/*Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”. */

function Es_imparcial(arr) {
    let contadorImpares = 0;
    let contadorPares = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            contadorPares++;
            contadorImpares = 0;
        } else {
            contadorImpares++;
            contadorPares = 0;
        }


        if (contadorImpares === 3) {
            console.log("¡Qué imparcial!");
            contadorImpares = 0;
        }


        if (contadorPares === 3) {
            console.log("¡Es para bien!");
            contadorPares = 0;
        }
    }
}


Es_imparcial([1, 2, 3, 3, 3]);
Es_imparcial([1, 2, 2, 2, 3]);
Es_imparcial([1, 2, 1, 2, 3]);

/* Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. */

function Incr(a) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] += 1
        }
        console.log(arr[i])
    }
}
var arr = [1, 1, 1, 1]
Incr()


/* Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/
function longitudesPrevias(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}


var resultado = longitudesPrevias(["programar", "dojo", "genial"]);
console.log(resultado);

/* Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.  */
/* */
function AgregaSiete(a) {
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i] + 7
    }
    return a
}

AgregaSiete([1, 2, 3])
console.log(AgregaSiete([1, 2, 3]))

/*Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores) */
function ArrayInverso(a) {
    var inicio = 0;
    var final = a.length - 1;

    while (inicio < final) {
        [a[inicio], a[final]] = [a[final], a[inicio]];

        inicio++;
        final--;
    }
    return a;
}


let arrayOriginal = [3, 1, 6, 4, 2];
ArrayInverso(arrayOriginal)


/* Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].*/

function Negativa(a) {
    let element
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            a[i] = a[i] - (a[i] * 2);
            element = a[i]
        }
    }
    return a
}
Negativa([1, -3, 5])
console.log(Negativa([1, -3, 5]))
/* Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. */
function Hambre(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == "comida") {
            console.log("yummy")

        }
        else {
            console.log("Tengo hambre")
        }
    }
}
Hambre(["comida", "comida", 1, 1, "comida"])

/*Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.  */
function ArrayInverso(a) {
    let inicio = 0;
    let final = a.length - 1;


    [a[inicio], a[final]] = [a[final], a[inicio]];

    let penultimo = a.length - 2;
    let tercero = inicio + 2;

    [a[tercero], a[penultimo]] = [a[penultimo], a[tercero]];
    
    console.log(a)

}
ArrayInverso([1,2,3,4,5,6])
ArrayInverso([true, 42, "Ada", 2,"pizza"])

/*Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9]. */
function Escala(a,b) {
    for (let i = 0; i < a.length; i++) {
        a[i]=a[i]*b
        
    }
    return a
}

Escala([[1,2,3], 3])
console.log(Escala([1,2,3], 3))
