import { Icon } from 'components';
import { IconContainerProps } from 'interfaces';

const IconContainer = ({
  IconName,
  onClick,
  containerClassName,
  iconClassName,
  activeIconClassName,
}: IconContainerProps) => {
  return (
    <div onClick={onClick} className={containerClassName}>
      <Icon
        IconName={IconName}
        className={iconClassName + ' ' + activeIconClassName}
      />
    </div>
  );
};

export default IconContainer;
