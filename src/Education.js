import React from "react";
import "./Education.css";
import { Animated } from "react-animated-css";
import { Grid, Typography } from "@material-ui/core";
import Whatshot from "@material-ui/icons/Whatshot";
import School from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <div className="education">
      <Animated animationIn="slideInRight">
      <Grid container justify="center" style={{ paddingTop: "2rem" }}>
          <Grid item lg={12}>
            <Typography
              align="center"
              variant="h5"
              style={{
                fontFamily: "poppins-bold, sans-serif",
                color: "#00ad45"
              }}
            >
              Education
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ paddingTop: "1rem" }}>
          <Grid item lg={12}>
            <Typography
              align="center"
              variant="h4"
              style={{
                fontFamily: "poppins-bold, sans-serif",
                color: "#000000"
              }}
            >
              My Education Road Map
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="center" style={{ paddingBottom: "2rem" }}>
          <Grid item lg={12}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2005 - 2015"
                iconStyle={{ background: "#00ad45", color: "#ffffff" }}
                icon={<School />}
              >
                <Typography variant="h6">
                  High School &amp; Secondary
                </Typography>
                <Typography variant="subtitle1">
                  Mesco Grades High School, Asifnagar, hyd, IN
                </Typography>
                <Typography variant="body2">
                  Aggregate: 87% (SSC & CBSE) <br />
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015 - 2017"
                iconStyle={{ background: "#00ad45", color: "#ffffff" }}
                icon={<School />}
              >
                <Typography variant="h6">
                  Intermediate College &amp; Secondary
                </Typography>
                <Typography variant="subtitle1">
                  Sri Chaitanya junior kalasala, narayanguda, hyd, IN
                </Typography>
                <Typography variant="body2">
                  Aggregate: 74% (MPC) <br />
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - present"
                iconStyle={{ background: "#00ad45", color: "#ffffff" }}
                icon={<School />}
              >
                <Typography variant="h6">Bachelor Degree</Typography>
                <Typography variant="subtitle1">
                  Jogingally College of Engineering and Technology, Yenkapally
                </Typography>
                <Typography variant="body2">
                  Bachelor of Technology - BTech Computer Science and
                  Engineering <br />
                  CGPA: 6.52 (At the end of 6 Semesters)
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#00ad45", color: "#fff" }}
                icon={<Whatshot fontSize="large" />}
              />
            </VerticalTimeline>
          </Grid>
        </Grid>
        {/* <div className="education__row myCardLayout">
          <div className="education__rowHeader">
            <h1>Programming and Web Technologies Diploma</h1>
            <h1>(2019 - Present)</h1>
          </div>
          <a href="https://isi-mtl.com/en/">
            L'institut Supérieur d'Informatique
          </a>
          <p>Quebec, Montreal</p>
        </div>
      </Animated>

      <Animated animationIn="slideInRight" animationInDelay={300}>
        <div className="education__row myCardLayout">
          <div className="education__rowHeader">
            <h1>Bachelor of Engineering in Computer Science</h1>
            <h1>(2014 - 2018)</h1>
          </div>
          <a href="https://vtu.ac.in/">Visvesvaraya Technological University</a>
          <p>Bidar, Karnataka</p>
        </div> */}
      </Animated>
    </div>
  );
}

export default Education;
