import React from "react";
import Rules from "../rules/rules.component";
import Footer from "../footer/footer.component";
import TimeLine from "../timeline/timeline.component";

function mainBottom() {
  return (
    <div className="rules-wrapper">
      <Rules />
      <TimeLine />
      <Footer />
    </div>
  );
}

export default mainBottom;
