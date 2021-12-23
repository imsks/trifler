// db.ts
import Dexie, { Table } from 'dexie';
import { AddContactModel, AddCategoryModel, AddUserModel } from 'database';

export class MySubClassedDexie extends Dexie {
  contacts!: Table<AddContactModel>;
  categories!: Table<AddCategoryModel>;
  users!: Table<AddUserModel>;

  constructor() {
    super('triflerDb');
    this.version(1).stores({
      contacts:
        'id, name, contactNo, categoryId, categoryName, addedon, updatedOn',
      categories: 'id, name, description, addedon, updatedOn',
      users: 'id, joinedOn, isStartedUsingApp',
    });
  }
}

export const indexDB = new MySubClassedDexie();
