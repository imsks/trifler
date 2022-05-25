import { useInstallAppButton } from 'hooks';
import { NavbarDropdownItemProps } from 'interfaces';
import { useEffect, useState } from 'react';
import { generateInstallAppConfig } from 'utils';

const useNavbarDropdownList = () => {
  const [dropdownItems, setDropdownItems] = useState<
    Array<NavbarDropdownItemProps>
  >([]);
  const installAppEvent = useInstallAppButton();

  useEffect(() => {
    let dropdownItems: Array<NavbarDropdownItemProps> = [];

    // Dropdown configs
    const installAppConfig = generateInstallAppConfig(installAppEvent);

    console.log(installAppEvent);

    dropdownItems = [
      {
        ...(installAppEvent && installAppConfig),
      },
      {
        label: 'Backup Data',
        onClick: () => console.log('HI'),
      },
    ];

    setDropdownItems(dropdownItems);
  }, [installAppEvent]);

  return dropdownItems;
};

export default useNavbarDropdownList;
