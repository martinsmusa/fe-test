import React, { ReactNode, useEffect } from 'react';

import ModalComponent from "Component/Modal/Modal.component";

const ModalContainer = (props: {
    title: string;
    children: ReactNode;
    onClose: () => void;
}) => {
    const { children, onClose, title } = props;

    const disableScroll = () => {
        document.documentElement.classList.add('scrollDisabled');
    }

    const enableScroll = () => {
        document.documentElement.classList.remove('scrollDisabled');
    }

    useEffect(() => {
        disableScroll();

        return () => enableScroll()
    }, []);

    return <ModalComponent
        title={ title }
        onClose={ onClose }
        children={ children }
    />
}

export default ModalContainer;
