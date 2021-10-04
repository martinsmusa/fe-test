import React from 'react';

const AddCategoryFormComponent = (props: { onSubmit: any; }) => {
    const { onSubmit } = props;

    return (
        <form onSubmit={ onSubmit }>
            <div className="field">
                <label>
                    Category Name:
                    <input type="text" name="name"/>
                </label>
            </div>
            <div className="field">
                <label>
                    Save Category:
                    <input type="submit" value="Save"/>
                </label>
            </div>
        </form>
    )
}

export default AddCategoryFormComponent;
