import { NavbarDropdownItem } from 'components';
import { useNavbarDropdownList } from 'hooks';

const NavbarDropdownContainer = () => {
  const dropdownItems = useNavbarDropdownList();

  if (dropdownItems.length === 0) return null;

  return (
    <div className="dd-c navbar__container__avtar__container__dropdown navbar__container__avtar__container__dropdown-blink">
      <ul className="navbar__container__avtar__container__dropdown__list">
        {dropdownItems.map((dropdownItem, key) => {
          const { label, onClick } = dropdownItem;
          return (
            <NavbarDropdownItem label={label} onClick={onClick} key={key} />
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarDropdownContainer;
