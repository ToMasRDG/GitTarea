/*Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.  */
function a(a){
    var mayores=[]
    for(var i =0;i<a.length;i++){
        if(a[i]>y){
            mayores.push(a[i])
        }
    } 
    return mayores
}

var y = 10
var arr = a([20,5,6,11])
console.log(arr)

/*Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.  */
function b(a){
     var max=0
     var min=0
     var avrg=0
      var sum=0   
        for(var i =0;i<a.length;i++){
                if(a[i]> max){
                max=a[i]
                }

            if(a[i]< min){
                min=a[i]
        }
      sum+=a[i];

    }
       avrg=sum/a.length  
    console.log("maximo:"+max)
    console.log("minimo:" +min)
    console.log("promedio:"+avrg)
}
var arr = b([20,5,6,11])

/*Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5]. */
function c(a){
    for(var i =0;i<a.length;i++){
        if(a[i]<0){
            a[i]="Dojo"
        }
        return a
    }
}


var arr=c([-20,-5,6,11])
console.log(arr)

/*Escribe un codigo que cumpla la siguiente consigna: Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70]. */

function removerRango(arr,a,b){

    arr.splice(a,b-a+1)
return removerRango(arr)
}

var Y= removerRango([20,30,40,50,60,70],2,4)
console.log (Y)