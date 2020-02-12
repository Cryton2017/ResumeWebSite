import React from "react";
import { Media } from 'reactstrap';
import './PastProjects1.css';

import MiBase from './Images/mibase-logo-web.png';

export default () => {
  return (
    <div className="componentPastProjectOneMobile PastProjectOneMobile-component">
      <div className="contentPastProjectsOneLeftMobile">
        <div className="pastProjectCardOneMobile">
          <Media className="pastMediaLayoutOneMobile">
            <Media left href="#">
              <img className="PastLogoOneMobile" src={MiBase} alt="MiBase Australia Logo" />
            </Media>
            <Media className="pastMediaLayoutOneMobile" body>
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
    </div>
  );
};
