import React, { useState } from 'react';
import { FullCategoryTypeListType } from "Type/ResponseData.type";

const AddProductFormComponent = (
    props: {
        onSubmit: any;
        categories: FullCategoryTypeListType
    }
) => {
    const { onSubmit, categories } = props;
    const categoryList = Object.values(categories)
    const [firstCategory] = categoryList
    const [brandsList, setBrandsList] = useState(firstCategory.brands)

    const categoryChangeHandler = (event: { target: { value: string } }) => {
        setBrandsList(categories[event.target.value]?.brands);
    }

    const categoryOptionsList = categoryList
        .map(cat => <option key={ `category-option-${ cat.id }` } value={ cat.id }>{ cat.name }</option>);
    const brandsOptionsList = brandsList
        .map(brand => <option key={ `brand-option-${ brand.id }` } value={ brand.id }>{ brand.name }</option>)

    return (
        <form onSubmit={ onSubmit }>
            <div className="field">
                <label>
                    Category:
                    <select name="categoryId"
                            onChange={ categoryChangeHandler }
                    >
                        { categoryOptionsList }
                    </select>
                </label>
            </div>

            <div className="field">
                <label>
                    Brand:
                    <select name="brandId">
                        { brandsOptionsList }
                    </select>
                </label>
            </div>

            <div className="field">
                <label>
                    Product Name:
                    <input type="text" name="name"/>
                </label>
            </div>
            <div className="field">
                <label>
                    Save Brand:
                    <input type="submit" value="Save"
                           disabled={ !(brandsOptionsList.length && categoryOptionsList.length) }/>
                </label>
            </div>
        </form>
    )
}

export default AddProductFormComponent;
