// db.ts
import Dexie, { Table } from 'dexie';
import { Contact, Category, User } from 'database';

export class MySubClassedDexie extends Dexie {
  contacts!: Table<Contact>;
  categories!: Table<Category>;
  users!: Table<User>;

  constructor() {
    super('triflerDb');
    this.version(1).stores({
      contacts: 'id, name, contactNo, categoryId, addedon, updatedOn',
      categories: 'id, name, description, contacts, addedon, updatedOn',
      users: 'id, joinedOn, isStartedUsingApp',
    });
  }
}

export const indexDB = new MySubClassedDexie();
