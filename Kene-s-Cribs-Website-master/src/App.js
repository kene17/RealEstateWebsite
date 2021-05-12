import React from "react";
import Footer from "./shared-components/footer-component/Footer";
import Navbar from "./shared-components/navbar-component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./homePage/Homepage";
import ListingsPage from "./listings-page/ListingsPage";
import AgentPage from "./agent-page/AgentPage";
import ListingPage1 from "./listings-page/single-listing-1/listing-page-1";
import ListingPage2 from "./listings-page/single-listing-2/listing-page-2";
import ListingPage3 from "./listings-page/single-listing-3/listing-page-3";
import ListingPage4 from "./listings-page/single-listing-4/listing-page-4";
import Login from "./login-page/Login";
import Account from "./login-page/account/Account";
import ContactUs from "./shared-components/contact-us/contact-us";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/listings" component={ListingsPage}></Route>
          <Route path="/agents" component={AgentPage}></Route>
          <Route path="/listing-page-1" component={ListingPage1}></Route>
          <Route path="/listing-page-2" component={ListingPage2}></Route>
          <Route path="/listing-page-3" component={ListingPage3}></Route>
          <Route path="/listing-page-4" component={ListingPage4}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
          <Route path="/account" component={Account}></Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
