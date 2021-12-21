import Router from 'next/router';
import { pageRoutes } from 'utils';

const handleGoDashboard = () => {
  Router.push(pageRoutes.dashboard);
};

const handleGoContacts = () => {
  Router.push(pageRoutes.absoluteUrls.contacts);
};

const handleGoCategory = () => {
  Router.push(pageRoutes.absoluteUrls.categories);
};

export { handleGoDashboard, handleGoContacts, handleGoCategory };
