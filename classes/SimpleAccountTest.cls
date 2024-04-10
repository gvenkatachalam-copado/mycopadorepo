@isTest
public class SimpleAccountTest {
    @isTest
    static void testCreateAccount() {
        // Test data
        String testName = 'Test Account';
        String testIndustry = 'Technology';
        Decimal testAnnualRevenue = 1000000;

        // Call the method to create an account
        Test.startTest();
        SimpleAccount.createAccount(testName, testIndustry, testAnnualRevenue);
        Test.stopTest();

        // Query the created account
        Account createdAccount = [SELECT Name, Industry, AnnualRevenue FROM Account WHERE Name = :testName];

        // Verify the account fields
        System.assertEquals(testName, createdAccount.Name);
        System.assertEquals(testIndustry, createdAccount.Industry);
        System.assertEquals(testAnnualRevenue, createdAccount.AnnualRevenue);
    }
}