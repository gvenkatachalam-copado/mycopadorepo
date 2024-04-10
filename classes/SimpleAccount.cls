public class SimpleAccount {
    public static void createAccount(String name, String industry, Decimal annualRevenue) {
        Account acc = new Account();
        acc.Name = name;
        acc.Industry = industry;
        acc.AnnualRevenue = annualRevenue;
        insert acc;
    }
}