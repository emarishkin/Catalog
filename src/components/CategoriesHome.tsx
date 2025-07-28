import type { FC } from "react";
import { categories } from "../data";
import { NavLink } from "react-router-dom";
import '../styles/CategoriesHome.css'

interface CategoriesHome{}

export const CategoriesHome:FC<CategoriesHome> = () => {
    return (
        <section className="cat-home">
            <h2>Категории</h2>
            <div>
                {categories.map(category=>(
                    <NavLink key={category.id} to={`/categories/${category.id}`}>
                        <div key={category.id}>
                            <img src={category.image} alt={category.name} />
                            <h3>{category.name}</h3>
                        </div>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}