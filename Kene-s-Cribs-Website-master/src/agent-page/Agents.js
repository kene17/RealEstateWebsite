import React from "react";
/* import {Link} from 'react-router-dom' */
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'
/* import Button from "react-bootstrap/Button"; */
import { useTranslation } from 'react-i18next';
import './agent-page.css';
import Agent1 from "../images/Agent1.jpg";
import Agent2 from "../images/Agent2.jpg";
import Agent3 from "../images/Agent3.jpg";
import Agent4 from "../images/Agent4.jpg";
import Agent5 from "../images/Agent5.jpg";
import Agent6 from "../images/Agent6.jpg";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from 'reactstrap';



const Agents = ({ agents }) => {
  const { t } = useTranslation();
  /* const agentlist = agents.map((agent) => { */
    return (
      <div >
        {}
        <Row>
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img variant="top" style={{ height: "22rem" }} src={Agent1} />
          <Card.Body>
            <Card.Title>{t("Mike.Title")}</Card.Title>
            <Card.Text>Michael</Card.Text>
            <Card.Text style={{ height: "7rem" }}>
            {t("Mike.Word")}
            </Card.Text>
            <Link to={"/contact-us/"}>
               <button type="view" className="btn-small"> 
                  {t("View_Button")}
               </button>
            </Link>
            {/* <div className="buttonfriend">
              <Button variant="primary">VIEW</Button>
            </div> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img variant="top" style={{ height: "22rem" }} src={Agent2} />
          <Card.Body>
            <Card.Title>{t("Regular")}</Card.Title>
            <Card.Text>Jin</Card.Text>
            <Card.Text style={{ height: "7rem" }}>
            {t("Agent2.W")}
            </Card.Text>
            <Link to={"/contact-us/"}>
               <button type="view" className="btn-small"> 
                  {t("View_Button")}
               </button>
            </Link>
            {/* <div className="buttonfriend">
              <Button variant="primary">VIEW</Button>
            </div> */}
          </Card.Body>
        </Card>
        
        
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img variant="top" style={{ height: "22rem" }} src={Agent3} />
          <Card.Body>
            <Card.Title>{t("Regular")}</Card.Title>
            <Card.Text>Anita</Card.Text>
            <Card.Text style={{ height: "7rem" }}>
            {t("Agent3.W")}
            </Card.Text>
            <Link to={"/contact-us/"}>
               <button type="view" className="btn-small"> 
                  {t("View_Button")}
               </button>
            </Link>
            {/* <div className="buttonfriend">
              <Button variant="primary">VIEW</Button>
            </div> */}
          </Card.Body>
        </Card>
        </Row>
        <Row>
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img variant="top" style={{ height: "22rem" }} src={Agent4} />
          <Card.Body>
            <Card.Title>{t("Regular")}</Card.Title>
            <Card.Text>Alex</Card.Text>
            <Card.Text style={{ height: "7rem" }}>
            {t("Agent4.W")}
            </Card.Text>
            <Link to={"/contact-us/"}>
               <button type="view" className="btn-small"> 
                  {t("View_Button")}
               </button>
            </Link>
            {/* <div className="buttonfriend">
              <Button variant="primary">VIEW</Button>
            </div> */}
          </Card.Body>
        </Card>
        
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img variant="top" style={{ height: "22rem" }} src={Agent5} />
          <Card.Body>
            <Card.Title>{t("Regular")}</Card.Title>
            <Card.Text>Xuan</Card.Text>
            <Card.Text style={{ height: "7rem" }}>
            {t("Agent5.W")}
            </Card.Text>
            <Link to={"/contact-us/"}>
               <button type="view" className="btn-small"> 
                  {t("View_Button")}
               </button>
            </Link>
            {/* <div className="buttonfriend">
              <Button variant="primary">VIEW</Button>
            </div> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img variant="top" style={{ height: "22rem" }} src={Agent6} />
          <Card.Body>
            <Card.Title>{t("Regular")}</Card.Title>
            <Card.Text>Walter</Card.Text>
            <Card.Text style={{ height: "7rem" }}>
            {t("Agent6.W")}
            </Card.Text>
            <Link to={"/contact-us/"}>
               <button type="view" className="btn-small"> 
                  {t("View_Button")}
               </button>
            </Link>
            {/* <div className="buttonfriend">
              <Button variant="primary">VIEW</Button>
            </div> */}
          </Card.Body>
        </Card>
        </Row>

        
      </div>
    );
  /* }); */
  /* console.log(agentlist); */
 /*  return (
    <div className="agent-list">
      <div className="row">
        <div className="col m4">{agentlist[0]}</div>
        <div className="col m4">{agentlist[1]}</div>
        <div className="col m4">{agentlist[2]}</div>
        <div className="col m4">{agentlist[3]}</div>
        <div className="col m4">{agentlist[4]}</div>
        <div className="col m4">{agentlist[5]}</div>
      </div>
    </div>
  ); */
};
export default Agents;
