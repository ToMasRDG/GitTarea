
/* Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].*/

function c(a) {

    for (var i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            a[i] = 0
        }
    }
    return a
}

var arr = c([-20, -5, 6, 11])
console.log(arr)



/* Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].*/

function moverAdelante(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr[2] = 0
    return arr
}
var Y = moverAdelante([1, 2, 3])
console.log(Y)

/** SEGUNDA FORMA */
function moverAdelante(arr) {
    arr.splice(0, 1)
    arr.push(0)
    return (arr)
}

var Y = moverAdelante([1, 2, 3])
console.log(Y)




/* Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].*/
function returnReverso(a) {
    var temp = a[0]
    a[0] = a[2]
    a[2] = temp

    return a
}

var y = returnReverso([1, 2, 3])
console.log(y)



/* Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/

function repetirValores(arr) {
    var cont = []

    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < 2; x++) {
            cont.push(arr[i])
        }
    }
    return cont
}

var y = repetirValores([4, "Ulysses", 42, "false"])
console.log(y)