import { useInstallAppButton } from 'hooks';
import { NavbarDropdownItemProps } from 'interfaces';
import { useEffect, useState } from 'react';
import { generateInstallAppConfig, generateRegisterPageConfig } from 'utils';

const useNavbarDropdownList = () => {
  const [dropdownItems, setDropdownItems] = useState<
    Array<NavbarDropdownItemProps>
  >([]);
  const installAppEvent = useInstallAppButton();

  useEffect(() => {
    const dropdownItems: Array<NavbarDropdownItemProps> = [];

    // 1. Dropdown configs
    // 1A. Install App Config
    if (installAppEvent) {
      const installAppConfig = generateInstallAppConfig(installAppEvent);

      dropdownItems.push(installAppConfig);
    }

    // TODO: Check if User Data exists then only show Register Page Link
    const registerPageConfig = generateRegisterPageConfig();
    dropdownItems.push(registerPageConfig);

    console.log(dropdownItems);

    setDropdownItems(dropdownItems);
  }, [installAppEvent]);

  return dropdownItems;
};

export default useNavbarDropdownList;
