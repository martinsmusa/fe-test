import React, { useCallback } from "react";

import AddCategoryForm from 'Component/AddCategoryForm';
import Modal from 'Component/Modal';

import {
    ACTIONS_LIST,
    ADD_ACTION_BRAND,
    ADD_ACTION_CATEGORY,
    ADD_ACTION_PRODUCT
} from "Component/Actions/Actions.config";

const ActionsComponent = (props: { setActiveModal: any; activeModal: any; }) => {
    const { setActiveModal, activeModal } = props;

    const onClose = useCallback(() => setActiveModal(null), [setActiveModal]);

    const renderAddCategory = ({ title }: { title: string }) => {
        return (
            <Modal
                title={ title }
                onClose={ onClose }
            >
                <AddCategoryForm onClose={ onClose }/>
            </Modal>
        )
    }

    const renderMap = {
        [ADD_ACTION_CATEGORY]: {
            render: renderAddCategory
        },
        [ADD_ACTION_BRAND]: {},
        [ADD_ACTION_PRODUCT]: {}
    };

    const actions = Object.values(ACTIONS_LIST || {}).map(({ title, value }) => {
        return (
            <button
                style={ { marginRight: 20 } }
                key={ value }
                value={ value }
                onClick={ setActiveModal }
            >
                { title }
            </button>
        );
    });

    const renderActiveModal = () => {
        // @ts-ignore
        return activeModal && renderMap[activeModal]?.render.call(this, ACTIONS_LIST[activeModal]);
    }

    return (
        <div>
            <h3>Actions</h3>
            { actions }
            { renderActiveModal() }
        </div>
    )
}

export default ActionsComponent;
