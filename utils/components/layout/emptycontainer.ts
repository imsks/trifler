import Router from 'next/router';
import { pageRoutes } from 'utils';

const handleGoToAddContact = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.contacts}/add`);
};

const handleGoToContacts = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.contacts}`);
};

const handleGoToAddCategory = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.categories}/add`);
};

export { handleGoToAddContact, handleGoToAddCategory, handleGoToContacts };
