@isTest
public class AccountCreationHelperTest {
    
    @isTest
    static void testCreateAccountSuccess() {
        // Test successful account creation
        Test.startTest();
        Account createdAccount = AccountCreationHelper.createAccount('Test Account', 'Customer');
        Test.stopTest();
        
        // Verify the account was created successfully
        System.assertNotEquals(null, createdAccount.Id, 'Account should have been created with an Id');
        System.assertEquals('Test Account', createdAccount.Name, 'Account name should match');
        System.assertEquals('Customer', createdAccount.Type, 'Account type should match');
        System.assertEquals('Technology', createdAccount.Industry, 'Default industry should be Technology');
        
        // Verify the account exists in the database
        Account queriedAccount = [SELECT Id, Name, Type, Industry FROM Account WHERE Id = :createdAccount.Id];
        System.assertEquals('Test Account', queriedAccount.Name, 'Queried account name should match');
    }
    
    @isTest
    static void testCreateAccountWithBlankName() {
        // Test exception when account name is blank
        Test.startTest();
        try {
            AccountCreationHelper.createAccount('', 'Customer');
            System.assert(false, 'Expected IllegalArgumentException was not thrown');
        } catch (IllegalArgumentException e) {
            System.assertEquals('Account name cannot be blank', e.getMessage(), 'Exception message should match');
        }
        Test.stopTest();
    }
    
    @isTest
    static void testCreateAccountWithNullName() {
        // Test exception when account name is null
        Test.startTest();
        try {
            AccountCreationHelper.createAccount(null, 'Customer');
            System.assert(false, 'Expected IllegalArgumentException was not thrown');
        } catch (IllegalArgumentException e) {
            System.assertEquals('Account name cannot be blank', e.getMessage(), 'Exception message should match');
        }
        Test.stopTest();
    }
    
    @isTest
    static void testCreateBulkAccountsSuccess() {
        // Test successful bulk account creation
        List<String> accountNames = new List<String>{'Bulk Account 1', 'Bulk Account 2', 'Bulk Account 3'};
        
        Test.startTest();
        List<Account> createdAccounts = AccountCreationHelper.createBulkAccounts(accountNames, 'Partner');
        Test.stopTest();
        
        // Verify accounts were created
        System.assertEquals(3, createdAccounts.size(), 'Should have created 3 accounts');
        
        for (Integer i = 0; i < createdAccounts.size(); i++) {
            System.assertNotEquals(null, createdAccounts[i].Id, 'Account should have an Id');
            System.assertEquals(accountNames[i], createdAccounts[i].Name, 'Account name should match');
            System.assertEquals('Partner', createdAccounts[i].Type, 'Account type should be Partner');
        }
        
        // Verify accounts exist in database
        List<Account> queriedAccounts = [SELECT Id, Name FROM Account WHERE Name IN :accountNames];
        System.assertEquals(3, queriedAccounts.size(), 'Should find 3 accounts in database');
    }
    
    @isTest
    static void testCreateBulkAccountsWithEmptyList() {
        // Test with empty list
        Test.startTest();
        List<Account> result = AccountCreationHelper.createBulkAccounts(new List<String>(), 'Customer');
        Test.stopTest();
        
        System.assertEquals(0, result.size(), 'Should return empty list');
    }
    
    @isTest
    static void testCreateBulkAccountsWithNullList() {
        // Test with null list
        Test.startTest();
        List<Account> result = AccountCreationHelper.createBulkAccounts(null, 'Customer');
        Test.stopTest();
        
        System.assertEquals(0, result.size(), 'Should return empty list');
    }
    
    @isTest
    static void testCreateBulkAccountsWithBlankNames() {
        // Test with list containing blank names
        List<String> accountNames = new List<String>{'Valid Account', '', '   ', 'Another Valid Account'};
        
        Test.startTest();
        List<Account> createdAccounts = AccountCreationHelper.createBulkAccounts(accountNames, 'Prospect');
        Test.stopTest();
        
        // Should only create accounts for non-blank names
        System.assertEquals(2, createdAccounts.size(), 'Should have created 2 accounts (skipping blank names)');
        System.assertEquals('Valid Account', createdAccounts[0].Name, 'First account name should match');
        System.assertEquals('Another Valid Account', createdAccounts[1].Name, 'Second account name should match');
    }
    
    @isTest
    static void testUpdateAccountIndustrySuccess() {
        // Create test account first
        Account testAccount = new Account(Name = 'Test Update Account', Type = 'Customer', Industry = 'Technology');
        insert testAccount;
        
        Test.startTest();
        AccountCreationHelper.updateAccountIndustry(testAccount.Id, 'Healthcare');
        Test.stopTest();
        
        // Verify the update
        Account updatedAccount = [SELECT Id, Industry FROM Account WHERE Id = :testAccount.Id];
        System.assertEquals('Healthcare', updatedAccount.Industry, 'Industry should be updated to Healthcare');
    }
    
    @isTest
    static void testUpdateAccountIndustryWithNullId() {
        // Test exception when account Id is null
        Test.startTest();
        try {
            AccountCreationHelper.updateAccountIndustry(null, 'Healthcare');
            System.assert(false, 'Expected IllegalArgumentException was not thrown');
        } catch (IllegalArgumentException e) {
            System.assertEquals('Account Id cannot be null', e.getMessage(), 'Exception message should match');
        }
        Test.stopTest();
    }
}