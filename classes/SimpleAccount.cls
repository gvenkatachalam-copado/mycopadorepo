public class SimpleAccount {
    public static void createAccount(String name, String industry, Decimal annualRevenue, String phonenumber) {
        Account acc = new Account();
        acc.Name = name;
        acc.Industry = industry;
        acc.AnnualRevenue = annualRevenue;
        acc.Phone = phonenumber;
        insert acc;
    }
}