import { indexDB } from 'database';
import { Category } from 'interfaces';

// Get all categories
const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    indexDB.categories
      .toArray()
      .then((categories: Category[]) => {
        resolve(categories);
      })
      .catch((error) => reject(error));
  });
};

export { getAllCategories };
