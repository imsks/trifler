export interface ContactCardProps {
  id: string;
  name: string;
  categoryName?: string;
  contactNo: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  showDelete?: boolean;
  onDelete?: (id: string) => void;
  lastDialedOn?: string;
}

export interface CategoryCardProps {
  name: string;
  description?: string;
  noOfContacts: string | number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
