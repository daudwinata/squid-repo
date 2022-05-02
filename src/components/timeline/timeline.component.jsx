import React from "react";
import TimelineData from "./timeline-data.component";
import TimeLineItem from "./timeline-item.component";
import "./timeline.styles.css";

function Timeline() {
   return (
     <div className="timeline-container">
       {TimelineData.map((dataTest, idx) => (
         <TimeLineItem data={dataTest} key={idx} />
       ))}
     </div>
  );
}

export default Timeline;
