import { Spacer } from 'components';
import { IconButton } from 'components/Global/Button';
import { PageHeaderTextProps } from 'interfaces';

const PageHeaderText = ({ title, text, actions }: PageHeaderTextProps) => {
  const actionsContainer = actions && actions.length > 0 && (
    <div className="pageheadertext__actions">
      {actions.map((action, index) => {
        const { IconName, onClick, buttonClassname, iconClassname } = action;
        return (
          <IconButton
            key={index}
            IconName={IconName}
            onClick={onClick}
            buttonClassname={
              buttonClassname + ' ' + 'pageheadertext__actions__item'
            }
            iconClassname={
              iconClassname + ' ' + 'pageheadertext__actions__item__icon'
            }
          />
        );
      })}
    </div>
  );
  return (
    <div className="pageheadertext">
      <div className="pageheadertext__text">
        <h3 className="pageheadertext__text__heading subtitle">{title}</h3>
        <Spacer block="8" />
        <p className="pageheadertext__text__body pre-text">{text}</p>
      </div>
      {actionsContainer}
    </div>
  );
};

export default PageHeaderText;
