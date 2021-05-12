import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo2.png";
import Cookies from "js-cookie";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const langauges = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const Navbar = () => {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = langauges.find(
    (lang) => lang.code === currentLanguageCode
  );
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);
  return (
    /* Nav Bar */
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <img src={logo} alt="" width="40" height="40"></img>
        <a href="/" class="navbar-brand">
          {t("Nav_brand")}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-globe"></i>
                </button>
                <div class="dropdown-menu">
                  {langauges.map(({ code, name, country_code }) => (
                    <button
                      class="dropdown-item"
                      key={code}
                      onClick={() => i18next.changeLanguage(code)}
                      disabled={code === currentLanguageCode}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                      ></span>
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/">
                {t("Nav_Home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listings">
                {t("Nav_Listings")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/agents">
                {t("Nav_Agents")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                {t("Nav_Contact_Us")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                {t("Nav_Login")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
