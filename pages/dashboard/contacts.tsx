import React from 'react';
import { Navbar, BottomNavbar } from 'components';

const Contacts = () => {
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
