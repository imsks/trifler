import { NavbarDropdownItemProps } from 'interfaces';

const NavbarDropdownItem = ({ label, onClick }: NavbarDropdownItemProps) => {
  return (
    <li className="navbar__container__avtar__container__dropdown__list__item">
      <span
        onClick={onClick}
        className="navbar__container__avtar__container__dropdown__link pre-text"
      >
        {label}
      </span>
    </li>
  );
};

export default NavbarDropdownItem;
