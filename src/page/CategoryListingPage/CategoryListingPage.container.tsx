import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import dataSet from 'Root/responseData.json';
import CategoryListingPage from './CategoryListingPage.component';
import { CategoryDispatcher } from 'Store/Category';
import { BrandDispatcher } from 'Store/Brand';
import { ProductSDispatcher } from 'Store/Products';
import {
    DataItemListType,
    CategoryDataItemListType,
    FullCategoryTypeListType
} from 'Type/ResponseData.type';
import { CategoryListingContainerProps } from 'Type/Component.type';
import { NestedCategoryDispatcher } from 'Store/NestedCategory';
import { indexFullCategory } from 'Util/Indexer';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateNestedCategoryList: (categories: FullCategoryTypeListType) => NestedCategoryDispatcher.updateNestedCategoryList(dispatch, categories),
    updateCategoryList: (categories: CategoryDataItemListType) => CategoryDispatcher.updateCategoryList(dispatch, categories),
    updateBrandsList: (brands: DataItemListType) => BrandDispatcher.updateBrandList(dispatch, brands),
    updateProductsList: (products: DataItemListType) => ProductSDispatcher.updateProductsList(dispatch, products)
});

export const CategoryListingPageContainer = (props: CategoryListingContainerProps) => {
    const { updateNestedCategoryList } = props;

    useEffect(() => {
        const categoryJson = dataSet.categories || [];

        if (categoryJson && Array.isArray(categoryJson) && categoryJson.length) {
            const indexedCatData = indexFullCategory(categoryJson);

            updateNestedCategoryList(indexedCatData);
        }
    }, [updateNestedCategoryList]);

    return <CategoryListingPage/>;
};

export default connect(null, mapDispatchToProps)(CategoryListingPageContainer);
