import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";

import AddBrandFormComponent from "./AddBrandForm.component";
import { NestedCategoryDispatcher } from "Store/NestedCategory";
import { FullBrandType, FullCategoryTypeListType } from "Type/ResponseData.type";

const mapStateToProps = (state: { NestedCategoryReducer: FullCategoryTypeListType; }) => ({
    categories: state.NestedCategoryReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addBrand: (
        brand: FullBrandType,
        categoryId: string
    ) => NestedCategoryDispatcher.addBrand(dispatch, brand, categoryId)
})

const AddBrandFormContainer = (props: {
    addBrand: (brand: FullBrandType, categoryId: string) => void
    categories: FullCategoryTypeListType
    onClose: () => void
}) => {
    const { addBrand, onClose, categories } = props;

    const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // @ts-ignore
        const { name: { value }, categoryId: { value: categoryId } } = e.target;

        addBrand(
            {
                name: value,
                id: Date.now(),
                products: []
            },
            categoryId
        );

        onClose();
    };

    return <AddBrandFormComponent onSubmit={ onSubmit } categories={ categories }/>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBrandFormContainer);
