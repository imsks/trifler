export type InstallPWAUserChoice = {
  outcome: 'dismissed' | 'accepted';
};

export type InstallAppEvent = {
  prompt: () => void;
  userChoice: InstallPWAUserChoice;
};
