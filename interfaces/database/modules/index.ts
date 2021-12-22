export interface Contact {
  id: string;
  name: string;
  contactNo: string;
  categoryId?: string;
  categoryName?: string;
  addedon: Date;
  updatedOn: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  contacts?: Contact[];
  addedon: Date;
  updatedOn: Date;
}

export interface ShowCategory {
  id: string;
  name: string;
  description?: string;
}
