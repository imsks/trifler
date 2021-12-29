import { Button, InputField, SelectInputField, Spacer } from 'components';
import { SelectOptionsType } from 'interfaces';

interface ContactFormProps {
  name: string;
  contactNo: string;
  categoryName?: string;
  setName: (value: string) => void;
  setContactNo: (value: string) => void;
  setCategoryName: (value: string) => void;
  setCategory: (value: SelectOptionsType) => void;
  selectOptions: SelectOptionsType[];
  addContactClicked: boolean;
  handleSelectCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  formError: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const ContactForm = ({
  name,
  setName,
  contactNo,
  setContactNo,
  categoryName,
  setCategoryName,
  selectOptions,
  handleSelectCategory,
  setCategory,
  addContactClicked,
  formError,
  onClick,
}: ContactFormProps) => {
  return (
    <form className="addcontact__container__content__form form">
      <div className="addcontact__container__content__form__container form__container">
        <InputField
          type="text"
          placeholder="Contact name"
          onChange={(event) => setName(event.target.value)}
          required={true}
          showLabel={true}
          autoFocus={true}
          value={name}
        />

        <InputField
          type="tel"
          placeholder="Contact's mobile"
          onChange={(event) => setContactNo(event.target.value)}
          required={true}
          showLabel={true}
          value={contactNo}
        />

        {!categoryName && (
          <>
            <SelectInputField
              showLabel={true}
              placeholder="Category you want to put contact in"
              selectOptions={selectOptions}
              noOptionsText="No Category found"
              onChange={handleSelectCategory}
            />

            <p className="addcontact__container__content__form__container__dividertext pre-text">
              OR
            </p>
          </>
        )}

        <InputField
          type="text"
          placeholder="New category name ie. Friends, Office etc."
          onChange={(event) => {
            setCategoryName(event.target.value);
            setCategory({ label: null, value: null });
          }}
          required={false}
          showLabel={true}
          value={categoryName}
        />

        <Spacer block="7" />
        <div className="addcontact__container__content__form__container__action">
          <Button
            text={!addContactClicked ? 'Add Contact' : 'Adding...'}
            className="btn-primary btn-md emptystate__container__actions-primary"
            onClick={onClick}
          />
        </div>
        <p className="form__container__error pre-text">{formError}</p>
      </div>
    </form>
  );
};

export default ContactForm;
