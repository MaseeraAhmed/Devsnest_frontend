import { Badge } from "@material-ui/core";
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo-2.svg";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Men",
    path: "/men",
  },
  {
    display: "Women",
    path: "/women",
  },
  {
    display: "Accessories",
    path: "/accessories",
  },

  {
    display: "Contact us",
    path: "/contact",
  },
];

const Header = ({ totalItems }) => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);


  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
      
        
          <Link className="header__logo" to={'/'}>
            <img src={Logo} alt="" />
          </Link>
         
       
       
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>

          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            {/* <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div> */}
            <div className="header__menu__item header__menu__right__item">
              <Link to="/wishlist">
                <Badge badgeContent={totalItems} color="secondary">
                  <i class="bx bx-heart"></i>
                </Badge>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <Badge badgeContent={totalItems} color="secondary">
                  <i className="bx bx-shopping-bag"></i>
                </Badge>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/login">
                <i className="bx bx-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
