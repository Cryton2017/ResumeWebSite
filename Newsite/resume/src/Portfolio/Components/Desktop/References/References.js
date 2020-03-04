import React from "react";
import './References.css';

export default () => {
  return (
    <div className="component fourth-component">
      <div className="contentMyReferences">
        <h1>My References</h1>
        <br />

        <div class="referenceInfo">
          <h2>Reference 1: </h2>
          <div>Scott Sharpe (Professional):</div>
          <div>Operations Manager at Telstra</div>
          <div>See paper copy of resume for contact details.</div>
        </div>
        <br />

        <div class="referenceInfo">
          <h2>Reference 2:</h2>
          <div>Michelle Baird (Professional):</div>
          <div>Mibase Toy Libraries CEO</div>
        </div>
        <br />

        <div class="referenceInfo">
          <h2>Reference 3: </h2>
          <div>Cameron Thompson (Personal):</div>
          <div>Friend and study partner at QUT</div>
          <div>See paper copy of resume for contact details.</div>
        </div>
        <br/>

        <div class="referenceInfo">
          <h2>Reference 4: </h2>
          <div>Vaughan Littlewood (Professional/Personal):</div>
          <div>Smithies Pizza and Volunteer Garden Work</div>
          <div>See paper copy of resume for contact details.</div>
        </div>
        <br />

      </div>
    </div>
  );
};
