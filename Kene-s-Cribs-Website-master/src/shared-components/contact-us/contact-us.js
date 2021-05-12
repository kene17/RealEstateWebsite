import React, { Component } from "react";
import "./Contact-us.css";
import axios from 'axios'
import {
  FieldFeedback,
  FieldFeedbacks,
  FormWithConstraints
} from 'react-form-with-constraints';
import Alert from 'react-bootstrap/Alert';
import { withTranslation } from "react-i18next";



class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      agent: "",
      house: "",
      alertBad: false,
      alertSucess: false,
      time: false
    };
  }


  render() {
    const { t } = this.props;
    return (
      <div className="contact-us">
        <Alert variant="danger" style={{ display: this.state.alertBad ? "block" : "none" }} onClose={() => this.setState({ alertBad: false })} dismissible>
          <Alert.Heading>{t("Danger1")}</Alert.Heading>
          <p>
            {t("Danger2")}
          </p>
        </Alert>
        <Alert variant="success" style={{ display: this.state.alertSucess ? "block" : "none" }} onClose={() => this.setState({ alertSucess: false })} dismissible>
          <Alert.Heading>{t("Success1")}</Alert.Heading>
          <p>
            {t("Success2")}
          </p>
        </Alert>
        <div className="container">
          <section class="colored-section" id="contact">
            <div className="container-fluid">
              <div className="contactIntro">
                <h2 className="heading-1">{t("Contact-Title")}</h2>
                <FormWithConstraints ref={form => this.form = form}
                  id="contact-form"
                  onSubmit={this.handleSubmit.bind(this)}
                  method="POST"
                  noValidate
                >

                  <div className="row">
                    <div className="col-6">
                      <select className="form-group" name="agent" id="dropdown" required onChange={this.onAgentChange.bind(this)} value={this.state.agent}>
                        <option value="">{t("Contact-Agent")}</option>
                        <option value="Michael">Michael</option>
                        <option value="Jin">Jin </option>
                        <option value="Anita">Anita</option>
                        <option value="Alex">Alex</option>
                        <option value="Xuan">Xuan</option>
                        <option value="Walter">Walter</option>
                        <option value="No preference">{t("No-Pref")}</option>
                      </select>
                      <FieldFeedbacks for="agent">
                        <FieldFeedback when="*">
                          {t("Contact-Error1")}
                        </FieldFeedback>
                      </FieldFeedbacks>
                    </div>
                    <div className="col-6">
                      <select className="form-group" name="house" id="dropdown" required onChange={this.onHouseChange.bind(this)} value={this.state.house}>
                        <option value="">{t("Contact-House")}</option>
                        <option value="100 Charlie Rogers">100 Charlie Rogers</option>
                        <option value="1490 Youville Drive">1490 Youville Drive </option>
                        <option value="8720 Russell Road">8720 Russell Road</option>
                        <option value="2785 8th Line Road">2785 8th Line Road</option>
                        <option value="No preference">{t("No-Pref")}</option>
                      </select>
                      <FieldFeedbacks for="agent">
                        <FieldFeedback when="*">
                          {t("Contact-Error1")}
                        </FieldFeedback>
                      </FieldFeedbacks>
                    </div>
                  </div>

                  <div className="formhelper row">
                    <div className="col-6">
                      <input name="firstname"
                        type="text"
                        className="form-control"
                        placeholder={t("Contact-First")}
                        value={this.state.firstname}
                        required onChange={this.onFirstNameChange.bind(this)}
                      />
                      <FieldFeedbacks for="agent">
                        <FieldFeedback when="*">
                          {t("Contact-Error2")}
                        </FieldFeedback>
                      </FieldFeedbacks>
                    </div>
                    <div className="col-6">
                      <input name="lastname"
                        type="text"
                        className="form-control"
                        placeholder={t("Contact-Last")}
                        value={this.state.lastname}
                        required onChange={this.onLastNameChange.bind(this)}
                      />
                      <FieldFeedbacks for="agent">
                        <FieldFeedback when="*">
                          {t("Contact-Error2")}
                        </FieldFeedback>
                      </FieldFeedbacks>
                    </div>
                  </div>
                  <div className="form-group">
                    <input name="email"
                      type="email"
                      className="form-control"
                      placeholder={t("Contact-Mail")}
                      aria-describedby="emailHelp"
                      value={this.state.email}
                      required onChange={this.onEmailChange.bind(this)}
                    />
                    <FieldFeedbacks for="email">
                      <FieldFeedback when={value => value.length === 0}>{t("Contact-Error2")}</FieldFeedback>
                      <FieldFeedback when={value => !/\S+@\S+/.test(value)}>{t("Contact-Error3")}</FieldFeedback>
                    </FieldFeedbacks>
                  </div>
                  <div className="form-group">
                    <textarea name="message"
                      className="form-control"
                      placeholder={t("Contact-Message")}
                      rows="5"
                      value={this.state.message}
                      required onChange={this.onMessageChange.bind(this)}
                    />
                    <FieldFeedbacks for="agent">
                      <FieldFeedback when="*">
                        {t("Contact-Error1")}
                      </FieldFeedback>
                    </FieldFeedbacks>
                  </div>
                  <div className="buttonhelper">
                    <button type="submit" className="button-1">
                      {t("Contact-Submit")}
                    </button>
                  </div>
                </FormWithConstraints>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  onAgentChange(event) {
    this.setState({ agent: event.target.value });
  }

  onHouseChange(event) {
    this.setState({ house: event.target.value });
  }

  onFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleChange = e => {
    this.form.validateFields(e.target);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      this.alertBad();
      return;
    } else {
      this.alertSuccess();
      axios({
        method: "POST",
        url: "http://localhost:3002/send",
        data: this.state
      }).then((response) => {
        if (response.data.status === 'success') {
          this.resetForm();
        } else if (response.data.status === 'fail') {
          return;
        }
      })
    }

  }

  alertSuccess() {
    this.setState({ alertBad: false, alertSucess: true })
  }

  alertBad() {
    this.setState({ alertSucess: false, alertBad: true })
  }

  resetForm() {
    this.setState({ firstname: '', lastname: '', email: '', message: '', agent: '', house: '' })
  }
}


export default withTranslation()(ContactUs);
