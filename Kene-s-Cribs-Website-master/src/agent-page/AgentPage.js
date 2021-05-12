import React, { Component } from "react";
import Agents from './Agents'
import './agent-page.css';
import Agent1 from "../images/Agent1.jpg";
import Agent2 from "../images/Agent2.jpg";
import Agent3 from "../images/Agent3.jpg";
import Agent4 from "../images/Agent4.jpg";
import Agent5 from "../images/Agent5.jpg";
import Agent6 from "../images/Agent6.jpg";
import { withTranslation } from "react-i18next";

class AgentPage extends Component {
  state = {
    agents: [

      { title: 'head sales assistant', name: 'Michael', src: Agent1, word: 'Michael has a genuine passion for helping others and for giving back to the community.', id: 1 },
      { title: 'sales assistant', name: 'Jin', src: Agent2, word: 'I have a passion for assisting clients with various real estate needs.', id: 2 },
      { title: 'sales assistant', name: 'Anita', src: Agent3, word: 'Anita looks forward to servicing you to her fullest potential, building long-lasting relationships and making your real estate experience a smooth and memorable one.', id: 3 },
      { title: 'sales assistant', name: 'Alex', src: Agent4, word: 'Since getting licensed in 2010 Alex has consistently been a top producing agent in the GTA', id: 4 },
      { title: 'sales assistant', name: 'Xuan', src: Agent5, word: 'Xuan grew up in the GTA, and he explored many different neighborhoods in and surrounding Toronto.', id: 5 },
      { title: 'sales assistant', name: 'Walter', src: Agent6, word: 'Walter Henry has always been one to follow his passion. At 13 years old, he started his career as a competitive gymnast.', id: 6 },


    ]
  }
  render() {
    const { t } = this.props;
 
    return (

      <div>
        <div className="center  blue-text text-darken-4">

          <h1 style={{ fontFamily: "Georgia"  }} >{t("MeetTeam")}</h1>
      
        </div>

        <div className="container">
          <Agents agents={this.state.agents} /> 
        </div>


      </div>
    )
  }
  displayAgents = (agent) => {
    console.log(agent);
  }

}
/* export default AgentPage; */
export default withTranslation()(AgentPage);
