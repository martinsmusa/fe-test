import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { uuid } from 'uuidv4';

import AddCategoryFormComponent from "./AddCategoryForm.component";
import { NestedCategoryDispatcher } from "Store/NestedCategory";
import { CategoryDataItemType } from "Type/ResponseData.type";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addCategory: (category: CategoryDataItemType) => NestedCategoryDispatcher.addCategory(dispatch, category)
})

const AddCategoryFormContainer = (props: {
    addCategory: (category: CategoryDataItemType) => void,
    onClose: () => void
}) => {
    const { addCategory, onClose } = props;

    const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // @ts-ignore
        const { name: { value } } = e.target;

        addCategory({
            name: value,
            id: uuid()
        });

        onClose();
    };

    return <AddCategoryFormComponent onSubmit={ onSubmit }/>
}

export default connect(null, mapDispatchToProps)(AddCategoryFormContainer);
