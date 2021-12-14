import React from 'react';
import { Navbar, BottomNavbar, Loader } from 'components';
import { useRedirectToDashboard } from 'hooks';

const Dashboard = () => {
  const isLoggedIn = useRedirectToDashboard();

  if (!isLoggedIn) return <Loader />;

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
