import React from 'react';
import {
  AboutProductItem,
  Button,
  Footer,
  Loader,
  Navbar,
  Spacer,
} from 'components';
import Image from 'next/image';
import { HeaderHero } from 'assets';
import { aboutProductItems } from 'database';
import { handleKnowMore, handleUseApp } from 'utils';
import { useRedirectToDashboard } from 'hooks';

const IndexPage = () => {
  const isLoggedIn = useRedirectToDashboard();

  if (isLoggedIn) return <Loader />;

  return (
    <main className="landing">
      <section className="landing__container">
        <Navbar showNavbarActions />
        <div className="landing__container__hero">
          <Spacer block="2" />
          <div className="landing__container__hero__container">
            <div className="landing__container__hero__container__content">
              <div className="landing__container__hero__container__content__image">
                <Image src={HeaderHero} alt="trifler-landing-hero" />
              </div>
              <div className="landing__container__hero__container__content__text">
                <h1 className="landing__container__hero__container__content__text__heading title-h2">
                  A phonebook app for minimalists.
                </h1>
                <Spacer block="8" />
                <h4 className="landing__container__hero__container__content__text__subheading body">
                  Trifler helps you organize the people you meet day to day, in
                  a minimal way.
                </h4>
                <Spacer block="6" />
                <div className="landing__container__hero__container__content__actions">
                  <Button
                    text="Use App"
                    className="btn-primary btn-md landing__container__hero__container__content__actions-primary"
                    onClick={() => handleUseApp()}
                  />
                  <Button
                    text="Know more"
                    className="btn-secondary btn-md landing__container__hero__container__content__actions-secondary"
                    onClick={handleKnowMore}
                  />
                </div>
                <Spacer block="7" />
                <p className="small-text">Launching V2 Soon...</p>
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
                  Manage your contacts without getting overwhelmed.
                </h2>
                <Spacer block="8" />
                <p className="landing__container__aboutproduct__container__content__hero__subheading body">
                  Saving every person's contact in your phonebook is a waste
                  when you want them for a limited time. Trifler allows you to
                  manage them with categories to make them easily accessible.
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
