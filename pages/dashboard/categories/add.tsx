import { useState } from 'react';
import {
  AddItemNavbar,
  Button,
  CategoryForm,
  InputField,
  Spacer,
  TextAreaField,
} from 'components';
import { addACategory } from 'database';
import Router from 'next/router';
import { pageRoutes } from 'utils';

const AddCategory = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
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
          <CategoryForm
            name={name}
            description={description}
            setName={setName}
            setDescription={setDescription}
            submitButtonText="Update Category"
            submitHandler={handleAddCategory}
            formError={formError}
          />
        </div>
      </div>
    </main>
  );
};

export default AddCategory;
