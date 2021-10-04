import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import CategoryItemComponent from './CategoryItem.component';
import {
    DataItemListType, FullCategoryType, PathType, ProductDataItemListType
} from 'Type/ResponseData.type';
import { Dispatch } from 'redux';
import { NestedCategoryDispatcher } from 'Store/NestedCategory';

const mapStateToProps = (state: {
    ProductsReducer: ProductDataItemListType;
    BrandReducer: DataItemListType
}) => ({
    products: state.ProductsReducer,
    brands: state.BrandReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    deleteItem: (path: PathType) => NestedCategoryDispatcher.deleteItem(dispatch, path)
});

const CategoryItemContainer = (props: {
    category: FullCategoryType;
    deleteItem: (path: PathType) => void
}) => {
    const {
        category,
        category: { brands },
        deleteItem
    } = props;

    const deleteCallback = useCallback((path) => deleteItem(path), [deleteItem]);

    return <CategoryItemComponent
        category={ category }
        brands={ brands }
        deleteCallback={ deleteCallback }
    />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItemContainer);
