@isTest
public class ContactManagerTest {

    @isTest
    static void testCreateContact() {
        // Arrange
        String firstName = 'John';
        String lastName = 'Doe';
        String email = 'john.doe@example.com';

        // Act
        Contact createdContact = ContactManager.createContact(firstName, lastName, email);

        // Assert
        // Verify that the contact was created successfully
        System.assertNotEquals(null, createdContact.Id, 'Contact Id should not be null');
        System.assertEquals(firstName, createdContact.FirstName, 'First Name is incorrect');
        System.assertEquals(lastName, createdContact.LastName, 'Last Name is incorrect');
        System.assertEquals(email, createdContact.Email, 'Email is incorrect');
    }
}