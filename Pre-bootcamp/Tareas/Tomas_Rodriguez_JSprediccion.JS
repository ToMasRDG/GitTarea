//Primer prediccion: 
//Imprimira: Tengo 25 años
function miEdad() {

    console.log("Tengo: " + 25 + " años"); }

    //---------------------------------------------------//

 //Segunda Prediccion:
 //Imprimira: Tengo: 25 años ya que llamo a la funcion "edad" la cual tiene la variable edad = 25

function miEdad(edad) {

    console.log("Tengo: " + edad + " años"); 
}   
  //---------------------------------------------------//

//Tercer prediccion:
//Imprimira: ¡Restemos los números!, primerNumero es: 50, segundoNumero es:27, 23
function restar(primerNumero, segundoNumero) {

    console.log("¡Restemos los números!");

    console.log("primerNumero es:" + primerNumero);

    console.log("segundoNumero es:" + segundoNumero);

    
    var resultado = primerNumero - segundoNumero;

    console.log(resultado);
}
