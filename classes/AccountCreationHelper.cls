public class AccountCreationHelper {
    
    /**
     * Creates a new Account record with the provided name and type
     * @param accountName The name for the new account
     * @param accountType The type of account (e.g., 'Customer', 'Partner', 'Prospect')
     * @return The created Account record with Id populated
     */
    public static Account createAccount(String accountName, String accountType) {
        if (String.isBlank(accountName)) {
            throw new IllegalArgumentException('Account name cannot be blank');
        }
        
        Account newAccount = new Account();
        newAccount.Name = accountName;
        newAccount.Type = accountType;
        newAccount.Industry = 'Technology'; // Default industry
        
        try {
            insert newAccount;
            return newAccount;
        } catch (DmlException e) {
            throw new DmlException('Failed to create account: ' + e.getMessage());
        }
    }
    
    /**
     * Creates multiple Account records in bulk
     * @param accountNames List of account names to create
     * @param accountType The type to assign to all accounts
     * @return List of created Account records
     */
    public static List<Account> createBulkAccounts(List<String> accountNames, String accountType) {
        if (accountNames == null || accountNames.isEmpty()) {
            return new List<Account>();
        }
        
        List<Account> accountsToInsert = new List<Account>();
        
        for (String accountName : accountNames) {
            if (String.isNotBlank(accountName)) {
                Account acc = new Account();
                acc.Name = accountName;
                acc.Type = accountType;
                acc.Industry = 'Technology';
                accountsToInsert.add(acc);
            }
        }
        
        if (!accountsToInsert.isEmpty()) {
            try {
                insert accountsToInsert;
            } catch (DmlException e) {
                throw new DmlException('Failed to create bulk accounts: ' + e.getMessage());
            }
        }
        
        return accountsToInsert;
    }
    
    /**
     * Updates an existing account's industry
     * @param accountId The Id of the account to update
     * @param newIndustry The new industry value
     */
    public static void updateAccountIndustry(Id accountId, String newIndustry) {
        if (accountId == null) {
            throw new IllegalArgumentException('Account Id cannot be null');
        }
        
        Account accountToUpdate = new Account();
        accountToUpdate.Id = accountId;
        accountToUpdate.Industry = newIndustry;
        
        try {
            update accountToUpdate;
        } catch (DmlException e) {
            throw new DmlException('Failed to update account industry: ' + e.getMessage());
        }
    }
}