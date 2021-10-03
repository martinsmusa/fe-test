import React, {memo}  from 'react';
import { connect } from 'react-redux';
import CategoryItemComponent from './CategoryItem.component';
import {
    CategoryDataItemType, DataItemListType,
    ProductDataItemListType,
    ProductDataItemType
} from 'Type/ResponseData.type';

const mapStateToProps = (state: {
    ProductsReducer: ProductDataItemListType;
    BrandReducer: DataItemListType
}) => ({
    products: state.ProductsReducer,
    brands: state.BrandReducer
});

const CategoryItemContainer = memo((props: {
    category: CategoryDataItemType;
    products: ProductDataItemListType;
    brands: DataItemListType;
}) => {
    const {
        category,
        category: { id },
        brands,
        products
    } = props;
    const categoryBrands: DataItemListType = {};
    const categoryProducts = Object.values(products)
        .filter((product: ProductDataItemType) => product.categories.indexOf(id) !== -1)
        .map(({ id }) => id)
        .reduce((acc, id) => {
            const product = products[id];
            categoryBrands[product.brand] = brands[product.brand];

            return {
                ...acc,
                [id]: product
            }
        }, {});

    return <CategoryItemComponent
        category={ category }
        products={ categoryProducts }
        brands={ categoryBrands }
    />;
});

export default connect(mapStateToProps)(CategoryItemContainer);
