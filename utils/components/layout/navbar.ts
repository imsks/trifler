import Router from 'next/router';

const handleUseApp = () => {
  Router.push('/dashboard');
};

const handleKnowMore = () => {
  Router.push('/#about');
};

export { handleUseApp, handleKnowMore };
