import { handleUseApp, handleKnowMore } from 'utils/components/layout/navbar';
import { handleGoBack } from 'utils/components/layout/additemnavbar';
import {
  handleGoDashboard,
  handleGoCategory,
  handleGoContacts,
} from 'utils/components/layout/bottomnavbar';
import {
  handleGoToAddCategory,
  handleGoToAddContact,
} from 'utils/components/layout/emptycontainer';
import { getRanddomID } from 'utils/functions';
import pageRoutes from 'utils/page/routes';
import { handleGoToCategoryDetails } from 'utils/components/layout/cards';

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
};
