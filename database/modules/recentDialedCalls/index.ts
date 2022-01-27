import {
  AddCategoryModel,
  AddRecentlyDialedContactsModel,
  getCategoryByCategoryId,
  getContactByContactId,
  indexDB,
  UpdateRecentlyDialedContactsModel,
} from 'database';
import { ContactCard } from 'interfaces';
import { getRanddomID } from 'utils';

// Get all recent dials
const getAllRecentDialedContacts = (): Promise<
  AddRecentlyDialedContactsModel[]
> => {
  return new Promise((resolve, reject) => {
    indexDB.recentlyDialedContacts
      .toArray()
      .then((recentlyDialedContacts: AddRecentlyDialedContactsModel[]) => {
        resolve(recentlyDialedContacts);
      })
      .catch((error) => reject(error));
  });
};

// Add A Contact To Recently Dialed
const addAContactToRecentlyDialedContact = ({ contactId }) => {
  return new Promise((resolve, reject) => {
    const contact: AddRecentlyDialedContactsModel = {
      id: getRanddomID(),
      contactId,
      lastDialed: new Date(Date.now()),
    };

    indexDB.recentlyDialedContacts
      .add(contact)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Update A Contact To Recently Dialed
const updateRecentlyDialedContact = ({ id }) => {
  return new Promise((resolve, reject) => {
    const updatedRecentlyDialedContact: UpdateRecentlyDialedContactsModel = {
      lastDialed: new Date(Date.now()),
    };

    indexDB.recentlyDialedContacts
      .update(id, updatedRecentlyDialedContact)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Get recent contact id if exists
const getRecentlyDialContactIdIfExists = ({ contactId }) => {
  return new Promise((resolve, reject) => {
    indexDB.recentlyDialedContacts
      .where('contactId')
      .equals(contactId)
      .first()
      .then((value) => {
        if (value) resolve(value.id);
        resolve(false);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Get all mapped recent contacts for card
const getAllRecentDialedContactsForCard = async (
  result: AddRecentlyDialedContactsModel[],
) => {
  return Promise.all(
    result.map(async (recentlyDialedContact) => {
      const { contactId, lastDialed } = recentlyDialedContact;

      const { name, contactNo, categoryId } = await getContactByContactId(
        contactId,
      );

      let category: AddCategoryModel;

      if (categoryId) category = await getCategoryByCategoryId(categoryId);

      const lastDialedDate = new Date(lastDialed);

      return {
        id: contactId,
        name,
        contactNo,
        categoryName: category ? category.name : '',
        lastDialedOn:
          lastDialedDate.toLocaleTimeString().substring(0, 5) +
          ' | ' +
          lastDialedDate.toDateString().substring(0, 10),
      } as ContactCard;
    }),
  );
};

export {
  addAContactToRecentlyDialedContact,
  getRecentlyDialContactIdIfExists,
  updateRecentlyDialedContact,
  getAllRecentDialedContacts,
  getAllRecentDialedContactsForCard,
};
