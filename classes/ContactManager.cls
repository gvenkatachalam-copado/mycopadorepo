public class ContactManager {

    public static Contact createContact(String firstName, String lastName, String email) {
        Contact newContact = new Contact();
        newContact.FirstName = firstName;
        newContact.LastName = lastName;
        newContact.Email = email;

        insert newContact;

        return newContact;
    }
}