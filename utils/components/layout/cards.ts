import Router from 'next/router';
import { pageRoutes } from 'utils';

const handleGoToCategoryDetails = (categoryId: string) => {
  Router.push(pageRoutes.absoluteUrls.categories + `/${categoryId}`);
};

const handleGoToContactDetails = (contactId: string) => {
  Router.push(pageRoutes.absoluteUrls.contacts + `/${contactId}`);
};

const handleMakeCall = (contactNo: string) => {
  Router.push(`tel:${contactNo}`);
};

export { handleGoToCategoryDetails, handleMakeCall, handleGoToContactDetails };
