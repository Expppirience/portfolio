import React from "react";
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  SKills
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Projects
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
