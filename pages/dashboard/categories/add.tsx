import { useState } from 'react';
import {
  AddItemNavbar,
  Button,
  InputField,
  Spacer,
  TextAreaField,
} from 'components';
import { addACategory } from 'database';
import Router from 'next/router';
import { pageRoutes } from 'utils';

const AddCategory = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [formError, setFormError] = useState(null);

  const handleAddCategory = (event: React.MouseEvent<HTMLElement>) => {
    if (!name) {
      setFormError('Please fill the category name');
      return;
    }

    event.preventDefault();
    setFormError(null);

    addACategory({ name, description })
      .then(() => {
        Router.push(pageRoutes.absoluteUrls.categories);
      })
      .catch((error) => {
        setFormError(error.message);
      });
  };

  return (
    <main className="addcategory">
      <div className="addcategory__container">
        <AddItemNavbar />
        <Spacer block="7" />
        <div className="addcategory__container__content">
          <div className="addcategory__container__content__header">
            <h3 className="addcategory__container__content__header__title body">
              Add A Category
            </h3>
          </div>
          <Spacer block="3" />
          <form className="addcategory__container__content__form form">
            <div className="addcategory__container__content__form__container form__container">
              <InputField
                type="text"
                placeholder="Category name ie. Family, Office etc."
                onChange={(event) => setName(event.target.value)}
                required={true}
                showLabel={true}
              />

              <TextAreaField
                placeholder="Category description (Optional)"
                onChange={(event) => setDescription(event.target.value)}
                rows={5}
                showLabel={true}
              />

              <Spacer block="7" />
              <div className="addcategory__container__content__form__container__action">
                <Button
                  text="Add Category"
                  className="btn-primary btn-md emptystate__container__actions-primary"
                  onClick={handleAddCategory}
                />
              </div>
              <p className="form__container__error pre-text">{formError}</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddCategory;
