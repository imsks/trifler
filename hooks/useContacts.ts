import { useEffect, useState } from 'react';
import { getAllContacts } from 'database';
import { Contact } from 'interfaces';

const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getAllContacts().then(setContacts);
  }, []);

  return contacts;
};

export default useContacts;
