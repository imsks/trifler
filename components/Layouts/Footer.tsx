import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__content">
          <p className="footer__container__content__text pre-text">
            Trifler @ {new Date().getFullYear()}
          </p>
          <p className="footer__container__content__text pre-text">
            Made with <span>❤️</span> by{' '}
            <Link href="https://bio.link/imsks" passHref={true}>
              <a target="_blank">Sachin</a>
            </Link>{' '}
            in 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
