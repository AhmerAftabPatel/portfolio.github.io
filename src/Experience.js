import React from "react";
import "./Experience.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Animated } from "react-animated-css";

function Experience() {
  return (
    <div className="experience">
      <Animated animationIn="slideInRight">
        <div className="experience__row myCardLayout">
          <div className="experience__rowHeader">
            <h1>PohuLabs.</h1>
            <h1>(Aug, 2020 - Feb, 2021)</h1>
          </div>
          <p className="experience__location">
            <LocationOnIcon />
            filmnagar,Hyderabad, India
          </p>
          <h2 className="experience__title">Frontend developer</h2>
          <ul className="experience__responsibilities">
            <li>
              <p>
                Initial three months, worked as an Intern. I was involved in
                making UI designs. I was involved in implementing database
                Procedures and Functions.
              </p>
            </li>

            <li>
              <p>
                My role as a front end developer also involved documenting the
                code flow and making sure the code meets the highest coding standards .
              </p>
            </li>
            <li>
              <p>
                For the latter three months, I was given an opportunity to be a
                part of the main development team for an e commerce product, as a
                frontend Reactjs developer.
              </p>
            </li>
            <li>
              <p>
                As a part of development team, I was working with a team of 5
                very dynamic web developers.
              </p>
            </li>
          </ul>
        </div>
      </Animated>
    </div>
  );
}

export default Experience;
