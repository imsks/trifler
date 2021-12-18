import {
  ButtonProps,
  FloatingActionButtonProps,
  IconButtonProps,
} from 'interfaces';
import Icon from './Icon';

export const Button = ({
  text,
  className = 'btn-primary btn-md',
  onClick,
}: ButtonProps) => {
  return (
    <button className={'btn ' + className} onClick={onClick}>
      {text}
    </button>
  );
};

export const IconButton = ({
  IconName,
  onClick,
  buttonClassname,
  iconClassname,
}: IconButtonProps) => {
  return (
    <button className={`btn ` + buttonClassname} onClick={onClick}>
      <Icon IconName={IconName} className={iconClassname} />
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
