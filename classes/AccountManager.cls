public class AccountManager {

    public static Account createAccount(String accountName, String industry, Decimal annualRevenue) {
        Account newAccount = new Account();
        newAccount.Name = accountName;
        newAccount.Industry = industry;
        newAccount.AnnualRevenue = annualRevenue;

        insert newAccount;

        return newAccount;
    }
}