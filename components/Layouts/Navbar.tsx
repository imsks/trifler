import Image from 'next/image';
import Link from 'next/link';
import { Logo } from 'assets';
import { InstallAppContainer } from 'components';
import { NavbarProps } from 'interfaces';
import { pageRoutes } from 'utils';
import { useNavbarAvatar, useRedirectToDashboard } from 'hooks';

const Navbar = ({ isLanding = false }: NavbarProps) => {
  const avatar = useNavbarAvatar();
  const isLoggedIn = useRedirectToDashboard();

  const logoUrl = isLoggedIn
    ? pageRoutes.dashboard
    : pageRoutes.landingPage.index;

  const navbarActions = isLanding && (
    <div className="navbar__container__actions">
      <InstallAppContainer />
    </div>
  );

  const navbarAvatar = isLoggedIn && (
    <div className="c navbar__container__avtar">
      <div className="dd navbar__container__avtar__container">
        <div className="dd-a navbar__container__avtar__container__image">
          <Image
            src={avatar}
            alt="trifler-logo"
            className="navbar__container__avtar__container__image__container"
          />
        </div>
      </div>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <Link href={logoUrl} passHref={true}>
            <a>
              <Image src={Logo} alt="trifler-logo" />
            </a>
          </Link>
        </div>
        {navbarActions}
        {navbarAvatar}
      </div>
    </nav>
  );
};

export default Navbar;
