import { useEffect, type FC } from "react";
import { ProductCard } from "../components/Cards/ProductCard";
import { NavLink } from "react-router-dom";
import { Card, Skeleton } from "antd";
import { useProducts } from "../context/ProductContext";

interface ProductsPagesProps {
    selectedCategory?: number | null;
}

export const ProductsPages:FC<ProductsPagesProps> = ({selectedCategory}) => {
    const {loading, error, filteredProducts, filterProducts} = useProducts();

    useEffect(() => {
        if (selectedCategory !== undefined) {
            filterProducts(selectedCategory ?? null);
        }
    }, [selectedCategory, filterProducts]);
    
    if (loading) return (
        <div style={{ 
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
        }}>
            {[...Array(5)].map((_, index) => (
                <Card 
                    key={`skeleton-${index}`} 
                    style={{ width: 215, height: 380, marginTop: 25 }}
                >
                    <Skeleton active style={{marginBottom: 10}} />
                    <Skeleton active />
                </Card>
            ))}
        </div>
    );

    if (error) return <div className="error">{error}</div>;
    if (filteredProducts.length === 0) return <div>No products found</div>;

    return (
        <section className="products-page">
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <NavLink 
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="product-link"
                    >
                        <ProductCard product={product} />
                    </NavLink>
                ))}
            </div>
        </section>
    );
};