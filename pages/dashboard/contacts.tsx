import React from 'react';
import {
  Navbar,
  BottomNavbar,
  IconContainer,
  Icons,
  Icon,
  FloatingActionButton,
  Spacer,
  Button,
} from 'components';
import Image from 'next/image';
import { useContacts } from 'hooks';
import { HeaderHero } from 'assets';

const Contacts = () => {
  const contacts = useContacts();

  // console.log(contacts);

  const emptyPageState = contacts.length === 0 && <h3>No contact</h3>;

  return (
    <main className="dashboard">
      <div className="dashboard__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="1" />
        <div className="dashboard__container__content">
          <div className="dashboard__container__content__image">
            <Image src={HeaderHero} alt="trifler-landing-hero" />
          </div>
          <div className="dashboard__container__content__text">
            <h3 className="dashboard__container__content__text__heading body">
              You havn't added any contacts so far.
            </h3>
            <p className="dashboard__container__content__text__subheading small-text">
              Add a temporary contact in here and make a call
            </p>
            <Spacer block="6" />
            <div className="dashboard__container__content__actions">
              <Button
                text="Add a contact"
                className="btn-primary btn-md dashboard__container__content__actions-primary"
                onclick={() => console.log('HI')}
              />
            </div>
          </div>
        </div>
        <div className="dashboard__container__action">
          <FloatingActionButton
            onClick={() => console.log('HI')}
            IconName={Icons.HIIcon.HiPlus}
          />
        </div>
      </div>
    </main>
  );
};

export default Contacts;
