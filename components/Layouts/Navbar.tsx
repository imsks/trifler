import Image from 'next/image';
import Link from 'next/link';
import {
  GaneshGaitondeAvtar,
  SpiderManAvtar,
  CaptainAmericaShieldAvatar,
  IronManHelmetavatar,
  Logo,
} from 'assets';
import { Button } from 'components';
import { NavbarProps } from 'interfaces';
import { handleUseApp, pageRoutes } from 'utils';
import { useRedirectToDashboard } from 'hooks';
import { useEffect, useState } from 'react';

const Navbar = ({ isLanding = false }: NavbarProps) => {
  const [avatar, setAvatar] = useState<StaticImageData>(null);
  const isLoggedIn = useRedirectToDashboard();

  const logoUrl = isLoggedIn
    ? pageRoutes.dashboard
    : pageRoutes.landingPage.index;

  const navbarActions = isLanding && (
    <div className="navbar__container__actions">
      <Button
        text="Use App"
        className="btn-primary btn-md navbar__container__actions__button-primary"
        onClick={handleUseApp}
      />
    </div>
  );

  const handleLogout = () => {
    // TODO: In next version
    console.log('LOGGED OUT');
  };

  const getRandomAvatar = () => {
    const avatars: Array<StaticImageData> = [
      GaneshGaitondeAvtar,
      SpiderManAvtar,
      CaptainAmericaShieldAvatar,
      IronManHelmetavatar,
    ];

    // Get random avatar
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    setAvatar(randomAvatar);
  };

  useEffect(() => {
    getRandomAvatar();
  }, []);

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
        <input
          type="checkbox"
          className="navbar__container__avtar__container__checkbox"
        />
        <div className="dd-c navbar__container__avtar__container__dropdown">
          <ul className="navbar__container__avtar__container__dropdown__list">
            <li className="navbar__container__avtar__container__dropdown__list__item">
              <a
                href="#"
                onClick={handleLogout}
                className="navbar__container__avtar__container__dropdown__link pre-text"
              >
                Logout
              </a>
            </li>
          </ul>
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
