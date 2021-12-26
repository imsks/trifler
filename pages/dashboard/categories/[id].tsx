import React, { useEffect, useState } from 'react';
import {
  AddItemNavbar,
  Spacer,
  PageHeaderText,
  InputField,
  TextAreaField,
  Button,
  Icons,
  ContactsContainer,
  EmptyStateContainer,
} from 'components';
import { withRouter, NextRouter } from 'next/router';
import {
  AddContactModel,
  getCategoryDetailsByCategoryId,
  getContactsByCategoryID,
  updateACategory,
} from 'database';
import { HeaderActions } from 'interfaces';
import { EmptyContacts } from 'assets';
import { handleGoToAddContact } from 'utils';

interface CategoriesPageProps {
  router: NextRouter;
}

interface CategoryPageQuery {
  id: string;
}

const Categories = ({ router }: CategoriesPageProps) => {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [contacts, setContacts] = useState<AddContactModel[]>([]);
  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>(null);

  useEffect(() => {
    getCategoryDetails();
  }, []);

  const getCategoryDetails = async () => {
    const { id } = router.query as unknown as CategoryPageQuery;
    setId(id);

    try {
      // 1.  Get category details like name description etc. getCategoryDetailsByCategoryId()
      const { name, description } = await getCategoryDetailsByCategoryId(id);
      setName(name);
      setDescription(description);

      // 2. Get all contacts in that category getContactsByCategoryID()
      const contacts = await getContactsByCategoryID(id);
      setContacts(contacts);
    } catch (error) {
      throw Error(error);
    }
  };

  const handleEditcategory = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.preventDefault();

    console.log('name', name);
    console.log('description', description);

    updateACategory({ id, name, description })
      .then(() => {
        setEnableEdit(false);
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  const editForm = enableEdit && (
    <>
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

          <Spacer block="7" />
          <div className="editcategory__container__content__form__container__action">
            <Button
              text="Update Category"
              className="btn-primary btn-md emptystate__container__actions-primary"
              onClick={handleEditcategory}
            />
          </div>
          <p className="form__container__error pre-text">{formError}</p>
        </div>
      </form>
      <Spacer block="4" />
    </>
  );

  const handleSetEnableEdit = () => {
    setEnableEdit(!enableEdit);
  };

  const handleDeleteCategory = () => {
    console.log('DELETE');
    // 1. First remove the category from the database

    // 2. Remove all contacts in that category
  };

  const headerActions: HeaderActions[] = [
    {
      IconName: !enableEdit ? Icons.HIIcon.HiPencil : Icons.HIIcon.HiMinus,
      onClick: handleSetEnableEdit,
    },
    {
      IconName: Icons.HIIcon.HiTrash,
      onClick: handleDeleteCategory,
    },
  ];

  const contactsContainer = contacts.length > 0 && (
    <>
      <div className="editcategory__container__content__text ">
        <h3 className="editcategory__container__content__text__heading pre-text">
          Contacts in this category
        </h3>
      </div>
      <Spacer block="7" />
      <ContactsContainer contacts={contacts} showDelete={true} />
    </>
  );

  const emptyContactsState = contacts.length === 0 && (
    <EmptyStateContainer
      imageSrc={EmptyContacts}
      heading="No contacts added in this category"
      subHeading=" Add a temporary contact and make a call"
      showButton={true}
      ctaText="Add new contact"
      ctaOnClick={handleGoToAddContact}
    />
  );

  const footerAddContactButton = contacts.length > 0 && (
    <Button
      text="Add contacts"
      className="btn-primary btn-sm emptystate__container__actions-primary"
      onClick={handleGoToAddContact}
    />
  );

  return (
    <main className="editcategory">
      <div className="editcategory__container">
        <AddItemNavbar />
        <Spacer block="6" />
        <div className="editcategory__container__content">
          <PageHeaderText
            title={name}
            text={description}
            actions={headerActions}
          />
          <Spacer block="4" />
          {editForm}
          {contactsContainer}
          {emptyContactsState}
          <Spacer block="6" />
          {footerAddContactButton}
        </div>
        <Spacer block="6" />
      </div>
    </main>
  );
};

export default withRouter(Categories);
