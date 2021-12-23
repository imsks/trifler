import { useEffect, useState } from 'react';
import { getAllCategories, getAllContactsWithCategories } from 'database';
import { Category, CategoryCard, ShowCategory } from 'interfaces';

const useCategories = ({ showCategory = false, showContacts = false }) => {
  const [categories, setCategories] = useState<Category[] | ShowCategory[]>([]);

  useEffect(() => {
    getAllCategories().then(async (categories: Category[]) => {
      if (showCategory) {
        const showCategoryData = categories.map((category) => {
          const { id, name, description } = category;

          return { id, name, description };
        });

        setCategories(showCategoryData);
      } else if (showContacts) {
        const categoriesWithContacts: CategoryCard[] =
          await getAllContactsWithCategories(categories);

        setCategories(categoriesWithContacts);
      } else {
        setCategories(categories);
      }
    });
  }, []);

  return categories;
};

export default useCategories;
