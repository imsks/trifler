import React from 'react';
import Image from 'next/image';
import { Button, Footer, Navbar, Spacer } from 'components';
import { RegisterNowHero } from 'assets';

const RegisterPage = () => {
  return (
    <main className="landing">
      <section className="landing__container">
        <Navbar showNavbarActions={false} />
        <div className="landing__container__hero">
          <Spacer block="5" />
          <div className="landing__container__hero__container">
            <div className="landing__container__hero__container__content">
              <div className="register__container__hero__container__content__image">
                <Image src={RegisterNowHero} alt="trifler-landing-hero" />
              </div>
              <div className="register__container__hero__container__content__text">
                <h1 className="landing__container__hero__container__content__text__heading title-h3">
                  What if you need to sync contacts?
                </h1>
                <Spacer block="8" />
                <h4 className="landing__container__hero__container__content__text__subheading body">
                  Now you can access your contact at any device. Simply logging
                  and we take care of the rest.
                </h4>
                <Spacer block="6" />
                <div className="landing__container__hero__container__content__actions">
                  <Button
                    text="Register Now"
                    className="btn-primary btn-md landing__container__hero__container__content__actions-primary"
                    onClick={() => console.log('HI')}
                  />
                </div>
              </div>
            </div>
          </div>
          <Spacer block="2" />
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default RegisterPage;
