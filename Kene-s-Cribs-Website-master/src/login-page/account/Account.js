import React, { Component } from "react";
import "./Account.css";
import Profile from "../../images/profile-picture.png";
import { withTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";

class Account extends Component {
  state = {
    Account: {
      firstName: "Kevon",
      lastName: "Green",
      email: "kevon.green@kcribs.com",
      password: "Kcribs123",
      phoneNumber: "613-234-8796",
    },
  };
  render() {
    const { t } = this.props;
    return (
      <div className="account-info">
        {/* // send information to my login component  */}
        <div className="account-header">
          <h2 className="account-title">{t("Account_header")}</h2>
          <p className="account-text">{t("Account_message")}</p>
        </div>

        <div className="row account-box">
          <div className="col-4">
            <img src={Profile} alt="profile-img" className="account-img" />
          </div>
          <div className="col-8">
            <form action="" className="update-account">
              <div class="row form-group info-group">
                <div className="col-4">
                  <label class="label-text" for="email">
                    {t("Account_first_name")}
                  </label>
                </div>
                <div className="col-8 update-input">
                  <input
                    type="text"
                    class="form-control"
                    id="account-fname"
                    placeholder={this.state.Account.firstName}
                    required
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row form-group info-group">
                <div className="col-4">
                  <label class="label-text" for="email">
                    {t("Account_last_name")}
                  </label>
                </div>
                <div className="col-8 update-input">
                  <input
                    type="text"
                    class="form-control"
                    id="account-lname"
                    placeholder={this.state.Account.lastName}
                    required
                    disabled={true}
                  />
                </div>
              </div>

              <div class="row form-group info-group">
                <div className="col-4">
                  <label class="label-text" for="email">
                    {t("Account_email")}
                  </label>
                </div>
                <div className="col-8 update-input">
                  <input
                    type="email"
                    class="form-control"
                    id="account-email"
                    aria-describedby="emailHelp"
                    placeholder={this.state.Account.email}
                    required
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row form-group info-group">
                <div className="col-4">
                  <label class="label-text" for="email">
                    {t("Account_phone_number")}
                  </label>
                </div>
                <div className="col-8 update-input">
                  <input
                    type="text"
                    class="form-control"
                    id="account-phoneNumber"
                    placeholder={this.state.Account.phoneNumber}
                    required
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row form-group info-group">
                <div className="col-4">
                  <label class="label-text" for="email">
                    {t("Account_current_password")}
                  </label>
                </div>
                <div className="col-8 update-input">
                  <input
                    type="text"
                    class="form-control"
                    id="account-existPassword"
                    placeholder={"**************"}
                    required
                    disabled={true}
                  />
                </div>
              </div>
              {/* <div class="row form-group info-group">
                <div className="col-4">
                  <label class="label-text" for="email">
                    {t("Account_new_password")}
                  </label>
                </div>
                <div className="col-8 update-input">
                  <input
                    type="text"
                    class="form-control"
                    id="account-newPassword"
                    required
                  />
                </div>
              </div> */}
              <div className="update-btn">
                <button
                  type="button"
                  class="btn btn-lg btn-danger"
                  disabled={true}
                >
                  {t("Account_update_button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

//links
// https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png

export default withTranslation()(Account);
