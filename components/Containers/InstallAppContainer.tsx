import { Button } from 'components';
import { useInstallAppButton } from 'hooks';
import { useState } from 'react';
import { handleInstallApp } from 'utils';

const InstallAppContainer = () => {
  const [showInstallApp, setShowInstallApp] = useState(true);
  const installAppEvent = useInstallAppButton();

  if (!showInstallApp) return null;

  return (
    <Button
      text="Install App"
      className="btn-primary btn-md landing__container__hero__container__content__actions-primary"
      onClick={() => handleInstallApp(installAppEvent, setShowInstallApp)}
    />
  );
};

export default InstallAppContainer;
