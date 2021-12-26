import { ContactCardContainer } from 'components';
import { ContactCard } from 'interfaces';
import { handleGoToContactDetails } from 'utils';

interface ContactsContainerProps {
  contacts: ContactCard[];
  showDelete?: boolean;
}

const ContactsContainer = ({
  contacts,
  showDelete,
}: ContactsContainerProps) => {
  return (
    <div className="contacts__container__content__contacts">
      {contacts.map((contact, index) => {
        const { id, name, categoryName, contactNo } = contact;
        return (
          <ContactCardContainer
            key={index}
            name={name}
            categoryName={categoryName}
            contactNo={contactNo}
            onClick={() => handleGoToContactDetails(id)}
            showDelete={showDelete}
          />
        );
      })}
    </div>
  );
};

export default ContactsContainer;
