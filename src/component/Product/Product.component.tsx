import React from 'react';
import { PathType } from 'Type/ResponseData.type';

const ProductComponent = (props: {
    name: string,
    path: {
        category: string,
        brand: number,
        product: number
    },
    deleteCallback: (path: PathType) => void
}) => {
    const { name, path, deleteCallback } = props;

    return (
        <div className="product">
            <h4 className="name">{ name }</h4>
            <div className="delete">
                <button
                    type="button"
                    onClick={ deleteCallback.bind(this, path ) }
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductComponent;
