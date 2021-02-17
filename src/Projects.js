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
                <img src="my-portfolio-website/technologies/js.png" />
                <img src="my-portfolio-website/technologies/react.png" />
                {/* <img src="my-portfolio-website/technologies/spotify.png" /> */}
              </div>
            </div>
          </div>
          <div className="projects__cardRight">
            <a
              href="https://github.com/AhmerAftabPatel/atm-frontend"
              // href="https://github.com/RishabBaisakh/musify-mern"
              target="_blank"
            >
              <img src="my-portfolio-website/projects/atmshow.png" />
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
                <img src="my-portfolio-website/technologies/js.png" />
                <img src="my-portfolio-website/technologies/react.png" />
                <img src="my-portfolio-website/technologies/node.jfif" />
              </div>
            </div>
          </div>
          <div className="projects__cardRight">
            <a
              href="https://github.com/RishabBaisakh/whatsapp-clone"
              target="_blank"
            >
              <img src="my-portfolio-website/projects/ggcommerce.png" />
            </a>
          </div>
        </div>
      </Animated>

      {/* <Animated
        animationIn="slideInRight"
        isVisible={true}
        animationInDelay={400}
      >
        <div className="projects__card myCardLayout">
          <div className="projects__cardLeft">
            <h1>Slack (clone)</h1>
            <div className="projects__cardDescription">
              <p>A chat web application built with ReactJS and Firebase.</p>
              <p>
                The user can create workspace and add different users to the
                workspace. The can also create different channels as a segway to
                start chat for specific topics.
              </p>
            </div>

            <div className="projects__cardTechnologies">
              <div>
                <img src="my-portfolio-website/technologies/js.png" />
                <img src="my-portfolio-website/technologies/react.png" />
                <img src="my-portfolio-website/technologies/firebase.png" />
              </div>
            </div>
          </div>
          <div className="projects__cardRight">
            <a href="#">
              <img src="my-portfolio-website/projects/slack.png" />
            </a>
          </div>
        </div>
      </Animated>

      <Animated
        animationIn="slideInRight"
        isVisible={true}
        animationInDelay={600}
      >
        <div className="projects__card myCardLayout">
          <div className="projects__cardLeft">
            <h1>Instagram (clone)</h1>
            <div className="projects__cardDescription">
              <p>
                A social networking mobile application built with Android Studio
                and Firebase.
              </p>
              <p>
                The user can follow other users and share posts with text,
                images and videos. The user can also send chat messages to
                his/her fam.
              </p>
            </div>

            <div className="projects__cardTechnologies">
              <div>
                <img src="my-portfolio-website/technologies/androidStudio.jfif" />
                <img src="my-portfolio-website/technologies/firebase.png" />
              </div>
            </div>
          </div>
          <div className="projects__cardRight">
            <a
              href="https://github.com/RishabBaisakh/slack-clone"
              target="_blank"
            >
              <img src="my-portfolio-website/projects/instagram.png" />
            </a>
          </div>
        </div>
      </Animated>
      <Animated
        animationIn="slideInRight"
        isVisible={true}
        animationInDelay={800}
      >
        <div className="projects__card myCardLayout">
          <div className="projects__cardLeft">
            <h1>Hangman</h1>
            <div className="projects__cardDescription">
              <p>A word guessing game built with vanilla JavaScript.</p>
              <p>
                A user have to guess letters and fill in the blanks for the
                word, with seven chances.
              </p>
            </div>

            <div className="projects__cardTechnologies">
              <div>
                <img src="my-portfolio-website/technologies/js.png" />
              </div>
            </div>
          </div>
          <div className="projects__cardRight">
            <a
              href="https://github.com/RishabBaisakh/hangman-for-fun"
              target="_blank"
            >
              <img src="my-portfolio-website/projects/hangman.png" />
            </a>
          </div>
        </div>
      </Animated> */}
    </div>
  );
}

export default Projects;
