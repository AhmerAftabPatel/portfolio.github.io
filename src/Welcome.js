import React from "react";
import "./Welcome.css";
import { Animated } from "react-animated-css";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <Animated animationIn="bounceInLeft" isVisible={true}>
          <h1 className="animate__animated animate__bounce">
            Hi, I am Ahmer Aftab Patel,
            <br />
          </h1>
          <p>I build UIs you visualize.</p>
        </Animated>
      </div>
      <div className="welcome__shortDescription">
        <Animated animationIn="bounceInUp" isVisible={true}>
          <h2>
            A young coder, who's passion is ignited when he makes a perfect
            code.
            <br />
            Meeting a project specifications and requirements is what keeps me
            <br />
            excited and intrigued in my job. Making each project efficient and
            <br />
            effortless to use is what I aim at ,with each of my projects
            <br />
          </h2>
        </Animated>
      </div>
      <div className="welcomeqoute__shortDescription">
        <p>"A user interface is like a joke. If you have to explain it, it’s not
        that good." Major skill set includes JavaScript, and one of its
        libraries, ReactJS. I believe in absolute fun and personal development
        while working.
        </p>
      </div>
      <div className="welcome__resume">
        <Animated animationIn="slideInRight" isVisible={true}>
          <a
            href="AHMER AFTAB PATEL-converted.pdf"
            target="_blank"
          >
            RESUME
          </a>
        </Animated>
      </div>
    </div>
  );
}

export default Welcome;
