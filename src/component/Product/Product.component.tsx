import React from 'react';

const ProductComponent = (props: {
    name: string
}) => {

    return (
        <div className="product">
            { props.name }
        </div>
    );
};

export default ProductComponent;
