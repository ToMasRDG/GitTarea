function a(x,y){
    return 5;
  }
  console.log(a(5,5))
/*
  VAR 
  ------|---------------     console.log :  5
        | 
        |
        | 
        |
        |
        | 
        |
        |
        | 
*/

  function a(x,y){
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = a(2,2)
console.log(b);
console.log(a(6,8));

/*
  VAR 
  ------|---------------     console.log : [2,2,5], [2,2,5], [6,8,5], [6,8,5]
    x   | 2 6
    y   | 2 8
    z   | [2,2,5]
        |
        |
        | 
        |
        |
        | 
*/



function a(x){
   var z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
 }
 var y = a(2);
 y.push(5);
 console.log(y);
 /*
  VAR 
  ------|---------------     console.log :  [2,2,5]
      y | [2,2] - [2,2,5]
        |
        | 
        |
        |
        | 
        |
        |
        | 
*/

 function a(x){
    if(x[0] < x[1]) {
       return true;
    }
    else {
       return false;
    }
 }
 var b = a([2,3,4,5])
 console.log(b);
/*
  VAR 
  ------|---------------     console.log :  true
        | 
        |
        | 
        |
        |
        | 
        |
        |
        | 
*/
 
 function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
        x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
    }
    return x;
}
console.log(a([5,7,-1,4]))
/*
  VAR 
  ------|---------------     console.log :  5 , 'Coding', 'Dojo', 4
     a  | [5,7,-1,4] - [ 5 , Coding, Dojo, 4]
        |
        | 
        |
        |
        | 
        |
        |
        | 
*/

function a(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 var b = a([5,10])
 console.log(b);
/*
  VAR 
  ------|---------------     console.log :  10
        | 
        |
        | 
        |
        |
        | 
        |
        |
        | 
*/
 function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
/*
  VAR 
  ------|---------------     console.log : 
        | 
        |
        | 
        |
        |
        | 
        |
        |
        | 
*/

/*----------------------------------------------------------------------------Parte_2---------------------------------------------------------------------------- */ 
/*printAverag */

function printAverage(x){
    var sum = 0;
    // Calcula la suma de todos los elementos del arreglo
    for(var i = 0; i < x.length; i++){
        sum += x[i];
    }
    // Devuelve el promedio
    return sum / x.length;
 }
 
 var y = printAverage([1,2,3]);
 console.log(y); // debería mostrar 2
 
 y = printAverage([2,5,8]);
 console.log(y); // debería mostrar 5
 
 /*  function returnOddArray() */

 function returnOddArray(){
    var odd = [];
    for(var i = 1; i <= 255; i++){ 
        if(i % 3 == 0){
            odd.push(i);
        }
    }
    return odd;
 }
 

 var y = returnOddArray(); 
 console.log(y); 
 

 /*squareValue */

 function squareValue(x){
    for(var i =0;i<x.length;i++){
        x [i]=x[i]*x[i]
    }
    // your code here
    return x;
 }
 var y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
 