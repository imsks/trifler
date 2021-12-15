import { indexDB } from 'database';
import { Contact } from 'interfaces';

// Get all contacts
const getAllContacts = () => {
  return new Promise((resolve, reject) => {
    indexDB.contacts
      .toArray()
      .then((contacts: Contact[]) => {
        resolve(contacts);
      })
      .catch((error) => reject(error));
  });
};

export { getAllContacts };
