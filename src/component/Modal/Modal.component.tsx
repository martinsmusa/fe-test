import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import './Modal.style.scss';

const ModalComponent = (props: {
    title: string;
    children: ReactNode;
    onClose: () => void;
}) => {
    const renderTitle = () => {
        const { title } = props;

        return <h3 className="title">{ title }</h3>
    }

    const renderContent = () => {
        const { children, onClose } = props;

        return (
            <div className='modal-container'>
                <header className='modal-header'>
                    { renderTitle() }
                    <button
                        title="Close"
                        onClick={ onClose }
                    >
                        Close
                    </button>
                </header>
                <div className="modal-content">
                    { children }
                </div>
            </div>
        );
    }

    return createPortal(
        <div className='modal-overlay'>
            { renderContent() }
        </div>,
        document.body
    );
}

export default ModalComponent;
