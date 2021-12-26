import Router from 'next/router';
import { pageRoutes } from 'utils';

const handleGoToAddContact = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.contacts}/add`);
};

const handleGoToAddCategory = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.categories}/add`);
};

export { handleGoToAddContact, handleGoToAddCategory };
