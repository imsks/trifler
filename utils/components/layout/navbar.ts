import { createUser } from 'database';
import Router from 'next/router';
import { pageRoutes } from 'utils';

const handleUseApp = () => {
  createUser().then(() => {
    Router.push(pageRoutes.dashboard);
  });
};

const handleKnowMore = () => {
  Router.push(pageRoutes.landingPage.aboutSection);
};

export { handleUseApp, handleKnowMore };
