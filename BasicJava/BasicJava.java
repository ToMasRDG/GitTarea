import java.util.ArrayList;
import java.util.Arrays;
public class BasicJava {
    /*metodos */

    public static void imprimir1255() {
        for(int i = 1; i <= 255; i++){
            System.out.println(i);
        }
    }
    public static void inpares() {
        for(int i = 1; i <= 255; i++){
            if(i % 2 != 0){
                System.out.println(i);
            } 
        }
    }
    public static void suma(){
        int acumulador = 0; 
        for(int i = 0; i <= 255; i++){
            acumulador += i;
            System.out.println("Nuevo numero: "+i+" Suma: "+acumulador);
        }
    }
    public static void arreglos(){
        Integer[] nums1 = {3,5,1,2,7,9,8,13,25,32};
        ArrayList<Integer> numsArray1 = new ArrayList<>(Arrays.asList(nums1));
        for(int i = 0; i < numsArray1.size(); i++){
            System.out.println(numsArray1.get(i));
        }
        /*for(int i = 1; i <= 13; i+=2) {
            arreglo.add(i);
        }*/        
        /*arreglo.add(1);
        arreglo.add(3);
        arreglo.add(5);
        arreglo.add(7);
        arreglo.add(9);
        arreglo.add(13);*/
    }
    public static void maximo(){
        Integer[] nums2 = {3,5,1,2,1257,9,8,0,25,-32};
        int max = nums2[0];
        ArrayList<Integer> numsArray2 = new ArrayList<>(Arrays.asList(nums2));
        for(int i = 0; i < numsArray2.size(); i++){
            if(numsArray2.get(i) > max) {
                max = numsArray2.get(i);
            }
        }
        System.out.println(max);
    }
    public static void promedio(){
        float suma = 0;
        Integer[] nums3 = {3, 8, 0};
        ArrayList<Integer> numsArray3 = new ArrayList<>(Arrays.asList(nums3));
        for(int i = 0; i < numsArray3.size(); i++){
            suma += numsArray3.get(i);
        }
        System.out.println("Promedio: "+suma / numsArray3.size());
    }
    public static void arregloInpar(){
        ArrayList<Integer> numsInpar = new ArrayList<>();
        for(int i = 1; i <= 255; i++){
            if(i % 2 != 0){
                numsInpar.add(i);
            } 
        }
        System.out.println(numsInpar);
    }
}
