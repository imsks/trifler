const title = 'Trifler';
const description =
  "Trifler helps you store temporary contacts that you don't want to store in your phone";

const SEO = {
  title,
  description,
  canonical: '.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '.',
    title,
    description,
    images: [
      {
        url: './images/logo.png',
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@USERNAME',
    site: '@USERNAME',
    cardType: 'summary_large_image',
  },
};

export default SEO;
