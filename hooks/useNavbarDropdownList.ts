import { NavbarDropdownItemProps } from 'interfaces';
import { useEffect, useState } from 'react';
import { handleInstallApp } from 'utils';
import useInstallAppButton from './useInstallAppButton';

const useNavbarDropdownList = () => {
  const [dropdownItems, setDropdownItems] = useState<
    Array<NavbarDropdownItemProps>
  >([]);
  const installAppEvent = useInstallAppButton();

  useEffect(() => {
    let dropdownItems = [];

    // 1. Add Install App button
    if (installAppEvent) {
      dropdownItems = [
        {
          label: 'Install App',
          onClick: () => handleInstallApp(installAppEvent),
        },
        ...dropdownItems,
      ];
    }

    setDropdownItems(dropdownItems);
  }, [installAppEvent]);

  return dropdownItems;
};

export default useNavbarDropdownList;
