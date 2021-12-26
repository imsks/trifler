import { IconContainer, Icons, Spacer } from 'components';
import { ContactCardProps } from 'interfaces';
import { handleMakeCall } from 'utils';
import { handleGoToContactDetails } from 'utils';

const ContactCardContainer = ({
  id,
  name,
  categoryName,
  contactNo,
  showDelete,
  onDelete,
}: ContactCardProps) => {
  return (
    <div className="contactcard">
      <div className="contactcard__text">
        <h3 className="contactcard__text__title body">{name}</h3>
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
        <IconContainer
          onClick={() => handleGoToContactDetails(id)}
          IconName={Icons.HIIcon.HiArrowRight}
          containerClassName="contactcard__action__icon"
          iconClassName="contactcard__action__item"
          activeIconClassName={'contactcard__action__item--active'}
        />
        {showDelete && (
          <IconContainer
            onClick={() => onDelete(id)}
            IconName={Icons.HIIcon.HiTrash}
            containerClassName="contactcard__action__icon"
            iconClassName="contactcard__action__item"
            activeIconClassName={'contactcard__action__item--active'}
          />
        )}
      </div>
    </div>
  );
};

export default ContactCardContainer;
