import type { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import '../styles/Header.css';
import logo from '../public/logo.svg';
import search from '../public/SEARCH.svg';
import guest from '../public/GUEST.png';
import heart from '../public/HEART.png';
import bay from '../public/BAY.png';
import burgerIcon from '../public/BURGER.png';

interface HeaderProps {
    isMenuOpen: boolean;
    setMenuOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
}

export const Header: FC<HeaderProps> = ({ isMenuOpen, setMenuOpen }) => {
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt="logo" className="logo-img" />
                </Link>
            </div>

            <button 
                className="mobile-menu" 
                onClick={toggleMenu}
                aria-label="Меню"
                aria-expanded={isMenuOpen}
            >
                <img src={burgerIcon} alt="Меню" />
            </button>

            {isMenuOpen && (
                <div 
                    className="mobile-overlay"
                    onClick={closeMenu}
                />
            )}

            <div className={`header-content ${isMenuOpen ? 'mobile-open' : ''}`}>
                <div className="user">
                    <img src={guest} alt="user" className="user-avatar" />
                    <span>Guest</span>
                </div>

                <form className="search-form" onClick={e => e.stopPropagation()}>
                    <img src={search} alt="search" className="search-icon" />
                    <input
                        name="search"
                        placeholder="Поиск..."
                        type='search'
                        onChange={() => {}}
                        autoComplete="off"
                        value=''
                    />
                </form>
            </div>
            
            <div className="account-actions">
                <div className="account">
                    <Link 
                        to={ROUTES.HOME} 
                        className="favourites"
                        onClick={closeMenu}
                    >
                        <img src={heart} alt="избранное" className="account-icon" />
                    </Link>

                    <Link 
                        to={ROUTES.BASKET} 
                        className="cart"
                        onClick={closeMenu}
                    >
                        <img src={bay} alt="корзина" className="account-icon" />
                        <span className="count">2</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}