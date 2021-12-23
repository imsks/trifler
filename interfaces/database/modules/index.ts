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

export interface ShowContact {
  id: string;
  name: string;
  categoryName?: string;
}

export interface ShowCategory {
  id: string;
  name: string;
  description?: string;
}

export interface CategoryCard {
  id: string;
  name: string;
  description?: string;
  contacts?: Contact[];
}
