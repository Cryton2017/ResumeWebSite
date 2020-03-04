import React from "react";
import { Media } from 'reactstrap';
import './CurrProjectsMobile2.css';

import resumeFavicon from './Images/favicon.png';

export default () => {
  return (
    <div className="componentCurrProjTwoMobile currProjTwoMobile-component">
      <div className="contentCurrentProjectTwoMobile">
        <div className="contentCurrentProjectsRightMobile">
          <div className="currentProjectCardTwoMobile">
            <Media className="MediaLayoutTwoMobile">
              <Media left href="#" className="ImgContTwoMobile">
                <img className="CurrLogoTwoMobile" src={resumeFavicon} alt="Resume Website Favicon" />
              </Media>
              <Media className="MediaMiddleLayoutTwoMobile" body>
                <Media heading>
                  Resume Website
                </Media>
                This is an on going project. I update this website with newly acquired skills. Sometimes 
                these changes will not be visible to the end user. For example, efficiency improvements etc.
                Currently, this website has been built using React with Reactstrap for the styling. The hosting
                provider is AWS. The purpose of this website is to:
                <Media className="MediaLayoutTwoMobile">
                  <ol>
                    <li>Demonstrate my skills in Web Development,</li>
                    <li>Easily convey details of my skills to a potential employer,</li>
                    <li>Keep my skills fresh and up to date through physical practice.</li>
                  </ol>
                </Media>
                You can reach me at clittlewood50@gmail.com.au. The repository can be viewed on GitHub via the 
                <a href="https://github.com/Cryton2017/ResumeWebSite"> this</a> link. This website is under constant development and 
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
