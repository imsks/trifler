import { IconContainer, Icons, Spacer } from 'components';
import {
  addAContactToRecentlyDialedContact,
  getRecentlyDialContactIdIfExists,
  updateRecentlyDialedContact,
} from 'database';
import { ContactCardProps } from 'interfaces';
import { handleMakeCall, redirectToWhatsapp } from 'utils';
import { handleGoToContactDetails } from 'utils';

const ContactCardContainer = ({
  id,
  name,
  categoryName,
  contactNo,
  showDelete,
  showWhatsappButton,
  lastDialedOn,
  onDelete,
}: ContactCardProps) => {
  const handleCalling = async () => {
    handleMakeCall(contactNo);

    const recentDialedContactId = await getRecentlyDialContactIdIfExists({
      contactId: id,
    });

    if (!recentDialedContactId) {
      await addAContactToRecentlyDialedContact({ contactId: id });
      return;
    }

    await updateRecentlyDialedContact({ id: recentDialedContactId });
  };

  const showDeleteContainer = showDelete && (
    <IconContainer
      onClick={() => onDelete(id)}
      IconName={Icons.HIIcon.HiTrash}
      containerClassName="contactcard__action__icon"
      iconClassName="contactcard__action__item"
      activeIconClassName={'contactcard__action__item--active'}
    />
  );

  const showWhatsappButtonContainer = showWhatsappButton && (
    <IconContainer
      onClick={() => redirectToWhatsapp(contactNo)}
      IconName={Icons.AntIcon.AiOutlineWhatsApp}
      containerClassName="contactcard__action__icon"
      iconClassName="contactcard__action__item"
      activeIconClassName={'contactcard__action__item--active'}
    />
  );

  return (
    <div className={`contactcard ${showDelete && 'contactcard__incategory'}`}>
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
        {showWhatsappButtonContainer}
        {showDeleteContainer}
      </div>
    </div>
  );
};

export default ContactCardContainer;
