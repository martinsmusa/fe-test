import React from 'react';

const BrandComponent = (props: {
    name: string,
    path: {
        category: string,
        brand: number
    },
    children: React.ReactChild | React.ReactFragment | React.ReactPortal
}) => {
    return (
        <div className="brand" style={ { marginLeft: 50 } }>
            <h3 className="name">{ props.name }</h3>
            <div className="delete">
                <button
                    type="button"
                    onClick={ () => {} }
                >
                    Delete
                </button>
            </div>

            <div className="productList" style={ { marginLeft: 50 } }>
                { props.children }
            </div>
        </div>
    );
};

export default BrandComponent;
