import { Button, InputField, Spacer, TextAreaField } from 'components';
import { CategoryFormProps } from 'interfaces';

const CategoryForm = ({
  name,
  description,
  formError,
  setName,
  setDescription,
  submitButtonText,
  submitHandler,
}: CategoryFormProps) => {
  return (
    <form className="editcategory__container__content__form form">
      <div className="editcategory__container__content__form__container form__container">
        <InputField
          type="text"
          placeholder="Category name ie. Family, Office etc."
          onChange={(event) => setName(event.target.value)}
          required={true}
          showLabel={true}
          value={name}
        />

        <TextAreaField
          placeholder="Category description (Optional)"
          onChange={(event) => setDescription(event.target.value)}
          rows={5}
          showLabel={true}
          value={description}
        />

        <Spacer block="8" />
        <div className="editcategory__container__content__form__container__action">
          <Button
            text={submitButtonText}
            className="btn-primary btn-md emptystate__container__actions-primary"
            onClick={submitHandler}
          />
        </div>
        <p className="form__container__error pre-text">{formError}</p>
      </div>
    </form>
  );
};

export default CategoryForm;
