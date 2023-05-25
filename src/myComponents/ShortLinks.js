import React from "react";
import Links from "./Links";

const ShortLinks = (props) => {
  let linkStyle = {
    borderBottom: " 2px solid black",
    marginLeft: "initial",
  };

  return (
    <div className="container">
      <div className="bg-dark text-light text-center border-2 shadow-lg rounded p-3">
        <h5>Available Links</h5>
      </div>
      <div className="row container my-2" style={linkStyle}>
        <div className="col-md-6 border-bottom border-2">
          <h5>Long Links</h5>
        </div>
        <div className="col-md-4">
          <h5>Short Links</h5>
        </div>
        <div className="col-md-2">
          <h5>Count</h5>
        </div>
      </div>
      {props.links.map((e) => {
        return <Links link={e} onDelete={props.onDelete} />;
      })}
    </div>
  );
};

export default ShortLinks;
