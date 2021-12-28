import {
  AddRecentlyDialedContactsModel,
  indexDB,
  UpdateRecentlyDialedContactsModel,
} from 'database';
import { getRanddomID } from 'utils';

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

export {
  addAContactToRecentlyDialedContact,
  getRecentlyDialContactIdIfExists,
  updateRecentlyDialedContact,
};
