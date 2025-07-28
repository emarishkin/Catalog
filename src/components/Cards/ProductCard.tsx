import type { FC } from "react";
import type { IPopularProducts } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRubleSign } from '@fortawesome/free-solid-svg-icons';
import '/СайтКаталог/Magazin/src/styles/ProductCard.css'

interface ProductCardProps {
    product: IPopularProducts
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-footer">
                    <div className="product-rating">
                        <FontAwesomeIcon icon={faStar} className="rating-icon" />
                        <span>{product.rating}</span>
                    </div>
                    <div className="product-price">
                        <span>{product.price}</span>
                        <FontAwesomeIcon icon={faRubleSign} className="price-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}