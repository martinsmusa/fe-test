import React from 'react';
import { FullCategoryTypeListType } from "Type/ResponseData.type";

const AddBrandFormComponent = (
    props: {
        onSubmit: any;
        categories: FullCategoryTypeListType
    }
) => {
    const { onSubmit, categories } = props;

    const optionsList = Object.values(categories)
        .map(cat => <option key={ `option-${ cat.id }` } value={ cat.id }>{ cat.name }</option>)

    return (
        <form onSubmit={ onSubmit }>
            <div className="field">
                <label>
                    Category:
                    <select name="categoryId">
                        { optionsList }
                    </select>
                </label>
            </div>

            <div className="field">
                <label>
                    Brand Name:
                    <input type="text" name="name"/>
                </label>
            </div>
            <div className="field">
                <label>
                    Save Brand:
                    <input type="submit" value="Save"/>
                </label>
            </div>
        </form>
    )
}

export default AddBrandFormComponent;
