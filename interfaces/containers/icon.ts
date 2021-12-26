import { IconType } from 'react-icons';

export interface IconContainerProps {
  IconName: IconType;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  iconClassName?: string;
  containerClassName?: string;
  activeIconClassName?: string;
}
