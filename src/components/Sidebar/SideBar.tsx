import type { FC } from "react";
import { NavLink } from "react-router-dom";
import '/СайтКаталог/Magazin/src/styles/SideBar.css'
import { CategoryCard } from "../Cards/CategoryCard";
import { categories } from "../../data";

export const SideBar:FC = () => {
    return (
        <section className="sidebar">
            <div className="title">Категории</div>
            <nav>
                <ul className="menu">
                    {categories.map(category=>(
                        <li key={category.id}>
                            <NavLink to={`/categories/${category.id}`}>
                                <CategoryCard category={category} />    
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="footer-sidebar">
                <a href='/help' target="_blank" className="link">Помощь</a>
                <a style={{textDecoration:'underline'}} href='/terms' target="_blank" className="link">Условия && Конфиденциальность</a>
            </div>
        </section>
    )
}