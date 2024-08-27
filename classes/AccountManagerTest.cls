@isTest
public class AccountManagerTest {

    @isTest
    static void testCreateAccount() {
        // Arrange
        String accountName = 'TestAccount';
        String industry = 'Technology';
        Decimal annualRevenue = 1000000.00;

        // Act
        Account createdAccount = AccountManager.createAccount(accountName, industry, annualRevenue);

        // Assert
        // Verify that the account was created successfully
        System.assertNotEquals(null, createdAccount.Id, 'Account Id should not be null');
        System.assertEquals(accountName, createdAccount.Name, 'Account Name is incorrect');
        System.assertEquals(industry, createdAccount.Industry, 'Industry is incorrect');
        System.assertEquals(annualRevenue, createdAccount.AnnualRevenue, 'Annual Revenue is incorrect');
    }
}