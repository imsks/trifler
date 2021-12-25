import Image from 'next/image';
import Link from 'next/link';
import { Logo } from 'assets';
import { Icons } from 'components';
import { AddItemNavbarProps } from 'interfaces';
import { handleGoBack, pageRoutes } from 'utils';
import { IconButton } from 'components/Global/Button';

const AddItemNavbar = ({ title }: AddItemNavbarProps) => {
  return (
    <nav className="additemnavbar">
      <div className="additemnavbar__container">
        <div className="additemnavbar__container__logo">
          <Link href={pageRoutes.dashboard} passHref={true}>
            <a>
              <Image src={Logo} alt="trifler-logo" />
            </a>
          </Link>
        </div>
        {title && (
          <h3 className="additemnavbar__container__title body">{title}</h3>
        )}
        <IconButton
          IconName={Icons.HIIcon.HiPlus}
          onClick={handleGoBack}
          buttonClassname="additemnavbar__container__action"
          iconClassname="additemnavbar__container__action__icon"
        />
      </div>
    </nav>
  );
};

export default AddItemNavbar;
