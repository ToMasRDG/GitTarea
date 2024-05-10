/*Instrucciones:
1.Abre VS Code y crea un nuevo archivo
2.Guarda el archivo con el siguiente nombre: TuNombre_TuApellido_JS_Practica y utiliza la extensión .js
3.Desarrolla lo presentado a continuación utilizando el conocimiento de los capítulos anteriores sobre funciones, condicionales, variables y tipos de datos
Comprime el archivo y súbelo a la plataforma
4.Imagina que estás desarrollando una aplicación que en base a la edad de un usuario determina si este es lo suficientemente mayor como para obtener una licencia de conducir. Tu tarea es crear la función que mostrará el mensaje adecuado al usuario.
--------------------------------------------------------------------------------------
Paso 1: crea la siguiente variable

Una variable edadUsuario que sea un número. Dale cualquier número entero positivo que desees.
Paso 2: crea una función llamada puedeObtenerLicencia.

Paso 3: dentro de la función, crea la siguiente lógica a través de una condicional

Si edadUsuario es mayor a 17, en console.log debe decir “¡Listo para obtener la licencia de  conducir!”. De lo contrario, console.log debe mostrar “Disculpa, debes esperar más años para conseguir tu licencia”
*/

var edadUsuario = 16

function puedeObtenerLicencia(){
if(edadUsuario > 17){
    console.log("¡Listo para obtener la licencia de  conducir!")
}
else{
    console.log("Disculpa, debes esperar más años para conseguir tu licencia")
}
}

puedeObtenerLicencia()