import React from "react";
import { Table } from 'reactstrap';
import './AboutMeSkills.css';

export default () => {
  return (
    <div className="componentAboutMeSkillsMobile aboutMeSkillsMobile-component">
      <div className="contentAboutMeSkillsMobile">
        <div className="rightContentAboutMeSkillsMobile">
          <div className="bestSkillsMobile">
            <h1>My Top Skills</h1>
            <Table>
              <tbody>
                <tr>
                  <th>HTML</th>
                  <td>Studied and practiced since 2011</td>
                </tr>
                <tr>
                  <th>CSS</th>
                  <td>Studied and practiced since 2011</td>
                </tr>
                <tr>
                  <th>JavaScript</th>
                  <td>Studied and practiced since 2012</td>
                </tr>
                <tr>
                  <th>PHP</th>
                  <td>Studied and practiced since 2012</td>
                </tr>
                <tr>
                  <th>MySQL</th>
                  <td>Studied and practiced since 2012</td>
                </tr>
                <tr>
                  <th>React</th>
                  <td>Studied and practiced since 2018</td>
                </tr>
                <tr>
                  <th>React Native</th>
                  <td>Studied and practiced since 2018</td>
                </tr>
                <tr>
                  <th>PL/SQL</th>
                  <td>Studied and practiced since 2019</td>
                </tr>
                <tr>
                  <th>Bash</th>
                  <td>Studied and practiced since 2019</td>
                </tr>
                <tr>
                  <th>Microsoft Office Suite</th>
                  <td>Used since I was young, age 10</td>
                </tr>
                <tr>
                  <th>Microsoft Visual Studio/Code</th>
                  <td>Studied and practiced since 2016</td>
                </tr>
                <tr>
                  <th>Atlassian Jira (Dev/Admin/Host)</th>
                  <td>Studied and practiced since 2018</td>
                </tr>
                <tr>
                  <th>Github</th>
                  <td>Studied and practiced since 2017</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
