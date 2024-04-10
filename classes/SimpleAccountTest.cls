@isTest
public class SimpleAccountTest {
    @isTest
    static void testCreateAccount() {
        // Test data
        String testName = 'Test Account';
        String testIndustry = 'Technology';
        Decimal testAnnualRevenue = 1000000;
        String testphonenumber = '9626376858';

        // Call the method to create an account
        Test.startTest();
        SimpleAccount.createAccount(testName, testIndustry, testAnnualRevenue, testphonenumber);
        Test.stopTest();

        // Query the created account
        Account createdAccount = [SELECT Name, Industry, AnnualRevenue, Phone FROM Account WHERE Name = :testName];

        // Verify the account fields
        System.assertEquals(testName, createdAccount.Name);
        System.assertEquals(testIndustry, createdAccount.Industry);
        System.assertEquals(testAnnualRevenue, createdAccount.AnnualRevenue);
        System.assertEquals(testphonenumber, createdAccount.Phone);
    }
}