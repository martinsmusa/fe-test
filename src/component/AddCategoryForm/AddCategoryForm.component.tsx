import React from 'react';

const AddCategoryFormComponent = (props: { onSubmit: any; }) => {
    const { onSubmit } = props;

    return (
        <form onSubmit={ onSubmit }>
            <label>
                Category Name:
                <input type="text" name="name"/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default AddCategoryFormComponent;
