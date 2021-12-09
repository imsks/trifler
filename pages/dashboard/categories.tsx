import { Navbar, BottomNavbar } from 'components';

const Categories = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__container">
        <Navbar />
        <BottomNavbar />
        <h1>Categories</h1>
      </div>
    </main>
  );
};

export default Categories;
