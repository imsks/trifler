import Image from 'next/image';
import { Button, Spacer } from 'components';
import { EmptyStateContainerProps } from 'interfaces';

const EmptyStateContainer = ({
  imageSrc,
  heading,
  subHeading,
  showButton,
  ctaText,
  ctaOnClick,
}: EmptyStateContainerProps) => {
  const ctaButton = showButton && (
    <div className="emptystate__container__actions">
      <Button
        text={ctaText}
        className="btn-primary btn-md emptystate__container__actions-primary"
        onclick={ctaOnClick}
      />
    </div>
  );

  return (
    <div className="emptystate">
      <div className="emptystate__container">
        <div className="emptystate__container__image">
          <Image src={imageSrc} alt="trifler-landing-hero" />
        </div>
        <div className="emptystate__container__text">
          <h3 className="emptystate__container__text__heading body">
            {heading}
          </h3>
          <p className="emptystate__container__text__subheading small-text">
            {subHeading}
          </p>
          <Spacer block="6" />
          {ctaButton}
        </div>
      </div>
    </div>
  );
};

export default EmptyStateContainer;
