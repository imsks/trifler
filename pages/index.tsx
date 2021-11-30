import React from 'react';
import { Footer, Navbar } from 'components';
import Image from 'next/image';
import { AccessDenied, EasyConnect, HeaderHero, MakeGroups } from 'assets';
import { Spacer } from 'components';

const IndexPage = () => (
  <main className="landing">
    <section className="landing__container">
      <Navbar />
      <div className="landing__container__hero">
        <Spacer block="2" />
        <div className="landing__container__hero__container">
          <div className="landing__container__hero__container__content">
            <div className="landing__container__hero__container__content__image">
              <Image src={HeaderHero} alt="trifler-landing-hero" />
            </div>
            <div className="landing__container__hero__container__content__text">
              <h1 className="landing__container__hero__container__content__text__heading title-h2">
                Make your contacts just one tap away.
              </h1>
              <Spacer block="8" />
              <h4 className="landing__container__hero__container__content__text__subheading body">
                Bring your phonebook on cloud without any storage, for free.
              </h4>
              <Spacer block="6" />
              <div className="landing__container__hero__container__content__actions">
                <button className="btn btn-primary btn-md landing__container__hero__container__content__actions-primary">
                  Use App
                </button>
                <button className="btn btn-secondary btn-md landing__container__hero__container__content__actions-secondary">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
        <Spacer block="2" />
      </div>
      <div className="landing__container__aboutproduct">
        <Spacer block="2" />
        <div className="landing__container__aboutproduct__container">
          <div className="landing__container__aboutproduct__container__content">
            <div className="landing__container__aboutproduct__container__content__hero">
              <h2 className="landing__container__aboutproduct__container__content__hero__heading title-h3">
                Trifler helps organize your temparary contacts.
              </h2>
              <Spacer block="8" />
              <p className="landing__container__aboutproduct__container__content__hero__subheading body">
                And it all becomes a mess when you’ve to someone’s contact in
                your phone and never uses. Trifler solves that problem by
                putting everything on cloud.
              </p>
            </div>
            <Spacer block="6" />
            <div className="landing__container__aboutproduct__container__content__items">
              <div className="landing__container__aboutproduct__container__content__items__item">
                <div className="landing__container__aboutproduct__container__content__items__item__image">
                  <Image src={EasyConnect} alt="trifler-easy-connect" />
                </div>
                <h3 className="landing__container__aboutproduct__container__content__items__item__text strong-text">
                  Easy connect with new people
                </h3>
              </div>
              <div className="landing__container__aboutproduct__container__content__items__item">
                <div className="landing__container__aboutproduct__container__content__items__item__image">
                  <Image src={AccessDenied} alt="trifler-access-denied" />
                </div>
                <h3 className="landing__container__aboutproduct__container__content__items__item__text strong-text">
                  No access to your whatsapp stories
                </h3>
              </div>
              <div className="landing__container__aboutproduct__container__content__items__item">
                <div className="landing__container__aboutproduct__container__content__items__item__image">
                  <Image src={MakeGroups} alt="trifler-make-groups" />
                </div>
                <h3 className="landing__container__aboutproduct__container__content__items__item__text strong-text">
                  Categorize contacts and access them in one click
                </h3>
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

export default IndexPage;
