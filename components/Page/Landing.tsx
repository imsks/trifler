import Image from 'next/image';
import { AboutProductItemProps } from 'interfaces';

export const AboutProductItem = ({
  text,
  imageSrc,
  imageAlt,
}: AboutProductItemProps) => {
  return (
    <div className="aboutproductitem">
      <div className="aboutproductitem__image">
        <Image src={imageSrc} alt={imageAlt} />
      </div>
      <h3 className="aboutproductitem__text pre-text">{text}</h3>
    </div>
  );
};
