import React from 'react';
import { DataItemType, DataItemListType, ProductDataItemListType } from 'Type/ResponseData.type';

import Brand from 'Component/Brand';
import Product from 'Component/Product';

const CategoryItemComponent = (props: {
    category: DataItemType;
    brands: DataItemListType;
    products: ProductDataItemListType;
}) => {
    const { category: { name }, brands, products } = props;

    const brandComponents = Object.values(brands).map(({ name, id }) => {
        const brandProducts = Object.values(products).map(product => {
            return (
                <Product key={ `product-${ product.id }` } name={ product.name }/>
            );
        });

        return (
            <Brand
                key={ `brand-${ id }` }
                name={ name }
            >
                { brandProducts }
            </Brand>
        );
    });

    return (
        <div className="CategoryItem">
            <h4>{ name }</h4>
            <div className="brands">
                { brandComponents }
            </div>
        </div>
    );
};

export default CategoryItemComponent;
