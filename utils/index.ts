import {
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
} from 'utils/page/route-functions';
import {
  handleInstallApp,
  generateInstallAppConfig,
  generateRegisterPageConfig,
} from 'utils/page/dom-functions';
import { getRanddomID } from 'utils/functions';
import pageRoutes from 'utils/page/routes';

export {
  handleUseApp,
  handleKnowMore,
  handleGoDashboard,
  handleGoCategory,
  handleGoContacts,
  getRanddomID,
  pageRoutes,
  handleGoToAddCategory,
  handleGoToAddContact,
  handleGoBack,
  handleGoToCategoryDetails,
  handleMakeCall,
  handleGoToContactDetails,
  handleGoToContacts,
  handleInstallApp,
  generateInstallAppConfig,
  redirectToWhatsapp,
  handleGoToRegister,
  generateRegisterPageConfig,
};
