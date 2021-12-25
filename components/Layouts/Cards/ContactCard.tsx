import { IconContainer, Icons, Spacer } from 'components';
import { ContactCardProps } from 'interfaces';
import { handleMakeCall } from 'utils';

const ContactCard = ({
  name,
  categoryName,
  contactNo,
  onClick,
}: ContactCardProps) => {
  return (
    <div className="contactcard" onClick={onClick}>
      <div className="contactcard__text">
        <h3 className="contactcard__text__title subtitle">{name}</h3>
        {categoryName && (
          <>
            <Spacer block="8" />
            <div className="contactcard__category">
              <p className="contactcard__category__text pre-text">
                {categoryName}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="contactcard__action">
        <IconContainer
          onClick={() => handleMakeCall(contactNo)}
          IconName={Icons.HIIcon.HiPhone}
          containerClassName="contactcard__action__icon"
          iconClassName="contactcard__action__item"
          activeIconClassName={'contactcard__action__item--active'}
        />
      </div>
    </div>
  );
};

export default ContactCard;
