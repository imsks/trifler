export interface ContactCardProps {
  name: string;
  categoryName?: string;
  contactNo: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface CategoryCardProps {
  name: string;
  description?: string;
  noOfContacts: string | number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
