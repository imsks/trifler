import React from 'react';
import { Navbar, BottomNavbar } from 'components';

const Dashboard = () => {
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
