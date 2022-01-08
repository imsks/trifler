import {
  AddItemNavbar,
  Button,
  ConfirmContainer,
  Icons,
  InputField,
  PageHeaderText,
  SelectInputField,
  Spacer,
} from 'components';
import {
  addACategory,
  updateAContact,
  getContactByContactId,
  deleteAContact,
} from 'database';
import { useCategories } from 'hooks';
import {
  EditContactPageProps,
  EditContactPageQuery,
  SelectOptionsType,
  ShowCategory,
} from 'interfaces';
import Router from 'next/router';
import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { pageRoutes } from 'utils';

const EditContact = ({ router }: EditContactPageProps) => {
  const [contactId, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [contactNo, setContactNo] = useState<string>('');
  const [category, setCategory] = useState<SelectOptionsType>({
    label: null,
    value: null,
  });
  const [categoryName, setCategoryName] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [formError, setFormError] = useState(null);
  const [updateContactClicked, setUpdateContactClicked] =
    useState<boolean>(false);

  useEffect(() => {
    getContactDetails();
  }, []);

  const getContactDetails = async () => {
    const { id } = router.query as unknown as EditContactPageQuery;
    setId(id);

    const { name, contactNo, categoryId } = await getContactByContactId(id);
    setName(name);
    setContactNo(contactNo);
    setCategoryId(categoryId);

    const category: SelectOptionsType = { label: null, value: categoryId };
    setCategory(category);
  };

  const handleEditContact = async (event: React.MouseEvent<HTMLElement>) => {
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
    setUpdateContactClicked(true);

    let id = categoryId;

    if (categoryName) {
      id = await addACategory({
        name: categoryName,
        description: null,
      });

      setCategoryId(id);
    } else {
      id = category.value;
      setCategoryId(id);
    }

    updateAContact({ id: contactId, name, contactNo, categoryId: id })
      .then(() => {
        setUpdateContactClicked(false);
        Router.push(pageRoutes.absoluteUrls.contacts);
      })
      .catch((error) => {
        setFormError(error.message);
        setUpdateContactClicked(false);
      });
  };

  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const category = selectOptions[event.target.selectedIndex];

    setCategory(category);
    setCategoryId(category.value);
  };

  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };

  const handleConfirmDeleteContact = async () => {
    try {
      await deleteAContact(contactId);

      router.push(pageRoutes.absoluteUrls.contacts);
    } catch (error) {
      setFormError(error);
    }
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

  const confirmDeleteContainer = showConfirmDelete && (
    <>
      <ConfirmContainer
        title="Sure you want to delete this contact?"
        primaryOnClick={handleConfirmDeleteContact}
        secondaryOnClick={handleShowConfirmDelete}
      />
      <Spacer block="4" />
    </>
  );

  return (
    <main className="editcontact">
      <div className="editcontact__container">
        <AddItemNavbar />
        <Spacer block="7" />
        <div className="editcontact__container__content">
          <PageHeaderText
            title={name}
            actions={[
              {
                IconName: Icons.HIIcon.HiTrash,
                onClick: handleShowConfirmDelete,
              },
            ]}
          />
          <Spacer block="4" />
          {confirmDeleteContainer}
          <form className="editcontact__container__content__form form">
            <div className="editcontact__container__content__form__container form__container">
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
                    selectedOptionKey={categoryId}
                  />

                  <p className="editcontact__container__content__form__container__dividertext pre-text">
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
              <div className="editcontact__container__content__form__container__action">
                <Button
                  text={
                    !updateContactClicked ? 'Update Contact' : 'Updating...'
                  }
                  className="btn-primary btn-md emptystate__container__actions-primary"
                  onClick={handleEditContact}
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

export default withRouter(EditContact);
