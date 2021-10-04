import React, { useState } from 'react';
import ActionsComponent from './Actions.component';

const ActionsContainer = () => {
    const [activeModal, setActiveModal] = useState(null);

    const setModal = (e: { target: { value: React.SetStateAction<null> } } | null) => {
        if (!e) {
            return setActiveModal(null);
        }

        setActiveModal(e.target.value);
    }

    return <ActionsComponent setActiveModal={ setModal } activeModal={ activeModal }/>;
}

export default ActionsContainer;
