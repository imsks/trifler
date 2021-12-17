import Router from 'next/router';
import { pageRoutes } from 'utils';

const handleAddContact = () => {
  Router.push(`${pageRoutes.dashboard}/${pageRoutes.contacts}/add`);
};

const handleAddCategory = () => {
  Router.push(`${pageRoutes.dashboard}/${pageRoutes.categories}/add`);
};

export { handleAddContact, handleAddCategory };
