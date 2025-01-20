import React from "react";
import mainimg from "../assets/images/programming-code.jpg";

const ClioHome = () => {

  const container = {
    display: "flex",
//    marginTop: "100px",
  };
  const textContainer = {
    marginRight: "5px",
    marginLeft: "50px",
    marginTop: "50px",
    width: "60%", 
    height: "auto"
  };
  const mainPic = {
    width: "100%", 
    height: "auto"
  };

  const smallHeader = {
    color: "#a8a8a8",
    letterSpacing: ".5px",
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "16px",   
  };
  const largeParagraph = {
    color: "#6a5acd",
    fontWeight: "400",
    fontFamily: "Baskervville, sans-serif",
    fontSize: "32px",   
  };
  const smallParagraph = {
    color: "",
    letterSpacing: ".5px",
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "16px",   
  };
   
  console.log("Home Element");

  return (
      <div style= {container}>
          <div>
              <img alt="Logo" src={mainimg} style= {mainPic}  />
          </div>
          <div style= {textContainer}>
            <div style={smallHeader}>About Clio Research</div>
            <h2 style={largeParagraph}>Since the firm's founding in 2009, Clio Research has employed the same core philosophy.</h2>
            <p style={smallParagraph}>We seek to capture upside in good markets and control downside in difficult markets, thereby delivering attractive returns to investors over time, without taking excessive risk. Our core competencies include deep expertise in diversified credit, mortgage, and fixed income markets.</p>
          </div>
      </div>
  );
};

export default ClioHome;
