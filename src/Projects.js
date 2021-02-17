import React from "react";
import "./Projects.css";
import { Animated } from "react-animated-css";

function Projects() {
  return (
    <div className="projects">
      <Animated animationIn="slideInRight" isVisible={true}>
        <div className="projects__card myCardLayout">
          <div className="projects__cardLeft">
            <h1>At-themoment</h1>

            <div className="projects__cardDescription">
              <p>
                <b>
                  A task managment web application built with ReactJS and
                  express API.
                </b>
              </p>
              <p>
                This is an admin side of the application , where admin can track
                daily employee activities, attendance and assign various tasks
              </p>
            </div>

            <div className="projects__cardTechnologies">
              <div>
                <img src="technologies/js.png" />
                <img src="technologies/react.png" />
              </div>
            </div>
          </div>
          <div className="projects__cardRight">
            <a
              href="https://github.com/AhmerAftabPatel/atm-frontend"
              target="_blank"
            >
              <img src="projects/atmshow.png" />
            </a>
          </div>
        </div>
      </Animated>
      <Animated
        animationIn="slideInRight"
        isVisible={true}
        animationInDelay={200}
      >
        <div className="projects__card myCardLayout">
          <div className="projects__cardLeft">
            <h1>Ecommerce</h1>
            <div className="projects__cardDescription">
              <p>An e-commerce web application built with ReactJS and NodeJS.</p>
              <p>
                The user can order T-shirts and pay online with paytm.
                (includes admin side)
              </p>
            </div>

            <div className="projects__cardTechnologies">
              <div>
                <img src="technologies/js.png" />
                <img src="technologies/react.png" />
                <img src="technologies/node.jfif" />
              </div>
            </div>
          </div>
          <div className="projects__cardRight">
            <a
              href="https://fruitmania.co/"
              target="_blank"
            >
              <img src="projects/ggcommerce.png" />
            </a>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default Projects;
