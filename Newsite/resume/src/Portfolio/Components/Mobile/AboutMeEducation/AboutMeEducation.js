import React from "react";
import { Table } from 'reactstrap';
import './AboutMeEducation.css';

export default () => {
  return (
    <div className="componentAboutMeEducationMobile aboutMeEducationMobile-component">
      <div className="contentAboutMeEducationMobile">
        <div className="leftContentAboutMeEducationMobile">
          <div className="EducationDetailsMobile">
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
      </div>
    </div>
  );
};
