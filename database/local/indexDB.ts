import Dexie, { Table } from 'dexie';
import {
  AddContactModel,
  AddCategoryModel,
  AddUserModel,
  AddRecentlyDialedContactsModel,
} from 'database';

export class MySubClassedDexie extends Dexie {
  contacts!: Table<AddContactModel>;
  categories!: Table<AddCategoryModel>;
  recentlyDialedContacts!: Table<AddRecentlyDialedContactsModel>;
  users!: Table<AddUserModel>;

  constructor() {
    super('triflerDb');
    this.version(1).stores({
      contacts: 'id, name, contactNo, categoryId, addedon, updatedOn',
      categories: 'id, name, description, addedon, updatedOn',
      recentlyDialedContacts: 'id, contactId, lastDialed',
      users: 'id, token, joinedOn, isStartedUsingApp',
    });
  }
}

export const indexDB = new MySubClassedDexie();
