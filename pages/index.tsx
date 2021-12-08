import React from 'react';
import { AboutProductItem, Button, Footer, Navbar } from 'components';
import Image from 'next/image';
import { HeaderHero } from 'assets';
import { Spacer } from 'components';
import { aboutProductItems } from 'database';
import { handleUseApp, handleKnowMore } from 'utils';

const IndexPage = () => {
  return (
    <main className="landing">
      <section className="landing__container">
        <Navbar isLanding />
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
                  <Button
                    text="Use App"
                    className="btn-primary btn-md landing__container__hero__container__content__actions-primary"
                    onclick={handleUseApp}
                  />
                  <Button
                    text="Know more"
                    className="btn-secondary btn-md landing__container__hero__container__content__actions-secondary"
                    onclick={handleKnowMore}
                  />
                </div>
              </div>
            </div>
          </div>
          <Spacer block="2" />
        </div>
        <div className="landing__container__aboutproduct" id="about">
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
                {aboutProductItems.map((productItem, key) => {
                  const { text, imageSrc, imageAlt } = productItem;

                  return (
                    <AboutProductItem
                      key={key}
                      text={text}
                      imageSrc={imageSrc}
                      imageAlt={imageAlt}
                    />
                  );
                })}
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

export default IndexPage;
