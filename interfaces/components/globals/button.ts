import { IconType } from 'react-icons';

export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface IconButtonProps {
  onClick: () => void;
  IconName: IconType;
  buttonClassname?: string;
  iconClassname?: string;
}

export interface FloatingActionButtonProps {
  onClick: () => void;
  IconName: IconType;
}
