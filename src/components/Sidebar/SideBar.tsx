import type { FC } from "react";
import { NavLink } from "react-router-dom";
import '/СайтКаталог/Magazin/src/styles/SideBar.css'

export const SideBar:FC = () => {
    return (
        <section className="sidebar">
            <div className="title">categories</div>
            <nav>
                <ul className="menu">
                    <li>
                        <NavLink to={`/categories/${1}`}>Link</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="footer-sidebar">
                <a href='/help' target="_blank" className="link">Помощь</a>
                <a style={{textDecoration:'underline'}} href='/terms' target="_blank" className="link">Условия && Конфиденциальность</a>
            </div>
        </section>
    )
}