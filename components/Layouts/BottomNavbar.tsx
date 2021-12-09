import { Icons, Icon } from 'components';
import { handleGoCategory, handleGoContacts, handleGoDashboard } from 'utils';

const BottomNavbar = () => {
  return (
    <div className="bottomnavbar">
      <div className="bottomnavbar__container">
        <div className="bottomnavbar__container__content">
          <div className="bottomnavbar__container__content__items">
            <div
              onClick={handleGoDashboard}
              className="bottomnavbar__container__content__items__icon"
            >
              <Icon
                IconName={Icons.HIIcon.HiOutlineHome}
                className="bottomnavbar__container__content__items__item bottomnavbar__container__content__items__item--active"
              />
            </div>
            <div
              onClick={handleGoContacts}
              className="bottomnavbar__container__content__items__icon"
            >
              <Icon
                IconName={Icons.HIIcon.HiPhone}
                className="bottomnavbar__container__content__items__item"
              />
            </div>
            <div
              onClick={handleGoCategory}
              className="bottomnavbar__container__content__items__icon"
            >
              <Icon
                IconName={Icons.HIIcon.HiUserGroup}
                className="bottomnavbar__container__content__items__item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomNavbar;
