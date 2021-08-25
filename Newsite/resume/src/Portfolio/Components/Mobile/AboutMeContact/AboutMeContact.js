import React from "react";
import { Table } from 'reactstrap';
import './AboutMeContact.css';

export default () => {
  return (
    <div className="componentAboutMeContactMobile aboutMeContactMobile-component">
      <div className="contentAboutMeContactMobile">
        <div className="leftContentAboutMeContactMobile">
          <div className="ContactDetailsMobile">
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
        </div>
      </div>
    </div>
  );
};
