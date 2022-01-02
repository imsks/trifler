import { IconType } from 'react-icons';

export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface IconButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  IconName: IconType;
  buttonClassname?: string;
  iconClassname?: string;
  buttonText?: string;
}

export interface FloatingActionButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  IconName: IconType;
}
