import React from "react";

import { ACTIONS_LIST } from "Component/Actions/Actions.config";

const ActionsComponent = () => {
    const actions = Object.values(ACTIONS_LIST || {}).map(({ title, value }) => {
        return (
            <button
                key={ value }
                value={ value }
            >
                { title }
            </button>
        );
    });

    return (
        <div>
            <h3>Actions</h3>
            { actions }
        </div>
    )
}

export default ActionsComponent;
