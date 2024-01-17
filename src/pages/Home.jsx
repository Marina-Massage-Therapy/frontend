import React from "react";
import Background from "../assets/img/background.png";
import "../assets/css/Home.css";
const Home = () => {
  return (
    <div className="home-conrainer">
      <div className="background-photo">
        <img
          src={Background}
          alt="backgroundPic"
        />
        <div className="overlay-text">
          <h1>Marina Massage Therapist</h1>

          {/* <p>I'm professional massage therapist specializationes in</p> */}
          <h4>
            Your well-being is my focus, and your journey to balance and tension
            relese begins now.
          </h4>
        </div>
      </div>

      <div className="welcome-container">
        <div className="title-wrap">
          <h6>Welcome</h6>
          <h2>A Few Words About Me</h2>
        </div>
        <div className="content-wrap">
          <p>
            Welcome to a world of healing and relaxation! With 13 years of
            dedicated practice, I'm a massage therapist who is passionate about
            enhancing your well-being. My expertise lies in a diverse range of
            massage modalities, including Shiatsu, classic Swedish massage, hot
            stones therapy, deep tissue, and sport massage.
          </p>
          <br />
          <br />
          <p>
            Over the years, I have honed my skills to provide a personalized and
            therapeutic experience tailored to your unique needs. Whether you
            seek tension relief, muscle pain release, or a moment of pure
            relaxation, each session is a journey designed to promote physical
            and mental harmony.
          </p>
          <div className="read-more-btn">
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
