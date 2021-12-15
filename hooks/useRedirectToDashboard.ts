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
          router.push(redirectPath);
          setIsLoggedIn(true);
        } else {
          router.push(pageRoutes.landingPage.index);
          setIsLoggedIn(false);
        }
      });
    }, 1000);
  }, []);

  return isLoggedIn;
};

export default useRedirectToDashboard;
