import { IconType } from 'react-icons';

export interface IconProps {
  IconName: IconType;
  className?: string;
  onClick?: () => void;
}
