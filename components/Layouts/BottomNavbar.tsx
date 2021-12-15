import { Icons, IconContainer } from 'components';
import { handleGoCategory, handleGoContacts, handleGoDashboard } from 'utils';
import { IconContainerProps } from 'interfaces';
import { useBottomNavbarIcons } from 'hooks';

const BottomNavbar = () => {
  const iconIndex = useBottomNavbarIcons();

  const bottomIcons: IconContainerProps[] = [
    {
      onClick: handleGoDashboard,
      IconName: Icons.HIIcon.HiOutlineHome,
    },
    {
      onClick: handleGoContacts,
      IconName: Icons.HIIcon.HiPhone,
    },
    {
      onClick: handleGoCategory,
      IconName: Icons.HIIcon.HiUserGroup,
    },
  ];

  return (
    <div className="bottomnavbar">
      <div className="bottomnavbar__container">
        <div className="bottomnavbar__container__content">
          <div className="bottomnavbar__container__content__items">
            {bottomIcons.map((bottomIcon, key) => {
              const { onClick, IconName } = bottomIcon;

              return (
                <IconContainer
                  key={key}
                  onClick={onClick}
                  IconName={IconName}
                  containerClassName="bottomnavbar__container__content__items__icon"
                  iconClassName="bottomnavbar__container__content__items__item"
                  activeIconClassName={
                    iconIndex === key &&
                    'bottomnavbar__container__content__items__item--active'
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomNavbar;
