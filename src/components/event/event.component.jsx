import React from "react";
import "./event.styles.css";

function Event() {
  return (
    <div className="event-wrapper">
      <div className="event-container">
        <div className="event-ladder">
          <div className="event-circle">Ladder Mode</div>
        </div>
        <div className="event-skew">
          <div className="event-exclusive">
            <div className="event-triangle">Exclusive <br/>Event</div>
          </div>
        </div>
        <div className="event-championship">
          <div className="event-square">Championship <br/>Mechanism</div>
        </div>
      </div>
    </div>
  );
}

export default Event;
