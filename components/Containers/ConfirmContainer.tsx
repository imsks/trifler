import { Icons, Spacer } from 'components';
import { IconButton } from 'components/Global/Button';
import { ConfirmContainerProps } from 'interfaces';

const ConfirmContainer = ({
  title,
  subtitle,
  primaryOnClick,
  secondaryOnClick,
}: ConfirmContainerProps) => {
  return (
    <div className="confirm">
      <div className="confirm__text">
        <h3 className="confirm__text__heading strong-text">{title}</h3>
        <p className="confirm__text__subheading pre-text">{subtitle} </p>
      </div>
      <Spacer block="7" />
      <div className="confirm__actions">
        <IconButton
          IconName={Icons.HIIcon.HiTrash}
          buttonClassname="btn-primary btn-sm confirm__actions__item-primary"
          iconClassname="confirm__actions__item__icon-primary"
          onClick={primaryOnClick}
        />
        <IconButton
          IconName={Icons.HIIcon.HiPlus}
          buttonClassname="btn-sm confirm__actions__item-secondary"
          iconClassname="confirm__actions__item__icon-secondary"
          onClick={secondaryOnClick}
        />
      </div>
    </div>
  );
};

export default ConfirmContainer;
