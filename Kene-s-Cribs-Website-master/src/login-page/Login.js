import React, { Component } from "react";
import Logo from "../images/logo1.png";
import "./Login.css";
import { Link, Redirect, withRouter } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
class Login extends Component {
  state = {
    Account: {
      firstName: "Kevon",
      lastName: "Green",
      email: "kevon.green@kcribs.com",
      password: "Kcribs123",
    },
  };

  handleLogin = (e) => {
    e.preventDefault();
    var loginEmail = document.getElementById("login-email");
    if (loginEmail.value === this.state.Account.email) {
      // alert("validated!!!");
      return this.props.history.push("/account");
    } else {
      // alert("Errors!!")
      return this.props.history.push("/login");
    }
  };

  render() {
    const { t } = this.props;
    return (
      <div className="login-page">
        <form action="" className="signin-Form" onSubmit={this.handleLogin}>
          <img className="app-logo" src={Logo} alt="app-logo" />
          <h1 className="form-title">{t("Login_header")} </h1>
          <p>{t("Login_message")}</p>
          <hr className="hr" />
          <div className="login-box">
            <div class="form-group">
              <label for="email">{t("Login_email")}</label>
              <input
                type="email"
                class="form-control"
                id="login-email"
                // value={email}
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">{t("Login_password")}</label>
              <input
                type="password"
                class="form-control"
                id="login-password"
                // value={password}
                placeholder="Enter your password"
                required
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                {t("Login_remember_me")}
              </label>
            </div>
            <div className="login-btn">
              <Link to="/account"></Link>
              <button type="submit" class="btn btn-lg btn-secondary">
                {t("Login_submit_button")}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withTranslation()(withRouter(Login));
