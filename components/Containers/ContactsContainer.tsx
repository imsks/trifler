import { ContactCardContainer } from 'components';
import { ContactsContainerProps } from 'interfaces';

const ContactsContainer = ({
  contacts,
  showDelete,
  onDeleteContact,
}: ContactsContainerProps) => {
  return (
    <div className="contacts__container__content__contacts">
      {contacts.map((contact, index) => {
        const { id, name, categoryName, contactNo } = contact;
        return (
          <ContactCardContainer
            key={index}
            id={id}
            name={name}
            categoryName={categoryName}
            contactNo={contactNo}
            showDelete={showDelete}
            onDelete={() => onDeleteContact(id)}
          />
        );
      })}
    </div>
  );
};

export default ContactsContainer;
