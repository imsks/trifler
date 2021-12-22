export interface AddContactModel {
  id: string;
  name: string;
  contactNo: string;
  categoryId?: string;
  categoryName?: string;
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
  joinedOn: Date;
  isStartedUsingApp?: boolean;
}
