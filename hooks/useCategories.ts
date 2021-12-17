import { useEffect, useState } from 'react';
import { getAllCategories } from 'database';
import { Category } from 'interfaces';

const useCategories = () => {
  const [Categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories().then(setCategories);
  }, []);

  return Categories;
};

export default useCategories;
