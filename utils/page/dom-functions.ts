import { InstallAppEvent, InstallPWAUserChoice } from 'interfaces';
import { handleUseApp } from './route-functions';

const handleInstallApp = async (
  installAppEvent: InstallAppEvent,
  setShowInstallApp: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (installAppEvent) {
    installAppEvent.prompt();

    const userChoice: InstallPWAUserChoice = await installAppEvent.userChoice;

    // If app installed
    if (userChoice.outcome === 'accepted') {
      setShowInstallApp(false);
      handleUseApp();
    }
    return;
  }

  setShowInstallApp(false);
};

export { handleInstallApp };
