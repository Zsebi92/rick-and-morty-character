public class Main {

    public static void main(String[] args) {


        int [] someNumbers = new int[3];

        someNumbers[0] = 2;
        someNumbers[1] = 4;
        someNumbers[2] = 6;

        int sum = someNumbers[0] + someNumbers[1];

        System.out.println("Aufgabe 3: Gebe die erste und dritte Stelle des Arrays aus");
        System.out.println(someNumbers[0]);
        System.out.println(someNumbers[2] + "\n");


        System.out.println("Aufgabe 4: Rechne die erste und zweite Stelle des Arrays zusammen");
        System.out.print(sum +"\n"+"\n");


        System.out.println("Aufgabe 5: Gebe die Länge des Arrays in der Konsole aus");
        System.out.println(someNumbers.length);

        System.out.println("Ein Weiterer Commit!");

        System.out.println("Ein Fancy Feature");

    }
}
