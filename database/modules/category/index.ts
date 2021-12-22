import { AddCategoryModel, indexDB } from 'database';
import { Category } from 'interfaces';
import { getRanddomID } from 'utils';

// Get all categories
const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    indexDB.categories
      .toArray()
      .then((categories: Category[]) => {
        resolve(categories);
      })
      .catch((error) =>
        reject({ errorStack: error, message: 'Something went wrong' }),
      );
  });
};

// Add A Category
const addACategory = ({ name, description = '' }) => {
  return new Promise((resolve, reject) => {
    const category: AddCategoryModel = {
      id: getRanddomID(),
      name,
      description,
      addedon: new Date(Date.now()),
    };

    indexDB.categories
      .add(category)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

export { getAllCategories, addACategory };
