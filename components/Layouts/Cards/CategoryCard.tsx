import { Spacer } from 'components';
import { CategoryCardProps } from 'interfaces';

const CategoryCard = ({
  name,
  description,
  noOfContacts,
  onClick,
}: CategoryCardProps) => {
  return (
    <div className="categorycard" onClick={onClick}>
      <div className="categorycard__text">
        <h5 className="categorycard__text__heading subtitle">{name}</h5>
        <Spacer block="8" />
        <p className="categorycard__text__subheading pre-text">{description}</p>
      </div>
      <Spacer block="6" />
      <div className="categorycard__footer">
        <p className="categorycard__footer__text pre-text">
          {noOfContacts} Contacts inside
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
