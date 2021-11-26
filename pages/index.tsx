import React from 'react';
import { Navbar } from 'components';
import Image from 'next/image';
import { HeaderHero } from 'assets';

const IndexPage = () => (
  <main className="landing">
    <section className="landing__container">
      <Navbar />
      <div className="landing__container__hero">
        <div className="landing__container__hero__container">
          <div className="landing__container__hero__container__content">
            <div className="landing__container__hero__container__content__image">
              <Image src={HeaderHero} alt="trifler-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default IndexPage;
