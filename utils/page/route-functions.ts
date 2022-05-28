import { createUser } from 'database';
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

const handleGoBack = () => {
  Router.back();
};

const handleGoToCategoryDetails = (categoryId: string) => {
  Router.push(pageRoutes.absoluteUrls.categories + `/${categoryId}`);
};

const handleGoToContactDetails = (contactId: string) => {
  Router.push(pageRoutes.absoluteUrls.contacts + `/${contactId}`);
};

const handleGoToAddContact = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.contacts}/add`);
};

const handleGoToContacts = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.contacts}`);
};

const handleGoToAddCategory = () => {
  Router.push(`${pageRoutes.dashboard}${pageRoutes.categories}/add`);
};

const handleGoToRegister = () => {
  Router.push(pageRoutes.register);
};

const handleMakeCall = (contactNo: string) => {
  Router.push(`tel:${contactNo}`);
};

const handleUseApp = () => {
  createUser().then(() => {
    Router.push(pageRoutes.dashboard);
  });
};

const handleKnowMore = () => {
  Router.push(pageRoutes.landingPage.aboutSection);
};

const redirectToWhatsapp = (contactNo: string) => {
  window.open(`https://wa.me/${contactNo}`, '_ blank');
};

export {
  handleGoBack,
  handleGoDashboard,
  handleGoContacts,
  handleGoCategory,
  handleGoToCategoryDetails,
  handleMakeCall,
  handleGoToContactDetails,
  handleGoToAddContact,
  handleGoToAddCategory,
  handleGoToContacts,
  handleUseApp,
  handleKnowMore,
  redirectToWhatsapp,
  handleGoToRegister,
};
