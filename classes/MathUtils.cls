public class MathUtils {

    public static Integer add(Integer num1, Integer num2) {
        return num1 + num2;
    }

    public static Integer subtract(Integer num1, Integer num2) {
        return num1 - num2;
    }

    public static Integer multiply(Integer num1, Integer num2) {
        return num1 * num2;
    }

    public static Integer divide(Integer num1, Integer num2) {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            // Handle division by zero
            return null;
        }
    }
}