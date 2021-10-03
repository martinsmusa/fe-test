import React from 'react';
import { CategoryDataItemListType } from 'Type/ResponseData.type';

import CategoryItem from 'Component/CategoryItem';

const CategoryListComponent = (props: { categories: CategoryDataItemListType; }) => {
    const { categories } = props;
    const categoryList = Object.values(categories || {});

    if (!categoryList.length) {
        return (
            <div>
                <p>No categories found</p>
            </div>
        );
    }

    const categoryItems = categoryList.map(category => {
        const { id } = category;

        return (
            <CategoryItem
                key={ id }
                category={ category }
            />
        );
    });

    return (
        <div>
            { categoryItems }
        </div>
    );
};

export default CategoryListComponent;
