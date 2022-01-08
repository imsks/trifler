import React from 'react';
import {
  Navbar,
  BottomNavbar,
  Loader,
  PageHeaderText,
  Spacer,
  EmptyStateContainer,
  ContactsContainer,
} from 'components';
import { useRecentDialedContacts, useRedirectToDashboard } from 'hooks';
import { EmptyContacts } from 'assets';
import { handleGoToContacts } from 'utils';

const Dashboard = () => {
  const isLoggedIn = useRedirectToDashboard();
  const recentlyDialedContacts = useRecentDialedContacts();

  if (!isLoggedIn) return <Loader />;

  const emptyPageState = recentlyDialedContacts.length === 0 && (
    <EmptyStateContainer
      imageSrc={EmptyContacts}
      heading="All calls you make will appear here"
      subHeading="Make some calls to add in recently dialed contacts."
      showButton={true}
      ctaText="Make a call"
      ctaOnClick={handleGoToContacts}
    />
  );

  const pageHeader = recentlyDialedContacts.length > 0 && (
    <>
      <PageHeaderText
        title="Recently Dialed Contacts"
        text="You've called these people recently."
      />
      <Spacer block="4" />
    </>
  );

  const contactsContainer = recentlyDialedContacts.length > 0 && (
    <ContactsContainer contacts={recentlyDialedContacts} />
  );

  return (
    <main className="dashboard">
      <div className="dashboard__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="5" />
        <div className="dashboard__container__content">
          {emptyPageState}
          {pageHeader}
          {contactsContainer}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
