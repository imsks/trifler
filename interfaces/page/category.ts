import { NextRouter } from 'next/router';

export interface CategoriesPageProps {
  router: NextRouter;
}

export interface CategoryPageQuery {
  id: string;
}
