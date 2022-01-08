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
    isUserExist().then((userExists: boolean) => {
      if (userExists) {
        setIsLoggedIn(true);
        router.push(redirectPath);
        return;
      }

      setIsLoggedIn(false);
      router.push(pageRoutes.landingPage.index);
    });
  }, []);

  return isLoggedIn;
};

export default useRedirectToDashboard;
