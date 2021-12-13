import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageRoutes } from 'utils';
import { isUserExist } from 'database';

const useRedirectToDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    isUserExist().then((userExists: boolean) => {
      if (userExists) {
        router.push(pageRoutes.dashboard);
        return;
      }

      router.push(pageRoutes.landingPage.index);
    });
  }, []);
};

export default useRedirectToDashboard;
