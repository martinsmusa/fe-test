import React from 'react';
import { PathType } from 'Type/ResponseData.type';

const BrandComponent = (props: {
    name: string,
    path: {
        category: string,
        brand: number
    },
    children: React.ReactChild | React.ReactFragment | React.ReactPortal,
    deleteCallback: (path: PathType) => void
}) => {
    const { name, path, deleteCallback} = props;

    return (
        <div className="brand" style={ { marginLeft: 50 } }>
            <h3 className="name">{ name }</h3>
            <div className="delete">
                <button
                    type="button"
                    onClick={ deleteCallback.bind(this, path ) }
                >
                Delete
            </button>
        </div>

    <div className="productList" style={ { marginLeft: 50 } }>
        { props.children }
    </div>
</div>
)
    ;
};

export default BrandComponent;
