import type { FC } from "react";
import { popularProducts } from "../data";
import { NavLink } from "react-router-dom";
import { ProductCard } from "./Cards/ProductCard";
import '../styles/ProductsHome.css'

interface ProductsHomeProps {}

export const ProductsHome: FC<ProductsHomeProps> = () => {
  return (
    <section className='products-home'>
        <h2 className="section-title">Популярные товары</h2>
        <div className="products-grid">
            {popularProducts.map(product => (
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
  )
}