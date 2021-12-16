import { IconType } from 'react-icons';

export interface ButtonProps {
  text: string;
  className?: string;
  onclick?: () => void;
}

export interface FloatingActionButtonProps {
  onClick: () => void;
  IconName: IconType;
}
