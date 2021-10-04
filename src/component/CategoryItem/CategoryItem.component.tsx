import React from 'react';
import {
    FullBrandType,
    FullCategoryType
} from 'Type/ResponseData.type';

import Brand from 'Component/Brand';
import Product from 'Component/Product';

const CategoryItemComponent = (props: {
    category: FullCategoryType;
    brands: FullBrandType[];
}) => {
    const { category: { name, id: categoryId }, brands } = props;

    const brandComponents = brands.map(({ name, id, products }) => {
        if (!products.length) {
            return null;
        }

        const brandProducts = products.map(product => {
            return (
                <Product
                    key={ `product-${ product.id }` }
                    name={ product.name }
                    path={{
                        category: categoryId,
                        brand: id,
                        product: product.id
                    }}
                />
            );
        });

        return (
            <Brand
                key={ `brand-${ id }` }
                name={ name }
                path={{
                    category: categoryId,
                    brand: id,
                }}
            >
                { brandProducts }
            </Brand>
        );
    });

    return (
        <div className="CategoryItem">
            <h2 className="name">{ name }</h2>
            <div className="delete">
                <button
                    type="button"
                    onClick={ () => {} }
                >
                    Delete
                </button>
            </div>
            <div className="brands">
                { brandComponents }
            </div>
        </div>
    );
};

export default CategoryItemComponent;
