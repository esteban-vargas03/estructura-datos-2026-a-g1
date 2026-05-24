public class Main {

    static class Node {
        String data;
        Node left;
        Node right;

        Node(String data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    static void preOrder(Node node) {
        if (node == null) return;
        System.out.println(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }

    public static void main(String[] args) {

        Node root = new Node("Director");

        root.left  = new Node("Depto. A");
        root.right = new Node("Depto. B");

        root.left.left   = new Node("Emp. A1");
        root.left.right  = new Node("Emp. A2");

        root.right.left  = new Node("Emp. B1");
        root.right.right = new Node("Emp. B2");

        System.out.println("Recorrido Preorden:");
        preOrder(root);
    }
}