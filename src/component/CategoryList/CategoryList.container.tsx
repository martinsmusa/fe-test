import React from 'react';
import { connect } from 'react-redux';
import CategoryListComponent from './CategoryList.component';
import { DataItemListType } from 'Type/ResponseData.type';

const mapStateToProps = (state: { CategoryReducer: DataItemListType; }) => ({
    categories: state.CategoryReducer
});

const CategoryListContainer = (props: { categories: DataItemListType; }) => {
    const { categories } = props;

    return (
        <>
            <CategoryListComponent categories={ categories }/>
        </>
    );
};

export default connect(mapStateToProps)(CategoryListContainer);
