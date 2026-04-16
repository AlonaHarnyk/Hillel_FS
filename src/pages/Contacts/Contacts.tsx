import { useEffect, useState } from "react";
import { getContacts } from "../../api/contactsServices";
import type { Contact } from "../../types/contacts";

export const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>{contact.name}</li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
