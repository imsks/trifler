import React from 'react';
import { Navbar, BottomNavbar } from 'components';
import { useContacts } from 'hooks';

const Contacts = () => {
  const contacts = useContacts();

  console.log(contacts);

  return (
    <main className="dashboard">
      <div className="dashboard__container">
        <Navbar />
        <BottomNavbar />
        <h1>CONTACTS</h1>
      </div>
    </main>
  );
};

export default Contacts;
