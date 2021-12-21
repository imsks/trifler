import { Spacer } from 'components';
import { PageHeaderTextProps } from 'interfaces';

const PageHeaderText = ({ title, text }: PageHeaderTextProps) => {
  return (
    <div className="pageheadertext">
      <h3 className="pageheadertext__heading title-h3">{title}</h3>
      <Spacer block="8" />
      <p className="pageheadertext__text pre-text">{text}</p>
    </div>
  );
};

export default PageHeaderText;
