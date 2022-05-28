import { InstallAppEvent } from 'interfaces';
import { handleGoToRegister } from 'utils';

const handleInstallApp = async (installAppEvent: InstallAppEvent) => {
  if (installAppEvent) installAppEvent.prompt();
};

const generateInstallAppConfig = (installAppEvent: InstallAppEvent) => {
  return {
    label: 'Install App',
    onClick: () => handleInstallApp(installAppEvent),
  };
};

const generateRegisterPageConfig = () => {
  return {
    label: 'Backup Contacts',
    onClick: () => handleGoToRegister(),
  };
};

export {
  handleInstallApp,
  generateInstallAppConfig,
  generateRegisterPageConfig,
};
