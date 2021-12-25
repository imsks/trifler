import React from 'react';
import {
  Navbar,
  BottomNavbar,
  Icons,
  FloatingActionButton,
  Spacer,
  EmptyStateContainer,
  PageHeaderText,
  ContactCard,
} from 'components';
import { useContacts } from 'hooks';
import { EmptyContacts } from 'assets';
import { handleGoToAddContact, handleGoToContactDetails } from 'utils';

const Contacts = () => {
  const contacts = useContacts({ showcategory: true });

  const emptyPageState = contacts.length === 0 && (
    <EmptyStateContainer
      imageSrc={EmptyContacts}
      heading="You havn't added any contacts so far."
      subHeading=" Add a temporary contact in here and make a call"
      showButton={true}
      ctaText="Add your first contact"
      ctaOnClick={handleGoToAddContact}
    />
  );

  const addContactFloatingAction = contacts.length > 0 && (
    <div className="contacts__container__action">
      <FloatingActionButton
        onClick={handleGoToAddContact}
        IconName={Icons.HIIcon.HiPlus}
      />
    </div>
  );

  const pageHeader = contacts.length > 0 && (
    <>
      <PageHeaderText
        title="All contacts"
        text="Here you'll find all contacts you added. You can create as many as you
              want"
      />
      <Spacer block="4" />
    </>
  );

  return (
    <main className="contacts">
      <div className="contacts__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="4" />
        <div className="contacts__container__content">
          {emptyPageState}
          {pageHeader}
          <div className="contacts__container__content__contacts">
            {contacts.map((contact, index) => {
              const { id, name, categoryName, contactNo } = contact;
              return (
                <ContactCard
                  key={index}
                  name={name}
                  categoryName={categoryName}
                  contactNo={contactNo}
                  onClick={() => handleGoToContactDetails(id)}
                />
              );
            })}
          </div>
        </div>
        {addContactFloatingAction}
      </div>
    </main>
  );
};

export default Contacts;
