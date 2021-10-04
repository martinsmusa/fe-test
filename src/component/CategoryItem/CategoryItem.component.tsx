import React from 'react';
import {
    FullBrandType,
    FullCategoryType, PathType
} from 'Type/ResponseData.type';

import Brand from 'Component/Brand';
import Product from 'Component/Product';

const CategoryItemComponent = (props: {
    category: FullCategoryType;
    brands: FullBrandType[];
    deleteCallback: (path: PathType) => void
}) => {
    const {
        category: { name, id: categoryId },
        brands,
        deleteCallback
    } = props;

    const brandComponents = brands.map(({ name, id, products }) => {
        const brandProducts = products.map(product => {
            return (
                <Product
                    key={ `product-${ product.id }` }
                    name={ product.name }
                    path={ {
                        category: categoryId,
                        brand: id,
                        product: product.id
                    } }
                    deleteCallback={ deleteCallback }
                />
            );
        });

        return (
            <Brand
                key={ `brand-${ id }` }
                name={ name }
                path={ {
                    category: categoryId,
                    brand: id
                } }
                deleteCallback={ deleteCallback }
            >
                { brandProducts }
            </Brand>
        );
    });

    return (
        <div className="CategoryItem List" key={ categoryId }>
            <div className="header">
                <h2 className="name">{ name }</h2>
                <div className="delete">
                    <button
                        type="button"
                        onClick={ deleteCallback.bind(this, { category: categoryId }) }
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className="BrandsList List">
                { brandComponents }
            </div>
        </div>
    );
};

export default CategoryItemComponent;
