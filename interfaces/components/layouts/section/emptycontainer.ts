export interface EmptyStateContainerProps {
  imageSrc: string | StaticImageData;
  heading?: string;
  subHeading?: string;
  showButton?: boolean;
  ctaText?: string;
  ctaOnClick?: () => void;
}
