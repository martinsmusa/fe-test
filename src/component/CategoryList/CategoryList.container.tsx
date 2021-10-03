import React, { memo } from 'react';
import { connect } from 'react-redux';
import CategoryListComponent from './CategoryList.component';
import { CategoryDataItemListType } from 'Type/ResponseData.type';

const mapStateToProps = (state: { CategoryReducer: CategoryDataItemListType; }) => ({
    categories: state.CategoryReducer
});

const CategoryListContainer = memo((props: { categories: CategoryDataItemListType; }) => {
    const { categories } = props;

    return Object.keys(categories) && (
        <>
            <CategoryListComponent categories={ categories }/>
        </>
    );
});

export default connect(mapStateToProps)(CategoryListContainer);
