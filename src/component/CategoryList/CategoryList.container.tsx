import React from 'react';
import { connect } from 'react-redux';
import CategoryListComponent from './CategoryList.component';
import { CategoryListType } from "Type/Category.type";

const mapStateToProps = (state: { CategoryReducer: CategoryListType; }) => ({
    categories: state.CategoryReducer
})

const CategoryListContainer = (props: { categories: CategoryListType; }) => {
    const { categories } = props;

    return (
        <>
            <CategoryListComponent categories={ categories } />
        </>
    )
}

export default connect(mapStateToProps)(CategoryListContainer);
