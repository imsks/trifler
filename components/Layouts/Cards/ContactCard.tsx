import { IconContainer, Icons, Spacer } from 'components';
import {
  addAContactToRecentlyDialedContact,
  getRecentlyDialContactIdIfExists,
  updateRecentlyDialedContact,
} from 'database/modules/recentDialedCalls';
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
  lastDialedOn,
}: ContactCardProps) => {
  const handleCalling = async () => {
    // 1. Make a call
    handleMakeCall(contactNo);

    // 2. Add to recent dialed calls
    // 2A. Check if contact exists already
    const recentDialedContactId = await getRecentlyDialContactIdIfExists({
      contactId: id,
    });

    // 2B. If contact does not exist, add to recent dialed calls
    if (!recentDialedContactId) {
      await addAContactToRecentlyDialedContact({ contactId: id });
      return;
    }

    // 2C. If contact exists, update the last dialed time
    await updateRecentlyDialedContact({ id: recentDialedContactId });
  };

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
        {lastDialedOn && (
          <>
            <Spacer block="7" />
            <p className="contactcard__text__subtitle pre-text">
              Last dialed: {lastDialedOn}
            </p>
          </>
        )}
      </div>
      <div className="contactcard__action">
        <IconContainer
          onClick={handleCalling}
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
