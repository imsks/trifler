import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__content">
          <p className="footer__container__content__text strong-text">
            Trifler @ {new Date().getFullYear()}
          </p>
          <p className="footer__container__content__text strong-text">
            Made with <span>❤️</span> by{' '}
            <Link href="https://sachinshukla.tech" passHref={true}>
              <a href="https://sachinshukla.tech" target="_blank">
                Sachin
              </a>
            </Link>{' '}
            in 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
