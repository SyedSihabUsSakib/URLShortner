import React, { useState } from "react";
import Header from "../myComponents/Header";
import Form from "../myComponents/Form";
import ShortLinks from "../myComponents/ShortLinks";
import Footer from "../myComponents/Footer";

const Home = (props) => {
  let appStyle = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  };

  //  console.log(props.links)

  return (
    <>
      <div style={appStyle}>
        <Header />
        <Form addUrl={props.addUrl} links={props.links} />
        <ShortLinks links={props.links} onDelete={props.onDelete} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
