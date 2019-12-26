import React from "react";
import { Media } from 'reactstrap';
import './PastProjects.css';

import MiBase from './Images/mibase-logo-web.png';

export default () => {
  return (
    <div className="component fifth-component">
      <div className="contentPastProjectsLeft">
        <div className="pastProjectCard">
          <Media className="pastMediaLayout">
            <Media left href="#">
              <img src={MiBase} alt="MiBase Australia Logo" />
            </Media>
            <Media className="pastMediaLayout" body>
              <Media heading>
                Mibase Australia 
              </Media>
              For my university capstone project, myself and three others spent our final year designing 
              and developing a mobile app for Mibase and its customers. The app was designed to work along
              side the website and interface with the Mibase database. Customers can browse through available
              toys, reserve toys, extend loans on toys and manage their individual roster for volunteer duties.
            </Media>
          </Media>
        </div>
      </div>
      <div className="contentPastProjectsRight">

      </div>
    </div>
  );
};
