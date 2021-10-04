import React from 'react';
import { connect } from 'react-redux';
import CategoryListComponent from './CategoryList.component';
import { FullCategoryTypeListType } from 'Type/ResponseData.type';

const mapStateToProps = (state: { NestedCategoryReducer: FullCategoryTypeListType; }) => ({
    categories: state.NestedCategoryReducer
});

const CategoryListContainer = (props: { categories: FullCategoryTypeListType; }) => {
    const { categories } = props;

    return Object.keys(categories) && (
        <>
            <CategoryListComponent categories={ categories }/>
        </>
    );
};

export default connect(mapStateToProps)(CategoryListContainer);
