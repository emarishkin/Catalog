import {  type FC } from "react";
import type { IProductBase } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRubleSign } from '@fortawesome/free-solid-svg-icons';
import '../../styles/ProductCard.css'
import { useBasket } from "../../context/BasketContext";


interface ProductCardProps {
    product: IProductBase
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {

    const { addToBasket } = useBasket()

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    {product.rating && (
                        <div className="product-rating">
                            <FontAwesomeIcon icon={faStar} className="rating-icon" />
                            <span>{product.rating}</span>
                        </div>
                    )}
                    <div className="product-price">
                        <span>{product.price}</span>
                        <FontAwesomeIcon icon={faRubleSign} className="price-icon" />
                    </div>
                    <button onClick={()=>addToBasket(product)}>Корзина</button>
                </div>
            </div>
        </div>
    )
}