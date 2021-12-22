import {
  AddItemNavbar,
  Button,
  InputField,
  SelectInputField,
  Spacer,
} from 'components';
import { addACategory, addAContact } from 'database';
import { useCategories } from 'hooks';
import { SelectOptionsType, ShowCategory } from 'interfaces';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { getRanddomID, pageRoutes } from 'utils';

const AddContact = () => {
  const [name, setName] = useState<string>(null);
  const [contactNo, setContactNo] = useState<string>(null);
  const [category, setCategory] = useState<SelectOptionsType>(null);
  const [categoryName, setCategoryName] = useState<string>(null);
  const [formError, setFormError] = useState(null);

  const handleAddContact = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!name) {
      setFormError('Please fill the name');
      return;
    }

    if (!contactNo || contactNo.length !== 1) {
      setFormError('Please enter the correct contact number');
      return;
    }

    event.preventDefault();
    setFormError(null);

    // 1. If category is provided
    let categoryData = {};
    // 1. Category doesn't exist, Add category to DB
    if (categoryName) {
      const categoryId = getRanddomID();

      categoryData = {
        categoryId,
        categoryName,
      };

      addACategory({ name, description })
        .then(() => {
          Router.push(pageRoutes.absoluteUrls.categories);
        })
        .catch((error) => {
          setFormError(error.message);
        });
    }

    // 2. Category exists already
    else {
      if (!category.value) {
        categoryData = { categoryName: null, categoryId: null };
      } else
        categoryData = {
          categoryId: category.value,
          categoryName: category.label,
        };
    }

    console.log(categoryData);

    // addAContact({ name, contactNo })
    //   .then(() => {
    //     Router.push(pageRoutes.absoluteUrls.contacts);
    //   })
    //   .catch((error) => {
    //     setFormError(error.message);
    //   });
  };

  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const category = selectOptions[event.target.selectedIndex];

    setCategory(category);
  };

  const categories = useCategories({ showCategory: true });

  const mappedCategories = categories.map((category: ShowCategory) => {
    const { id, name } = category;
    return {
      label: name,
      value: id,
    };
  });

  const selectOptions: Array<SelectOptionsType> = [
    mappedCategories.length > 0 && { label: 'Select a category', value: null },
    ...mappedCategories,
  ];

  return (
    <main className="addcontact">
      <div className="addcontact__container">
        <AddItemNavbar />
        <Spacer block="7" />
        <div className="addcontact__container__content">
          <div className="addcontact__container__content__header">
            <h3 className="addcontact__container__content__header__title body">
              Add A Contact
            </h3>
          </div>
          <Spacer block="3" />
          <form className="addcontact__container__content__form form">
            <div className="addcontact__container__content__form__container form__container">
              <InputField
                type="text"
                placeholder="Contact name"
                onChange={(event) => setName(event.target.value)}
                required={true}
                showLabel={true}
                autoFocus={true}
              />

              <InputField
                type="tel"
                placeholder="Contact's mobile"
                onChange={(event) => setContactNo(event.target.value)}
                required={true}
                showLabel={true}
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
                onChange={(event) => setCategoryName(event.target.value)}
                required={false}
                showLabel={true}
              />

              <Spacer block="7" />
              <div className="addcontact__container__content__form__container__action">
                <Button
                  text="Add Contact"
                  className="btn-primary btn-md emptystate__container__actions-primary"
                  onClick={handleAddContact}
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

export default AddContact;
