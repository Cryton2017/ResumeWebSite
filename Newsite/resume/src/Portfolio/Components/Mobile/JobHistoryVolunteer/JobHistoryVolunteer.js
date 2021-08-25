import React from "react";
import { Table } from 'reactstrap';
import './JobHistoryVolunteer.css';

export default () => {
  return (
    <div className="componentVolunteerMobile VolunteerMobile-component">
      <div className="contentVolunteerHistoryMobile">
        <h1>Volunteer history</h1>
        <Table>
          <tbody>
            <tr>
              <th>Guide Dogs Queensland:</th>
              <td>Peer Support Worker</td>
              <td>From September, 2016 to November 2018.</td>
            </tr>
            <tr>
              <th>General Volunteer work:</th>
              <td>Gardening and landscaping</td>
              <td>Throughout highschool, (2010 - 2015).</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
