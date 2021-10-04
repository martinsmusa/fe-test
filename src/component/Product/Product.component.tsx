import React from 'react';

const ProductComponent = (props: {
    name: string,
    path: {
        category: string,
        brand: number,
        product: number
    }
}) => {

    return (
        <div className="product">
            <h4 className="name">{ props.name }</h4>
            <div className="delete">
                <button
                    type="button"
                    onClick={ () => {
                    } }
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductComponent;
