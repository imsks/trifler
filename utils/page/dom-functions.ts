import { InstallAppEvent } from 'interfaces';

const handleInstallApp = async (installAppEvent: InstallAppEvent) => {
  if (installAppEvent) installAppEvent.prompt();
};

const generateInstallAppConfig = (installAppEvent: InstallAppEvent) => {
  return {
    label: 'Install App',
    onClick: () => handleInstallApp(installAppEvent),
  };
};

export { handleInstallApp, generateInstallAppConfig };
