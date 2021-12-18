import React from 'react';
import {
  Navbar,
  BottomNavbar,
  Icons,
  FloatingActionButton,
  Spacer,
  EmptyStateContainer,
} from 'components';
import { useCategories } from 'hooks';
import { EmptyCategories } from 'assets';
import { handleGoToAddCategory } from 'utils';

const Categories = () => {
  const categories = useCategories();

  // console.log(categories);

  const emptyPageState = categories.length === 0 && (
    <EmptyStateContainer
      imageSrc={EmptyCategories}
      heading="You havn't added any categories so far."
      subHeading=" Add a temporary category in here and make a call"
      showButton={true}
      ctaText="Add your first category"
      ctaOnClick={handleGoToAddCategory}
    />
  );

  const addCategoryFloatingAction = categories.length > 0 && (
    <div className="categories__container__action">
      <FloatingActionButton
        onClick={handleGoToAddCategory}
        IconName={Icons.HIIcon.HiPlus}
      />
    </div>
  );

  return (
    <main className="categories">
      <div className="categories__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="1" />
        <div className="categories__container__content">{emptyPageState}</div>
        {addCategoryFloatingAction}
      </div>
    </main>
  );
};

export default Categories;
