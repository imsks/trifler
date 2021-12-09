import Router from 'next/router';

const handleGoDashboard = () => {
  Router.push('/dashboard');
};

const handleGoContacts = () => {
  Router.push('/dashboard/contacts');
};

const handleGoCategory = () => {
  Router.push('/dashboard/categories');
};

export { handleGoDashboard, handleGoContacts, handleGoCategory };
