import Router from 'next/router';
import { pageRoutes } from 'utils';

const handleGoToCategoryDetails = (categoryId: string) => {
  Router.push(pageRoutes.absoluteUrls.categories + `/${categoryId}`);
};

export { handleGoToCategoryDetails };
