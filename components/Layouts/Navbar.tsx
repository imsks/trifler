import { Logo } from 'assets';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <Image src={Logo} alt="trifler-logo" />
        </div>
        <div className="navbar__container__actions">
          <button className="navbar__container__actions__button-primary btn btn-md btn-primary">
            Use App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
