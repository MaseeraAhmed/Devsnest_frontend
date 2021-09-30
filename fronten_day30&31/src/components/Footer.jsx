import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-2.svg";
import Grid from "./Grid";




const footerAboutLinks = [
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

];

const footerCustomerLinks = [
  {
    display: "Instagram",
    path: "/about",
  },
  {
    display: "Facebook",
    path: "/about",
  },
  {
    display: "Linkedin",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              {" "}
              <strong>Coming soon everywhere</strong>
            </p>
          </div>
          <div>
            <div className="footer__title">Contact nos.</div>
            <div className="footer__content">
              <p>Run 0123456789</p>
              <p>Time 0123456789</p>
              <p>Terror 0123456789</p>
            </div>
          </div>
          <div>
            <div className="footer__title">Pages</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Social links</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
