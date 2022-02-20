import React from 'react';
import {
  Navbar,
  BottomNavbar,
  Icons,
  FloatingActionButton,
  Spacer,
  EmptyStateContainer,
  PageHeaderText,
  ContactsContainer,
} from 'components';
import { useContacts } from 'hooks';
import { EmptyContacts } from 'assets';
import { handleGoToAddContact } from 'utils';

const Contacts = () => {
  const contacts = useContacts({ showcategory: true });

  const emptyPageState = contacts.length === 0 && (
    <EmptyStateContainer
      imageSrc={EmptyContacts}
      heading="You haven't added any contact."
      subHeading="Add a contact to get started"
      showButton={true}
      ctaText="Add first contact"
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
        text="All your contacts. You can add as many as you want."
      />
      <Spacer block="4" />
    </>
  );

  const contactsContainer = contacts.length > 0 && (
    <ContactsContainer contacts={contacts} showWhatsappButton={true} />
  );

  return (
    <main className="contacts">
      <div className="contacts__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="5" />
        <div className="contacts__container__content">
          {emptyPageState}
          {pageHeader}
          {contactsContainer}
        </div>
        {addContactFloatingAction}
      </div>
    </main>
  );
};

export default Contacts;
