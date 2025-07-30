import { useEffect, useState, type FC } from "react";
import type { IProduct } from "../types";
import { fetchApiProducts } from "../Api";
import { ProductCard } from "../components/Cards/ProductCard";
import { NavLink } from "react-router-dom";
import { Card, Skeleton } from "antd";

interface ProductsPagesProps {
    selectedCategory?: number | null;
}

export const ProductsPages:FC<ProductsPagesProps> = ({selectedCategory}) => {

  const [products,setProducts] = useState<IProduct[]>([])
  const [loading,setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    async function preload(){
      try{
        setLoading(true)
        const productsArr = await fetchApiProducts() as IProduct[] 
        setProducts(productsArr.filter(p => p.category.id === selectedCategory))
      } catch (err) {
        setError("Failed to load products");
        console.error("Error loading products:", err);
      }
      finally {
        setLoading(false)
      }
    }
    preload()
  },[selectedCategory])
  
  if (loading) return (
    <div style={{ 
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    }}>
      {[...Array(5)].map((_, index) => (
        <Card 
          key={`skeleton-${index}`} 
          style={{ width: 215, height: 380 ,marginTop:25 }}
        >
          <Skeleton active style={{marginBottom:10}} />
          <Skeleton active />
        </Card>
      ))}
    </div>
  )
  if (error) return <div className="error">{error}</div>;
  if (products.length === 0) return <div>No products found</div>;

  return (
    <section className="products-page">
      <section className="products-page">
      <div className="products-grid">
        {products.map(product => (
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
    </section>
  )
}