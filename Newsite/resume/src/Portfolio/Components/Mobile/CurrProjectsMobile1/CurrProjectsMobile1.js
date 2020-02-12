import React from "react";
import { Media } from 'reactstrap';
import './CurrProjectsMobile1.css';

import kashyLogo from './Images/k-logo.png';

export default () => {
  return (
    <div className="componentCurrProjOneMobile currProjOneMobile-component">
      <div className="contentCurrentProjectOneMobile">
        <div className="contentCurrentProjectsLeftMobile">
          <div className="currentProjectCardOneMobile">
            <Media className="MediaLayoutOneMobile">
              <Media left href="#" className="ImgContOneMobile">
                <img className="CurrLogoOneMobile" src={kashyLogo} alt="Kashy Australia Logo" />
              </Media>
              <Media className="MediaMiddleLayoutOneMobile" body>
                <Media heading>
                  Kashy Australia
                </Media>
                I co founded a startup in Brisbane with a friend. The premise of the bushiness is to
                improve upon the mechanics industry. We partner a trustworthy mechanic with one of our
                customers. The mechanic then does the required work at a time and place that is suitable
                to the customer. My responsibilities toward Kashy Australia include but are 
                not limited to: 
                <Media className="MediaLayoutOneMobile">
                  <ol>
                    <li>All areas related to IT,</li>
                    <li>Designs related to bushiness expenses,</li>
                    <li>General Management such as target calculation and forecasting.</li>
                    <li>Brainstorming and Marketing</li>
                  </ol>
                </Media>
                You can reach me at Christopher@kashy.com.au. The website can be viewed via the following 
                link.
                <Media className="MediaLayoutOneMobile">
                  <ul>
                    <li>https://kashy.com.au</li>
                    <li>https://dev.kashy.com.au</li>
                  </ul>
                </Media>
                The development website is currently outdated and a new website is being constructed using 
                react We are rebuilding it to match the already existing website which is currently being
                hosted via Wix for simplicity and to allow customers to have a smooth and hassle free 
                experience while using our website.
              </Media>
            </Media>
          </div>
        </div>
      </div>
    </div>
  );
};
