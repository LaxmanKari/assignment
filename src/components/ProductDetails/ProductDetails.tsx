import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails: React.FC = () => {
    const {productId} = useParams();
    return (
        <div>{productId}</div>
    )
}

export default ProductDetails;