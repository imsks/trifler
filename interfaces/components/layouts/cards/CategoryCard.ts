export interface CategoryCardProps {
  key: string;
  name: string;
  description?: string;
  noOfContacts: string | number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
