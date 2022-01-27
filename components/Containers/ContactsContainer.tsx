import { ContactCardContainer } from 'components';
import { ContactsContainerProps } from 'interfaces';

const ContactsContainer = ({
  contacts,
  showDelete,
  showWhatsappButton,
  onDeleteContact,
}: ContactsContainerProps) => {
  return (
    <div
      className={`contacts__container__content__contacts ${
        showDelete && 'contacts__container__content__contacts__incategory'
      }`}
    >
      {contacts.map((contact, index) => {
        const { id, name, categoryName, contactNo, lastDialedOn } = contact;
        return (
          <ContactCardContainer
            key={index}
            id={id}
            name={name}
            categoryName={categoryName}
            contactNo={contactNo}
            showDelete={showDelete}
            showWhatsappButton={showWhatsappButton}
            lastDialedOn={lastDialedOn}
            onDelete={() => onDeleteContact(id)}
          />
        );
      })}
    </div>
  );
};

export default ContactsContainer;
