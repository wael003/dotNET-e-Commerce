import { useEffect, useState } from "react"
import type { Product } from "../../app/models/product"
import ProductList from "./ProductList"

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5001/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching products:', err))
    }, [])

    return (
        <>
            <ProductList products={products} />
        </>
    )
}