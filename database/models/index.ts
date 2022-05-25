export interface AddContactModel {
  id: string;
  name: string;
  contactNo: string;
  categoryId?: string;
  addedon: Date;
  updatedOn?: Date;
}

export interface AddCategoryModel {
  id: string;
  name: string;
  description?: string;
  addedon: Date;
  updatedOn?: Date;
}

export interface AddUserModel {
  id: string;
  token?: string;
  joinedOn: Date;
  isStartedUsingApp?: boolean;
}

export interface AddRecentlyDialedContactsModel {
  id: string;
  contactId: string;
  lastDialed: Date;
}

export interface UpdateRecentlyDialedContactsModel {
  lastDialed: Date;
}

export interface UpdateCategoryModel {
  name?: string;
  description?: string;
  updatedOn: Date;
}

export interface UpdateContactModel {
  name?: string;
  contactNo?: string;
  categoryId?: string;
  updatedOn: Date;
}
