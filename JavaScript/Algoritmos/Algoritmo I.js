for (var i = 0; i < 5; i++) {
    console.log(i);
}

/*
VAR 
  -------|---------------     console.log :   0 - 1 2-3-4
   I     | 0 - 1 2-3-4
         |
         | 
         |
         |
         | 
         |
         |
         | 
*/
for (var i = 0; i < 5; i++) {
    i = i + 1;
    console.log(i);
}

/*
VAR 
  -------|---------------     console.log :   1-3-5
   I     | 0 -1-2-3-4-5-6
         |
         | 
         |
         |
         | 
         |
         |
         | 
*/
for(var i=0; i<5; i++)
    {
       i = i + 3; 
       console.log(i);
    }
    
/*
VAR 
  -------|---------------     console.log :   3-7
   I     | 0 -3-4-5-8
         |
         | 
         |
         |
         | 
         |
         |
         | 
*/

function y(num1, num2){   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 
  /*
VAR 
  -------|---------------     console.log : 5, 8
   2,3   | 5
   3,5   | 8
         | 
         |
         |
         | 
         |
         |
         | 
*/


function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))

 /*
VAR 
  -------|---------------     console.log : 5,2,8, 3
   2,3   | 5
   3,5   | 8
         | 
         |
         |
         | 
         |
         |
         | 
*/
var a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
var b = y(10);
console.log(b);

 /*
VAR 
  -------|---------------     console.log : 15,10,10
       a | 15 
      (a)| 10
       b | 10
         |
         |
         | 
         |
         |
         | 
*/

var a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
var b = y(10);
console.log(b);

 /*
VAR 
  -------|---------------     console.log : 15, 10,20
        a| 15
      (a)| 10
       b | 20
         |
         |
         | 
         |
         |
         | 
*/
 








