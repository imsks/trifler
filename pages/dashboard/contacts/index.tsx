import React from 'react';
import {
  Navbar,
  BottomNavbar,
  Icons,
  FloatingActionButton,
  Spacer,
  EmptyStateContainer,
} from 'components';
import { useContacts } from 'hooks';
import { EmptyContacts } from 'assets';
import { handleAddContact } from 'utils';

const Contacts = () => {
  const contacts = useContacts();

  // console.log(contacts);

  const emptyPageState = contacts.length === 0 && (
    <EmptyStateContainer
      imageSrc={EmptyContacts}
      heading="You havn't added any contacts so far."
      subHeading=" Add a temporary contact in here and make a call"
      showButton={true}
      ctaText="Add your first contact"
      ctaOnClick={handleAddContact}
    />
  );

  return (
    <main className="contacts">
      <div className="contacts__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="1" />
        <div className="contacts__container__content">{emptyPageState}</div>
        <div className="contacts__container__action">
          <FloatingActionButton
            onClick={handleAddContact}
            IconName={Icons.HIIcon.HiPlus}
          />
        </div>
      </div>
    </main>
  );
};

export default Contacts;
