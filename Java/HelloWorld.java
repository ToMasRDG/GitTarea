public class HelloWorld {
    public static void saludo() {
        System.out.println("¡Hola mundo!");
    }

    // sobrecarga : mas de un metodo con el mismo nombre, recibiendo parametros
    // distintos y comportamientos distintos
    public static void saludo(String nombre) {
        System.out.println("Hola " + nombre );
    }

    public static void saludo(String nombre, String apellidos) {
        return "¡Hola " + nombre + " " + apellidos + "!";
    }
}