import {
  AddCategoryModel,
  getContactsByCategoryID,
  indexDB,
  UpdateCategoryModel,
} from 'database';
import { Category, CategoryCard } from 'interfaces';
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
const addACategory = ({ name, description }): Promise<string> => {
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
        resolve(value as string);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Update A Category
const updateACategory = ({ id, name, description }) => {
  return new Promise((resolve, reject) => {
    const updatedCategory: UpdateCategoryModel = {
      name,
      description,
      updatedOn: new Date(Date.now()),
    };

    indexDB.categories
      .update(id, updatedCategory)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Delete A Category
const deleteACategory = (id: string) => {
  return new Promise((resolve, reject) => {
    indexDB.categories
      .delete(id)
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject({ errorStack: error, message: 'Something went wrong' });
      });
  });
};

// Get all categories with contacts
const getAllCategoriesWithContacts = async (categories: Category[]) => {
  return Promise.all(
    categories.map(async (category) => {
      const { id, name, description } = category;

      const contacts = await getContactsByCategoryID(category.id);

      return {
        id,
        name,
        description,
        contacts,
      } as CategoryCard;
    }),
  );
};

// Get category details by category ID
const getCategoryByCategoryId = (
  categoryId: string,
): Promise<AddCategoryModel> => {
  return new Promise((resolve, reject) => {
    indexDB.categories
      .where('id')
      .equals(categoryId)
      .first()
      .then((value) => {
        resolve(value);
      })
      .catch((error) =>
        reject({ errorStack: error, message: 'Something went wrong' }),
      );
  });
};

export {
  getAllCategories,
  addACategory,
  updateACategory,
  deleteACategory,
  getAllCategoriesWithContacts,
  getCategoryByCategoryId,
};
