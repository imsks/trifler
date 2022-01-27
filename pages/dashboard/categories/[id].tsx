import React, { useEffect, useState } from 'react';
import {
  AddItemNavbar,
  Spacer,
  PageHeaderText,
  Button,
  Icons,
  ContactsContainer,
  EmptyStateContainer,
  ConfirmContainer,
  CategoryForm,
} from 'components';
import { withRouter } from 'next/router';
import {
  AddContactModel,
  deleteACategory,
  deleteAContact,
  deleteAllContactsByCategoryId,
  getCategoryByCategoryId,
  getContactsByCategoryID,
  updateACategory,
} from 'database';
import { EmptyContacts } from 'assets';
import { handleGoToAddContact, pageRoutes } from 'utils';
import { CategoriesPageProps, CategoryPageQuery } from 'interfaces';

const EditCategory = ({ router }: CategoriesPageProps) => {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [contacts, setContacts] = useState<AddContactModel[]>([]);
  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [formError, setFormError] = useState<string>(null);

  useEffect(() => {
    getCategoryDetails();
  }, []);

  const getCategoryDetails = async () => {
    const { id } = router.query as unknown as CategoryPageQuery;
    setId(id);

    try {
      const { name, description } = await getCategoryByCategoryId(id);
      setName(name);
      setDescription(description);

      const contacts = await getContactsByCategoryID(id);

      setContacts(contacts);
    } catch (error) {
      setFormError(error);
    }
  };

  const handleUpdateCategory = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (!name) {
      setFormError('Please fill the category name');
      return;
    }

    setSubmitClicked(true);

    updateACategory({ id, name, description })
      .then(() => {
        setEnableEdit(false);
        setShowConfirmDelete(false);
      })
      .catch((error) => {
        setFormError(error);
        setSubmitClicked(false);
      });
  };

  const handleSetEnableEdit = () => {
    setEnableEdit(!enableEdit);
    setShowConfirmDelete(false);
  };

  const handleConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
    setEnableEdit(false);
  };

  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(false);
  };

  const handleContactDelete = async (id: string) => {
    try {
      await deleteAContact(id);
    } catch (error) {
      setFormError(error);
    }

    const newContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(newContacts);
  };

  const handleDeleteCategory = async () => {
    try {
      await deleteACategory(id);

      await deleteAllContactsByCategoryId(id);

      router.push(pageRoutes.absoluteUrls.categories);
    } catch (error) {
      setFormError(error);
    }
  };

  const editCategoryForm = enableEdit && (
    <>
      <CategoryForm
        name={name}
        description={description}
        setName={setName}
        setDescription={setDescription}
        submitButtonText={!submitClicked ? 'Update Category' : 'Updating...'}
        submitHandler={handleUpdateCategory}
        formError={formError}
      />
      <Spacer block="4" />
    </>
  );

  const contactsContainer = contacts.length > 0 && (
    <>
      <div className="editcategory__container__content__text ">
        <h3 className="editcategory__container__content__text__heading pre-text">
          Contacts in this category
        </h3>
      </div>
      <Spacer block="7" />
      <ContactsContainer
        contacts={contacts}
        showWhatsappButton={true}
        onDeleteContact={handleContactDelete}
      />
      <Spacer block="6" />
    </>
  );

  const emptyContactsState = contacts.length === 0 && (
    <>
      <EmptyStateContainer
        imageSrc={EmptyContacts}
        heading="No contacts found"
        subHeading="You can add or update contact and associate with a category"
        showButton={true}
        ctaText="Add a contact"
        ctaOnClick={handleGoToAddContact}
      />
      <Spacer block="6" />
    </>
  );

  const footerAddContactButton = contacts.length > 0 && (
    <Button
      text="Add a contact"
      className="btn-primary btn-sm emptystate__container__actions-primary"
      onClick={handleGoToAddContact}
    />
  );

  const confirmDeleteContainer = showConfirmDelete && (
    <>
      <ConfirmContainer
        title="Sure you want to delete this category?"
        subtitle="Deleting a category will also delete all its contacts."
        primaryOnClick={handleDeleteCategory}
        secondaryOnClick={handleShowConfirmDelete}
      />
      <Spacer block="4" />
    </>
  );

  const ediCategoryActions = [
    {
      IconName: !enableEdit ? Icons.HIIcon.HiPencil : Icons.HIIcon.HiMinus,
      onClick: handleSetEnableEdit,
    },
    {
      IconName: Icons.HIIcon.HiTrash,
      onClick: handleConfirmDelete,
    },
  ];

  const editCategoryHeader = (
    <PageHeaderText
      title={name}
      text={description}
      actions={ediCategoryActions}
    />
  );

  return (
    <main className="editcategory">
      <div className="editcategory__container">
        <AddItemNavbar />
        <Spacer block="6" />
        <div className="editcategory__container__content">
          {editCategoryHeader}
          <Spacer block="4" />
          {editCategoryForm}
          {confirmDeleteContainer}
          {contactsContainer}
          {emptyContactsState}
          {footerAddContactButton}
        </div>
        <Spacer block="6" />
      </div>
    </main>
  );
};

export default withRouter(EditCategory);
