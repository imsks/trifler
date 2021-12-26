import { IconType } from 'react-icons';

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
