import { InstallAppEvent } from 'interfaces';
import { useEffect, useState } from 'react';

const useInstallAppButton = () => {
  const [installAppEvent, setInstallAppEvent] = useState<InstallAppEvent>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();

      setInstallAppEvent(event as unknown as InstallAppEvent);
    });
  }, []);

  return installAppEvent;
};

export default useInstallAppButton;
