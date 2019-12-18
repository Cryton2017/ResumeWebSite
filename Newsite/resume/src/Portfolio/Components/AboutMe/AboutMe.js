import React from "react";
import './AboutMe.css';
import { Table } from 'reactstrap';

export default () => {
  return (
    <div className="component second-component">
      <div className="contentAboutMe">
        <div className="leftContentAboutMe">
          <div className="introAboutMe">
            <p>
              I am currently in my final year of university. I study at the Queensland University of Technology (QUT). I am studying a Bachelor of Information Technology majoring in Computer Science. I am also 
              completing two minors. These are: Mobile Application Development and Networks and Security. Most of my study has been programming orientated but I have completed a number of units on design. I have 
              also completed units in the area of data security. Most of my networking minor has been based around setting up functional networks with proper security in a lab environment however, I have had 
              experience in configuring actual routers and creating functioning networks on campus. I have basic network penetration and web penetration experience.
            </p>
          </div>
          <div className="ContactDetails">
            <h1>Contact Details</h1>
            <Table>
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <td>Christopher Littlewood</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>clittlewood50@gmail.com</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>12 June 1996</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="EducationDetails">
            <h1>Education Details</h1>
            <Table>
              <tbody>
                <tr>
                  <th>High School</th>
                  <td>Urangan State High School</td>
                  <td>ATAR of 96</td>
                </tr>
                <tr>
                  <th>Head Start Program</th>
                  <td>University of Southern Queensland</td>
                  <td>GPA of 6</td>
                </tr>
                <tr>
                  <th>University</th>
                  <td>Queensland University of Technology</td>
                  <td>GPA of 5.76</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="rightContentAboutMe">
          <div className="bestSkills">
            <h1>My Skills</h1>
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
              </tbody>
            </Table>
            <p>I also have a wide range of experience in languages such as C, C# and Python.</p>
            <Table>
              <tbody>
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
            <p>I also have a wide range of experience in software such as Jetbrains RubyMine and Eclipse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
