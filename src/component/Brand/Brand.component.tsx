import React from 'react';

const BrandComponent = (props: {
    name: string,
    children: React.ReactChild | React.ReactFragment | React.ReactPortal
}) => {
    return (
        <div className="brand" style={ { marginLeft: 50 } }>
            { props.name }

            <div className="productList" style={ { marginLeft: 50 } }>
                { props.children }
            </div>
        </div>
    );
};

export default BrandComponent;
