import { AddItemNavbar, Button, InputField, Spacer } from 'components';
import { addAContact } from 'database';
import Router from 'next/router';
import { useState } from 'react';
import { pageRoutes } from 'utils';

const AddContact = () => {
  const [name, setName] = useState(null);
  const [contactNo, setContactNo] = useState(null);
  const [formError, setFormError] = useState(null);

  const handleAddContact = (event: React.MouseEvent<HTMLElement>) => {
    if (!name || !contactNo) {
      setFormError('Please fill the required fields');
      return;
    }

    event.preventDefault();
    setFormError(null);

    addAContact({ name, contactNo })
      .then(() => {
        Router.push(pageRoutes.absoluteUrls.contacts);
      })
      .catch((error) => {
        setFormError(error.message);
      });
  };

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
              />

              <InputField
                type="tel"
                placeholder="Contact's mobile"
                onChange={(event) => setContactNo(event.target.value)}
                required={true}
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
