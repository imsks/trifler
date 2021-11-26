import { Logo } from 'assets';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <Link href="/" passHref={true}>
            <a>
              <Image src={Logo} alt="trifler-logo" />
            </a>
          </Link>
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
