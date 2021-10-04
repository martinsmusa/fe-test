import React from "react";

import Actions from 'Component/Actions';
import CategoryList from 'Component/CategoryList';

import './CategoryListingPage.style.scss';

export const CategoryListingPageComponent = () => {
    return (
        <>
            <Actions />
            <CategoryList />
        </>
    )
}

export default CategoryListingPageComponent;
