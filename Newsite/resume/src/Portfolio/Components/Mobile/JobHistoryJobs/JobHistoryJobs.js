import React from "react";
import { Table } from 'reactstrap';
import './JobHistoryJobs.css';

export default () => {
  return (
    <div className="componentJobHistoryJobsMobile jobComponentJobsMobile">
      <div className="contentJobHistoryJobsMobile">
        <h1>Job history</h1>
        <br />
        <Table>
          <tbody>
            <tr>
              <th>Wipro Ltd:</th>
              <td>Project Engineer (Current Account: ANZ Wealth)</td>
              <td>From June 2019 to Present</td>
            </tr>
            <tr>
              <th>Kashy Australia:</th>
              <td>Co Founder and CTO</td>
              <td>From February 2019 to Present</td>
            </tr>
            <tr>
              <th>Telstra:</th>
              <td>Automation Specialist Intern</td>
              <td>Winter Break in 2017 (Month of July).</td>
            </tr>
            <tr>
              <th>Smithies Pizzeria:</th>
              <td>Kitchen Hand</td>
              <td>From August 2012 to March 2013.</td>
            </tr>
            <tr>
              <th>Body Corporate at Food Works:</th>
              <td>Grounds Keeping</td>
              <td>From April 2011 to December 2012.</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
