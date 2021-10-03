import React from 'react';
import { DataItemType } from 'Type/ResponseData.type';

const CategoryItemComponent = (props: { category: DataItemType; }) => {
    const { category: { name } } = props;

    return (
        <div className="CategoryItem">
            <h4>{ name }</h4>
        </div>
    );
};

export default CategoryItemComponent;
