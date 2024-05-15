console.log("primera funcion")
function a() {
    return 35;
}

console.log(a())

/* console log: 35 */
console.log("segunda funcion")
function a() {
    return 4;
}
console.log(a() + a());

/*console.log: 8 */
console.log("tercera funcion")

function a(b) {
    return b;
}
console.log(a(2) + a(4));

/*console.log: 6 */
console.log("cuarta funcion")
function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));

/*console.log: 3, 9*/
console.log("quinta funcion")
function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));

/*console.log:40 */

console.log("sexta funcion")

function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

/*console.log:4 */

console.log("septima funcion")

function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));

/*console.log:10,3,30 */
console.log("octava funcion")
function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

/*3,4 */
console.log("novena funcion")

function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();

/*2,5,8,11 */
console.log("decima funcion")

function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));
/*console.log:0,1,2,3,4,5,6,7,8,9,0 */

console.log("decima primer funcion")

function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}

/*console.log: */
console.log("decima segunda funcion")
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}

var z = 10;
/*console.log: */

console.log("decima tercer funcion")
function a() {
    var z = 15;
    console.log(z);
}
console.log(z);
/*console.log: */

console.log("decima cuarta funcion")
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);
/*console.log:10,    15 */

console.log("decima quinta funcion")
var z = 10;
function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
/*console.log: 15 ,15*/




