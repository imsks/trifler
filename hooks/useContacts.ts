import { useEffect, useState } from 'react';
import { getAllContacts, getAllContactsWithCategories } from 'database';
import { Contact, ContactCard } from 'interfaces';

const useContacts = ({ showcategory = false }) => {
  const [contacts, setContacts] = useState<Contact[] | ContactCard[]>([]);

  useEffect(() => {
    getAllContacts().then(async (contactsData) => {
      if (showcategory) {
        const contactsWithCategories: ContactCard[] =
          await getAllContactsWithCategories(contactsData);

        setContacts(contactsWithCategories);
      } else {
        setContacts(contactsData);
      }
    });
  }, []);

  return contacts;
};

export default useContacts;
