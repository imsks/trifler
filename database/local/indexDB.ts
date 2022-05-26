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

  SchemaV1 = {
    contacts: 'id, name, contactNo, categoryId, addedon, updatedOn',
    categories: 'id, name, description, addedon, updatedOn',
    recentlyDialedContacts: 'id, contactId, lastDialed',
    users: 'id, joinedOn, isStartedUsingApp',
  };

  SchemaV2 = {
    contacts: 'id, name, contactNo, categoryId, addedon, updatedOn',
    categories: 'id, name, description, addedon, updatedOn',
    recentlyDialedContacts: 'id, contactId, lastDialed',
    users: 'id, token, joinedOn, isStartedUsingApp',
  };

  constructor() {
    super('triflerDb');
    this.version(1).stores(this.SchemaV1);

    this.version(2)
      .stores(this.SchemaV2)
      .upgrade(() => {
        console.log('Updated Schema');
      });
  }
}

export const indexDB = new MySubClassedDexie();
