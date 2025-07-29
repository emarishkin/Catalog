import type { FC } from "react";
import type { ICardCategory } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/CategoryCard.css'
import { faBox } from '@fortawesome/free-solid-svg-icons'; 

interface CategoryCardProps {
    category: ICardCategory
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
    return (
        <div className="category-card">
            <FontAwesomeIcon icon={category.icon || faBox} className="category-icon" />
            <span className="category-name">{category.name}</span>
        </div>
    )
}