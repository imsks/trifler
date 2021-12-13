import React from 'react';
import { Navbar, BottomNavbar } from 'components';
import { useRedirectToDashboard } from 'hooks';

const Dashboard = () => {
  useRedirectToDashboard();

  return (
    <main className="dashboard">
      <div className="dashboard__container">
        <Navbar />
        <BottomNavbar />
      </div>
    </main>
  );
};

export default Dashboard;
