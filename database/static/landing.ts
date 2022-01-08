import { AboutProductItemProps } from 'interfaces';
import { AccessDenied, EasyConnect, MakeGroups } from 'assets';

const aboutProductItems: Array<AboutProductItemProps> = [
  {
    text: 'Save contacts without thinking twice',
    imageSrc: EasyConnect,
    imageAlt: 'trifler-easy-connect',
  },
  {
    text: 'No access to your whatsapp stories',
    imageSrc: AccessDenied,
    imageAlt: 'trifler-access-denied',
  },
  {
    text: 'Categorize contacts and access them easily',
    imageSrc: MakeGroups,
    imageAlt: 'trifler-make-groups',
  },
];

export { aboutProductItems };
