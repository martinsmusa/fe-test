import React, {memo}  from 'react';
import { connect } from 'react-redux';
import CategoryItemComponent from './CategoryItem.component';
import {
    DataItemListType, FullCategoryType, ProductDataItemListType,
} from 'Type/ResponseData.type';

const mapStateToProps = (state: {
    ProductsReducer: ProductDataItemListType;
    BrandReducer: DataItemListType
}) => ({
    products: state.ProductsReducer,
    brands: state.BrandReducer
});

const CategoryItemContainer = memo((props: {
    category: FullCategoryType;
}) => {
    const {
        category,
        category: { brands },
    } = props;

    return <CategoryItemComponent
        category={ category }
        brands={ brands }
    />;
});

export default connect(mapStateToProps)(CategoryItemContainer);
