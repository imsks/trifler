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
import { useState } from 'react';
import { pageRoutes } from 'utils';

const AddContact = () => {
  const [name, setName] = useState<string>('');
  const [contactNo, setContactNo] = useState<string>('');
  const [category, setCategory] = useState<SelectOptionsType>({
    label: null,
    value: null,
  });
  const [categoryName, setCategoryName] = useState<string>('');
  const [formError, setFormError] = useState(null);
  const [addContactClicked, setAddContactClicked] = useState<boolean>(false);

  const handleAddContact = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!name) {
      setFormError('Please fill the name');
      return;
    }

    if (!contactNo || contactNo.length !== 10) {
      setFormError('Please enter the correct contact number');
      return;
    }

    event.preventDefault();
    setFormError(null);
    setAddContactClicked(true);

    let categoryId = null;

    if (categoryName) {
      categoryId = await addACategory({
        name: categoryName,
        description: null,
      });
    } else {
      categoryId = category.value;
    }

    addAContact({ name, contactNo, categoryId })
      .then(() => {
        setAddContactClicked(false);
        Router.push(pageRoutes.absoluteUrls.contacts);
      })
      .catch((error) => {
        setFormError(error.message);
        setAddContactClicked(false);
      });
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
  ].filter((option) => option);

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
