import { NextRouter } from 'next/router';

export interface EditContactPageProps {
  router: NextRouter;
}

export interface EditContactPageQuery {
  id: string;
}
