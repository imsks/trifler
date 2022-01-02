import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';
import { pageRoutes } from 'utils';

const useBottomNavbarIcons = () => {
  const [iconIndex, setIconIndex] = useState(0);

  const router = useRouter();

  useMemo(() => {
    const route = '/' + router.asPath.split('/')[2];

    if (pageRoutes.contacts === route) {
      setIconIndex(1);
    } else if (pageRoutes.categories === route) {
      setIconIndex(2);
    }
  }, [iconIndex]);

  return iconIndex;
};

export default useBottomNavbarIcons;
