import { useEffect, useState } from 'react';
import { getAllCategories } from 'database';
import { Category, ShowCategory } from 'interfaces';

const useCategories = ({ showCategory = false }) => {
  const [Categories, setCategories] = useState<Category[] | ShowCategory[]>([]);

  useEffect(() => {
    getAllCategories().then((categories: Category[]) => {
      if (!showCategory) setCategories(categories);
      else {
        const showCategoryData = categories.map((category) => {
          const { id, name, description } = category;
          return { id, name, description };
        });

        setCategories(showCategoryData);
      }
    });
  }, []);

  return Categories;
};

export default useCategories;
