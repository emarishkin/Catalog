import type { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import '../styles/Header.css';
import logo from '../public/CASTLE.png'
import search from '../public/SEARCH.svg'
import guest from '../public/GUEST.png'
import heart from '../public/HEART.png'
import bay from '../public/BAY.png'


export const Header: FC = () => {
    return (
        <header className="header">
          <div className="logo">
            <Link to={ROUTES.HOME}>
              <img style={{width:80,height:70}} src={logo} alt="logo" />
            </Link>
          </div>

          <div className="header-content">
            <div className="user">
              <img style={{width:40,height:40}} src={guest} alt="user" />
              <span>Guest</span>
            </div>

            <form className="search-form">
              <img style={{width:25,height:25}} src={search} alt="search" />
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
              <Link to={ROUTES.HOME} className="favourites">
                <img style={{width:40,height:40}} src={heart} alt="избранное" />
              </Link>

              <Link to={ROUTES.CARD} className="cart">
                <img style={{width:40,height:40}}  src={bay} alt="корзина" />
                <span className="count">2</span>
              </Link>
            </div>
          </div>
        </header>
    )
}