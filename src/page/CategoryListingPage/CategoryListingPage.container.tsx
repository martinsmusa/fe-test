import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import dataSet from 'Root/responseData.json';
import CategoryListingPage from './CategoryListingPage.component';
import { CategoryDispatcher } from 'Store/Category';
import { BrandDispatcher } from 'Store/Brand';
import { ProductSDispatcher } from 'Store/Products';
import { CategoryListingContainerProps, DataItemListType } from 'Type/ResponseData.type';

// @ts-ignore
import { indexArrayById, indexProductData } from 'Util/Indexer';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCategoryList: (categories: DataItemListType) => CategoryDispatcher.updateCategoryList(dispatch, categories),
    updateBrandsList: (brands: DataItemListType) => BrandDispatcher.updateBrandList(dispatch, brands),
    updateProductsList: (products: DataItemListType) => ProductSDispatcher.updateProductsList(dispatch, products)
});

export const CategoryListingPageContainer = (props: CategoryListingContainerProps) => {
    const { updateCategoryList, updateBrandsList, updateProductsList } = props;

    useEffect(() => {
        const categoryJson = dataSet.categories || [];

        if (categoryJson && Array.isArray(categoryJson) && categoryJson.length) {
            const indexedCatData = indexArrayById(categoryJson);
            const brands = categoryJson.map(({ brands = [] }) => brands).flat(2);
            const indexedBrandData = indexArrayById(brands);
            const indexedProductsData = categoryJson.reduce((acc, cat) => {
                const { id: catId, brands } = cat;
                const products = brands.reduce((acc, brand) => {
                    const { id: brandId, products = [] } = brand;

                    return {
                        ...acc,
                        ...indexProductData(
                            products,
                            brandId,
                            catId
                        )
                    };
                }, {});

                return {
                    ...acc,
                    ...products
                };
            }, {});

            updateCategoryList(indexedCatData);
            updateBrandsList(indexedBrandData);
            updateProductsList(indexedProductsData);
        }
    }, [updateCategoryList]);

    return <CategoryListingPage/>;
};

export default connect(null, mapDispatchToProps)(CategoryListingPageContainer);
