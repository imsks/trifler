import { useEffect, useState } from 'react';
import { ContactCard } from 'interfaces';
import {
  AddRecentlyDialedContactsModel,
  getAllRecentDialedContacts,
  getAllRecentDialedContactsForCard,
} from 'database';

const useRecentDialedContacts = () => {
  const [contacts, setContacts] = useState<ContactCard[]>([]);

  useEffect(() => {
    getAllRecentDialedContacts().then(
      async (result: AddRecentlyDialedContactsModel[]) => {
        const recentDialedContacts = await getAllRecentDialedContactsForCard(
          result,
        );

        setContacts(recentDialedContacts);
      },
    );
  }, []);

  return contacts;
};

export default useRecentDialedContacts;
