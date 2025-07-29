import type { FC } from "react";
import { NavLink } from "react-router-dom";
import '../../styles/SideBar.css';
import { CategoryCard } from "../Cards/CategoryCard";
import { categories } from "../../data";

interface SideBarProps {
    isMobileOpen?: boolean;
    onSelectCategory?: (id: number) => void;
}

export const SideBar: FC<SideBarProps> = ({ isMobileOpen,onSelectCategory }) => {
    return (
        <section className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
            <div className="title">Категории</div>
            <nav>
                <ul className="menu">
                    {categories.map(category => (
                        <li key={category.id}>
                            <NavLink 
                                to={`/categories/${category.id}`}
                                onClick={() => onSelectCategory?.(category.id)}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                <CategoryCard category={category} />    
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="footer-sidebar">
                <a href='/help' target="_blank" rel="noopener noreferrer" className="link">Помощь</a>
                <a href='/terms' target="_blank" rel="noopener noreferrer" className="link" style={{textDecoration:'underline'}}>
                    Условия & Конфиденциальность
                </a>
            </div>
        </section>
    )
}