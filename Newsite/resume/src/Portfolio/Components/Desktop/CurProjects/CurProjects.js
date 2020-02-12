import React from "react";
import { Media } from 'reactstrap';
import './CurProjects.css';

import kashyLogo from './Images/k-logo.png';
import resumeFavicon from './Images/favicon.png';

export default () => {
  return (
    <div className="componentCurrProj currProj-component">
      <div className="contentCurrentProjects">
        <div className="contentCurrentProjectsLeft">
          <div className="currentProjectCard">
            <Media className="MediaLayout">
              <Media left href="#" className="ImgCont">
                <img className="CurrLogo" src={kashyLogo} alt="Kashy Australia Logo" />
              </Media>
              <Media className="MediaMiddleLayout" body>
                <Media heading>
                  Kashy Australia
                </Media>
                I co founded a startup in Brisbane with a friend. The premise of the bushiness is to
                improve upon the mechanics industry. We partner a trustworthy mechanic with one of our
                customers. The mechanic then does the required work at a time and place that is suitable
                to the customer. My responsibilities toward Kashy Australia include but are 
                not limited to: 
                <Media className="MediaLayout">
                  <ol>
                    <li>All areas related to IT,</li>
                    <li>Designs related to bushiness expenses,</li>
                    <li>General Management such as target calculation and forecasting.</li>
                    <li>Brainstorming and Marketing</li>
                  </ol>
                </Media>
                You can reach me at Christopher@kashy.com.au. The website can be viewed via the following 
                link.
                <Media className="MediaLayout">
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
        <div className="contentCurrentProjectsRight">
          <div className="currentProjectCard">
            <Media className="MediaLayout">
              <Media left href="#" className="ImgCont">
                <img className="CurrLogo" src={resumeFavicon} alt="Resume Website Favicon" />
              </Media>
              <Media className="MediaMiddleLayout" body>
                <Media heading>
                  Resume Website
                </Media>
                This is an on going project. I update this website with newly acquired skills. Sometimes 
                these changes will not be visible to the end user. For example, efficiency improvements etc.
                Currently, this website has been built using React with Reactstrap for the styling. The hosting
                provider is AWS. The purpose of this website is to:
                <Media className="MediaLayout">
                  <ol>
                    <li>Demonstrate my skills in Web Development,</li>
                    <li>Easily convey details of my skills to a potential employer,</li>
                    <li>Keep my skills fresh and up to date through physical practice.</li>
                  </ol>
                </Media>
                You can reach me at clittlewood50@gmail.com.au. The repository can be viewed on GitHub via the 
                link: https://github.com/Cryton2017/ResumeWebSite This website is under constant development and 
                I plan to create different version of the same website using different frameworks such as Angular. 
                I also plan to implement a vanilla JavaScript version in the near future.
              </Media>
            </Media>
          </div>
        </div>
      </div>
    </div>
  );
};
