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
import { handleAddCategory } from 'utils';

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
      ctaOnClick={handleAddCategory}
    />
  );

  return (
    <main className="categories">
      <div className="categories__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="1" />
        <div className="categories__container__content">{emptyPageState}</div>
        <div className="categories__container__action">
          <FloatingActionButton
            onClick={handleAddCategory}
            IconName={Icons.HIIcon.HiPlus}
          />
        </div>
      </div>
    </main>
  );
};

export default Categories;
