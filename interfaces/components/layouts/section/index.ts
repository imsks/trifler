import { ContactCard } from 'interfaces';
import { IconType } from 'react-icons';

export interface EmptyStateContainerProps {
  imageSrc: string | StaticImageData;
  heading?: string;
  subHeading?: string;
  showButton?: boolean;
  ctaText?: string;
  ctaOnClick?: () => void;
}

export interface PageHeaderTextProps {
  title: string;
  text?: string;
  actions?: HeaderActions[];
}

export interface HeaderActions {
  IconName: IconType;
  onClick: React.MouseEventHandler<HTMLElement>;
  buttonClassname?: string;
  iconClassname?: string;
}

export interface AddItemNavbarProps {
  title?: string;
}

export interface ConfirmContainerProps {
  title: string;
  subtitle?: string;
  primaryOnClick: React.MouseEventHandler<HTMLElement>;
  secondaryOnClick: React.MouseEventHandler<HTMLElement>;
}

export interface ContactsContainerProps {
  contacts: ContactCard[];
  showDelete?: boolean;
  showWhatsappButton?: boolean;
  onDeleteContact?: (id: string) => void;
}
