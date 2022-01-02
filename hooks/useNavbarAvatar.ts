import {
  GaneshGaitondeAvtar,
  SpiderManAvtar,
  CaptainAmericaShieldAvatar,
  IronManHelmetavatar,
} from 'assets';
import { useEffect, useState } from 'react';

const useNavbarAvatar = () => {
  const [avatar, setAvatar] = useState<StaticImageData>(null);

  const getRandomAvatar = () => {
    const avatars: Array<StaticImageData> = [
      GaneshGaitondeAvtar,
      SpiderManAvtar,
      CaptainAmericaShieldAvatar,
      IronManHelmetavatar,
    ];

    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    setAvatar(randomAvatar);
  };

  useEffect(() => {
    getRandomAvatar();
  }, []);

  return avatar;
};

export default useNavbarAvatar;
