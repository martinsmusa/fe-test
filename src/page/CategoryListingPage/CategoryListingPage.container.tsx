import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import dataSet from 'Root/responseData.json';
import CategoryListingPage from './CategoryListingPage.component';
import { CategoryDispatcher } from "Store/Category";
import { CategoryListingContainerProps, CategoryType } from "Type/Category.type";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCategoryList: (categories: CategoryType[]) => CategoryDispatcher.updateCategoryList(dispatch, categories)
})

const propTypes = {
    updateCategoryList: PropTypes.func.isRequired
}

export const CategoryListingPageContainer = (props: CategoryListingContainerProps) => {
    const { updateCategoryList } = props;

    useEffect(() => {
        const categoryJson = dataSet.categories || [];

        if (categoryJson && Array.isArray(categoryJson) && categoryJson.length) {
            const catData = categoryJson.map(({ id, name }) => ({ id, name }));

            updateCategoryList(catData);
        }
    }, [updateCategoryList]);

    return <CategoryListingPage />;
}

CategoryListingPageContainer.prototype = propTypes;

export default connect(null, mapDispatchToProps)(CategoryListingPageContainer);
