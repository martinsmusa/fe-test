import React from "react";
import { CategoryType } from "Type/Category.type";

const CategoryItemComponent = (props: { category: CategoryType; }) => {
    const { category: { name } } = props;

    return (
        <div className='CategoryItem'>
            <h4>{ name }</h4>
        </div>
    )
}

export default CategoryItemComponent;
