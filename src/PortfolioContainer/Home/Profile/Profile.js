import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/profile.php?id=100007629078757">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="something">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/mar_seidy/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCwcTfDAKFj4pX2h10Qi1DKg">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/VillaflorMarben">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, Im <span className="highlighted-text">Marben</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {" "}
                <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 🌞",
                  1000,
                  "Flutter Developer 📱",
                  1000,
                  "React/React Native Dev  💻",
                  1000,
                  "Front End Developer 🖥",
                  1000,
                ]}
                />
              </h1>
              <span className="profile-role-tagline">
              Let all your ideas bloom. Then lets build the best app for your idea! 🍃💥
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
                {""}
                Hire Me{""}
            </button>
            <a href="Marben-Villaflor_CV_Developer.pdf" download="Marben Villaflor Developer Resume.pdf">
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
