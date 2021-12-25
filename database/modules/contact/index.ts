import {
  AddContactModel,
  getCategoryNameByCategoryId,
  indexDB,
} from 'database';
import { Contact, ContactCard } from 'interfaces';
import { getRanddomID } from 'utils';

// Get all contacts
const getAllContacts = (): Promise<Contact[]> => {
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
const addAContact = ({ name, contactNo, categoryId = null }) => {
  return new Promise((resolve, reject) => {
    const contact: AddContactModel = {
      id: getRanddomID(),
      name,
      contactNo,
      categoryId,
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

// Get all contacts with categories
const getAllContactsWithCategories = async (contacts: Contact[]) => {
  return Promise.all(
    contacts.map(async (contact) => {
      const { id, name, categoryId, contactNo } = contact;

      // If category ID exists
      if (categoryId) {
        const category = await getCategoryNameByCategoryId(categoryId);

        return {
          id,
          name,
          categoryName: category.name,
          contactNo,
        } as ContactCard;
      }

      return {
        id,
        name,
        contactNo,
      } as ContactCard;
    }),
  );
};

export {
  getAllContacts,
  addAContact,
  getContactsByCategoryID,
  getAllContactsWithCategories,
};
