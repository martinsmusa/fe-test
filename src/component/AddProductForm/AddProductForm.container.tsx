import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";

import AddProductFormComponent from "./AddProductForm.component";
import { NestedCategoryDispatcher } from "Store/NestedCategory";
import { FullBrandType, FullCategoryTypeListType } from "Type/ResponseData.type";

const mapStateToProps = (state: { NestedCategoryReducer: FullCategoryTypeListType; }) => ({
    categories: state.NestedCategoryReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addProduct: (
        brand: FullBrandType,
        categoryId: string,
        brandId: number
    ) => NestedCategoryDispatcher.addProduct(dispatch, brand, categoryId, brandId)
})

const AddProductFormContainer = (props: {
    addProduct: (brand: FullBrandType, categoryId: string, brandId: number) => void
    categories: FullCategoryTypeListType
    onClose: () => void
}) => {
    const { addProduct, onClose, categories } = props;

    const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // @ts-ignore
        const { name: { value }, categoryId: { value: categoryId }, brandId: { value: brandId } } = e.target;

        addProduct(
            {
                name: value,
                id: Date.now(),
                products: []
            },
            categoryId,
            +brandId
        );

        onClose();
    };

    return <AddProductFormComponent onSubmit={ onSubmit } categories={ categories }/>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductFormContainer);
