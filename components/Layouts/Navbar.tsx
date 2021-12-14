import Image from 'next/image';
import Link from 'next/link';
import { Logo } from 'assets';
import { Button } from 'components';
import { NavbarProps } from 'interfaces';
import { handleUseApp, pageRoutes } from 'utils';
import { useRedirectToDashboard } from 'hooks';

const Navbar = ({ isLanding = false }: NavbarProps) => {
  const isLoggedIn = useRedirectToDashboard();

  const logoUrl = isLoggedIn
    ? pageRoutes.dashboard
    : pageRoutes.landingPage.index;

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
        {isLanding && (
          <div className="navbar__container__actions">
            <Button
              text="Use App"
              className="btn-primary btn-md navbar__container__actions__button-primary"
              onclick={handleUseApp}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
