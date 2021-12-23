import { AddContactModel, indexDB } from 'database';
import { Contact } from 'interfaces';
import { getRanddomID } from 'utils';

// Get all contacts
const getAllContacts = () => {
  return new Promise((resolve, reject) => {
    indexDB.contacts
      .toArray()
      .then((contacts: Contact[]) => {
        resolve(contacts);
      })
      .catch((error) =>
        reject({ errorStack: error, message: 'Something went wrong' }),
      );
  });
};

// Add A Contact
const addAContact = ({
  name,
  contactNo,
  categoryId = null,
  categoryName = null,
}) => {
  return new Promise((resolve, reject) => {
    const contact: AddContactModel = {
      id: getRanddomID(),
      name,
      contactNo,
      categoryId,
      categoryName,
      addedon: new Date(Date.now()),
    };

    indexDB.contacts
      .add(contact)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Get all contacts by category ID
const getContactsByCategoryID = (
  categoryId: string,
): Promise<AddContactModel[]> => {
  return new Promise((resolve, reject) => {
    indexDB.contacts
      .where('categoryId')
      .equals(categoryId)
      .toArray()
      .then((value) => {
        resolve(value);
      })
      .catch((error) =>
        reject({ errorStack: error, message: 'Something went wrong' }),
      );
  });
};

export { getAllContacts, addAContact, getContactsByCategoryID };
