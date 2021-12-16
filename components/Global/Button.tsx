import { ButtonProps, FloatingActionButtonProps } from 'interfaces';
import Icon from './Icon';

export const Button = ({
  text,
  className = 'btn-primary btn-md',
  onclick,
}: ButtonProps) => {
  return (
    <button className={'btn ' + className} onClick={onclick}>
      {text}
    </button>
  );
};

export const FloatingActionButton = ({
  IconName,
  onClick,
}: FloatingActionButtonProps) => {
  return (
    <button className="floatingactionbutton btn" onClick={onClick}>
      <Icon IconName={IconName} className="floatingactionbutton__icon" />
    </button>
  );
};
