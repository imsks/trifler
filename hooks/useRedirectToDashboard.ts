import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { pageRoutes } from 'utils';
import { isUserExist } from 'database';

const useRedirectToDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const redirectPath =
    router.asPath === pageRoutes.landingPage.index
      ? pageRoutes.dashboard
      : router.asPath;

  useEffect(() => {
    setTimeout(() => {
      isUserExist().then((userExists: boolean) => {
        if (userExists) {
          setIsLoggedIn(true);
          router.push(redirectPath);
        } else {
          setIsLoggedIn(false);
          router.push(pageRoutes.landingPage.index);
        }
      });
    }, 1000);
  }, []);

  return isLoggedIn;
};

export default useRedirectToDashboard;
