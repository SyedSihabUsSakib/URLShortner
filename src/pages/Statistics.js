import React from "react";
import Header from "../myComponents/Header";
import Footer from "../myComponents/Footer";
// import StatLinks from '../myComponents/StatLinks'
import StatTable from "../myComponents/StatTable";

const Statistics = (props) => {
  let appStyle = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  };
  return (
    <div style={appStyle}>
      <Header />
      <StatTable links={props.links} onDelete={props.onDelete} />
      <Footer />
    </div>
  );
};

export default Statistics;
