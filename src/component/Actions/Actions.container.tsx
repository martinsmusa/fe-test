import React, { useState } from 'react';
import { connect } from 'react-redux';

import ActionsComponent from './Actions.component';
import { FullCategoryTypeListType } from "Type/ResponseData.type";

const mapStateToProps = (state: { NestedCategoryReducer: FullCategoryTypeListType; }) => ({
    categories: state.NestedCategoryReducer
})

const ActionsContainer = (props: { categories: FullCategoryTypeListType; }) => {
    const { categories } = props;
    const [activeModal, setActiveModal] = useState(null);

    const setModal = (e: { target: { value: React.SetStateAction<null> } } | null) => {
        if (!e) {
            return setActiveModal(null);
        }

        setActiveModal(e.target.value);
    }

    return <ActionsComponent
        setActiveModal={ setModal }
        activeModal={ activeModal }
        categories={ categories }
    />;
}

export default connect(mapStateToProps)(ActionsContainer);
