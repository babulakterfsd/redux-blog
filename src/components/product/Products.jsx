import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function Products() {
    const { products } = useSelector((state) => state);

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {products.map((product) => (
                <ProductCard key={Math.random() * 99} product={product} />
            ))}
        </div>
    );
}

export default Products;
