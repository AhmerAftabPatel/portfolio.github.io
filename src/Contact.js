import React from "react";
import "./Contact.css";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__body">
        <div className="contact__bodyLeft">
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Message</label>
            <textarea placeholder="Leave a message..." />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact__bodyRight">
          <div className="contact__networks">
            <HomeIcon />
            <p>Hyderabad, India</p>
          </div>

          <div className="contact__networks">
            <EmailIcon />
            <a href="mailto:ahmerpatel23@gmail.com">
              <p>ahmerpatel123@gmail.com</p>
            </a>
          </div>
          <div className="contact__networks">
            <GitHubIcon />
            <a href="https://github.com/ahmeraftabpatel" target="_blank">
              <p>https://github.com/ahmeraftabpatel</p>
            </a>
          </div>
          <div className="contact__networks">
            <LinkedInIcon />
            <a
              href="https://www.linkedin.com/in/ahmeraftab/"
              target="_blank"
            >
              <p>linkedin.com/in/ahmeraftab</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
