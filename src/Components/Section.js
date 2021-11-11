import React from "react";
import './Section.css'

function Section({ selected, color, title, Icon }) {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        width: "100%",
        borderBottom: `3px solid ${color}`,
        color: `${selected}`,
      }}
    >
      <Icon />
      <h4 style={{marginLeft:'5px'}}>{title}</h4>
    </div>
  );
}

export default Section;
