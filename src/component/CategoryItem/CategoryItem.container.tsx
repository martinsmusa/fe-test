import React from 'react';
import CategoryItemComponent from './CategoryItem.component';
import { CategoryType } from "Type/Category.type";

const CategoryItemContainer = (props: { category: CategoryType; }) => {
    const { category } = props;

    return <CategoryItemComponent category={ category }/>
}

export default CategoryItemContainer;
