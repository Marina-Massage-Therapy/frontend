import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import React from "react";
import "../assets/css/AboutMe.css";
import Marina from "../assets/img/marina.jpg";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <p>Who am I? </p>
        {/* <p>this is olia feature</p> */}
      </div>

      <div className="content-container">
        <div className="content-container-left">
          <p>
            As an accomplished graduate of Wingate Institute with 13 years of
            experience in massage practice, I bring a profound understanding of
            diverse massage techniques. My treatment methods are designed to
            skillfully alleviate chronic pain, offer relief to tired and aching
            muscles, induce a deep state of relaxation in the body, and foster a
            profound sense of calm in the nervous system. I am dedicated to
            providing therapeutic experiences that contribute to the overall
            well-being of my clients, drawing upon my extensive knowledge and
            commitment to excellence in the field of massage therapy.
          </p>
          <p>
            During a massage session, I work to enhance your overall well-being
            by addressing various aspects of your body. First and foremost,
            massage stimulates better blood circulation. As I use different
            techniques, the blood vessels dilate, allowing more oxygen and
            essential nutrients to reach your muscles. This improved circulation
            aids in muscle recovery and flexibility.
          </p>
          <p>
            As I work on your muscles, you'll likely notice a release of
            tension. This is crucial for reducing tightness and promoting
            relaxation. The body responds to massage by releasing endorphins,
            your natural mood enhancers and pain relievers. This is why my
            clients experience not just physical but also mental relaxation
            during and after a session.
          </p>
          <p>
            For those of you spending long hours in front of computers, engaging
            in demanding physical activities, or managing the challenges of
            student life, I highly recommend incorporating massage therapy into
            your routine.
          </p>
        </div>
        <div className="content-container-right">
          <img src={Marina} alt="MarinaPic" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
