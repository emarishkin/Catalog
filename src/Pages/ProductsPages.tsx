import { useEffect, useState, type FC } from "react";
import type { IProduct } from "../types";
import { fetchApiProducts } from "../Api";
import { ProductCard } from "../components/Cards/ProductCard";
import { NavLink } from "react-router-dom";

interface ProductsPagesProps {}

export const ProductsPages:FC<ProductsPagesProps> = () => {

  const [products,setProducts] = useState<IProduct[]>([])
  const [loading,setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    async function preload(){
      try{
        setLoading(true)
        const productsArr = await fetchApiProducts() as IProduct[] 
        setProducts(productsArr.filter(product => product.category && product.category.id && product.category.name))
      } catch (err) {
        setError("Failed to load products");
        console.error("Error loading products:", err);
      }
      finally {
        setLoading(false)
      }
    }
    preload()
  },[])

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;
  if (products.length === 0) return <div>No products found</div>;

  return (
    <section className="products-page">
      <section className="products-page">
      <h1>Products List</h1>
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