import { IconProps } from 'interfaces';

const Icon = ({ IconName, className, onClick }: IconProps) => {
  return (
    <div className={className}>
      <IconName onClick={onClick} />
    </div>
  );
};

export default Icon;
