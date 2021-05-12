import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <section id="footer">
        <div class="container-fluid">
          <i class="fab fa-twitter social-icon"></i>
          <i class="fab fa-facebook social-icon"></i>
          <i class="fab fa-instagram social-icon"></i>
          <i class="fas fa-envelope social-icon"></i>
          <p class="">© {t("Footer_message")}</p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
