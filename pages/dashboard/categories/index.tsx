import React from 'react';
import {
  Navbar,
  BottomNavbar,
  Icons,
  FloatingActionButton,
  Spacer,
  EmptyStateContainer,
  PageHeaderText,
  CategoryCard,
} from 'components';
import { useCategories } from 'hooks';
import { EmptyCategories } from 'assets';
import { handleGoToAddCategory, handleGoToCategoryDetails } from 'utils';
import { Category } from 'interfaces';

const Categories = () => {
  const categories = useCategories({ showContacts: true });

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

  const pageHeader = categories.length > 0 && (
    <>
      <PageHeaderText
        title="All categories"
        text="Take a look at all the categories. You can create as many as you
              want"
      />
      <Spacer block="4" />
    </>
  );

  return (
    <main className="categories">
      <div className="categories__container">
        <Navbar />
        <BottomNavbar />
        <Spacer block="4" />
        <div className="categories__container__content">
          {pageHeader}
          {emptyPageState}
          <div className="categories__container__content__section">
            {categories.map((category: Category) => {
              const { id, name, description, contacts = [] } = category;

              return (
                <CategoryCard
                  key={id}
                  name={name}
                  description={description}
                  noOfContacts={contacts.length}
                  onClick={() => handleGoToCategoryDetails(id)}
                />
              );
            })}
          </div>
        </div>
        {addCategoryFloatingAction}
      </div>
    </main>
  );
};

export default Categories;