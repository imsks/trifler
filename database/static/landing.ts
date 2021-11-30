import { AboutProductItemProps } from 'interfaces';
import { AccessDenied, EasyConnect, MakeGroups } from 'assets';

export const aboutProductItems: Array<AboutProductItemProps> = [
  {
    text: 'Easy connect with new people',
    imageSrc: EasyConnect,
    imageAlt: 'trifler-easy-connect',
  },
  {
    text: 'No access to your whatsapp stories',
    imageSrc: AccessDenied,
    imageAlt: 'trifler-access-denied',
  },
  {
    text: 'Categorize contacts and access them in one click',
    imageSrc: MakeGroups,
    imageAlt: 'trifler-make-groups',
  },
];
