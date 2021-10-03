import React from 'react';
import CategoryItemComponent from './CategoryItem.component';
import { DataItemType } from 'Type/ResponseData.type';

const CategoryItemContainer = (props: { category: DataItemType; }) => {
    const { category } = props;

    return <CategoryItemComponent category={ category }/>;
};

export default CategoryItemContainer;
