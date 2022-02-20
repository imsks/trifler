import { InstallAppEvent } from 'interfaces';

const handleInstallApp = async (installAppEvent: InstallAppEvent) => {
  if (installAppEvent) installAppEvent.prompt();
};

export { handleInstallApp };
