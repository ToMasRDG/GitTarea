/* Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/
function a() {
    for (var i; i <= 255; i++) {
        console.log(i)
    }
}

a(255)
/* Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio */
function pares(a) {
    var par = [];
    var sum = 0;
    for (var i = 1; i <= a; i++) {
        if (i % 2 == 0) {
            sum += i
            par.push(i);
        }
    }
    console.log("los numeros pares son:" + par)
    console.log("la suma es:" + sum)
}
pares(1000)

/* Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).v */
function impares(a) {
    var impar = [];
    var sum = 0;
    var esc = [];
    for (var i = 1; i <= a; i++) {
        if (i % 2 == 1) {
            sum += i
            impar.push(i)

        }

        console.log("los numeros impares son:" + impar)
        console.log("la suma es:" + sum)
    }
}
impares(5000)

/*FORMA CORTA */

function impares(a) {
    var impar = [];
    var sum = 0;
    var esc = [];
    for (var i = 1; i <= a; i += 2) {
        sum += i
        impar.push(i)
    }
    console.log("los numeros impares son:" + impar)
    console.log("la suma es:" + sum)
}
impares(5000)

/* Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).  */

function Arr(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i]
    }
    console.log(sum)
}

Arr([1, 2, 5])
/* Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). */
function b(a) {
    var max = 0

    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        }
    }
    console.log("maximo:" + max)

}
var arr = b([20, 5, 6, 11])
/* Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).*/
function b(a) {

    var avrg = 0
    var sum = 0
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    avrg = sum / a.length

    console.log("promedio:" + avrg)
}
var arr = b([20, 5, 6, 11])

/* Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.*/
function impares(a) {
    var impar = [];
    for (var i = 1; i <= a; i++) {
        if (i % 2 == 1) {
            impar.push(i)
        }
        console.log("los numeros impares son:" + impar)
    }
}
impares(50)

/* Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). */
function b(a) {

    var mayores = [];
    var Y = 3;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > Y) {
            mayores.push(a[i])
        }
    }
    console.log("mayores que Y:" + mayores)

}

var arr = b([1, 3, 5, 7])

/* Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]). */
function cuadrado(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i]
    }

    return x;
}
var y = cuadrado([1, 5, 10, -2]);
console.log(y);

/* Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */
function c(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            a[i] = 0;
        } 
    }
    return a
}


var arr = c([1,5,10,-2])
console.log(arr)
/*Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]). */

function b(a) {
    var max = 0
    var min = 0
    var avrg = 0
    var sum = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        }

        if (a[i] < min) {
            min = a[i]
        }
        sum += a[i];

    }
    avrg = sum / a.length
    console.log("maximo:" + max)
    console.log("minimo:" + min)
    console.log("promedio:" + avrg)
}
var arr = b([1,5,10,-2])

/* Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).  */
function cambiar(a){
    var temp=0
        temp=a[0]
        a[0]=a[3]
        a[3]=temp
        return a
}
var y=cambiar([1,5,10,-2])
console.log(y)

/* De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].*/

function Dojo(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            a[i] = "Dojo"
        } 
    }
    return a
}


var arr = Dojo([-1,-3,2])
console.log(arr)