export interface Contact {
  id: string;
  name: string;
  contactNo: string;
  categoryId?: string;
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

export interface CategoryCard {
  id: string;
  name: string;
  description?: string;
  contacts?: Contact[];
}

export interface ContactCard {
  id: string;
  // recentlyDialedId?: string;
  name: string;
  contactNo: string;
  categoryName?: string;
  lastDialedOn?: string;
}
