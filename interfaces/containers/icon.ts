import { IconType } from 'react-icons';

export interface IconContainerProps {
  IconName: IconType;
  onClick?: () => void;
  iconClassName?: string;
  containerClassName?: string;
  activeIconClassName?: string;
}
