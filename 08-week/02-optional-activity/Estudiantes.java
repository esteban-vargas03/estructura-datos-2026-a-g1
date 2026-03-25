public class Estudiantes {

        static class nodo{
            String dato;
            nodo siguiente;

            nodo(String dato){
                this.dato = dato;
                this.siguiente = null;
            }
        }

        public static void main(String[] args) {
            nodo n1 = new nodo("Andres");
            nodo n2 = new nodo("Daniel");
            nodo n3 = new nodo("Alejandro");
            nodo n4 = new nodo("Santiago");

            n1.siguiente = n2;
            n2.siguiente = n3;
            n3.siguiente = n4;

            nodo cabeza = n1;

            System.out.println("Cabeza");
            System.out.println(" ↓");

            nodo actual = cabeza;
            while (actual != null){
                if (actual.siguiente != null){
                    System.out.print("[" + actual.dato + "] →");
                } else {
                    System.out.print(" [" + actual.dato + "] → NULL");
                }
                actual = actual.siguiente;
            }
        }
    }